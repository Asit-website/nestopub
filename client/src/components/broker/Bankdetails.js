import React,{useContext,useState,useEffect} from 'react'
import { GlobalState } from '../../GlobalState';
import axios from 'axios';
const Bankdetails = () => {

    const [show, setShow] = useState(false);
  const [show1,setShow1] = useState(false);
  const state = useContext(GlobalState);
  const [user] = state.BrokerApi.user;
  
  const [callback, setCallback] = state.BrokerApi.callback;
  const [editData,setEditData] = useState({});
  const [isEdit,setIsEdit] = useState(false);
  const [images,setImages] = useState(false);
  const [cancelCheque, setCancelCheque] = useState(false);
  const [uploadedImage1,setUploadedImage1] = useState('');
  const [uploadedImage2, setUploadedImage2] = useState('');
  const [details, setDetails] = useState({
    bankAcountName:"",
    bankName:"",
    acountNumber:"",
    ifsc:"",
    branchAddress:"",
    vpaId:""
  });

  const styleUploads = {
    display: cancelCheque ? "block" : "none",
  };



  useEffect(()=>{
    if(isEdit){
      setDetails({
         bankAcountName: editData.bankAcountName,
         bankName: editData.bankName,
         acountNumber: editData.acountNumber,
         ifsc: editData.ifsc,
         branchAddress: editData.branchAddress,
         vpaId: editData.vpaId
      });
      setUploadedImage2(editData.cancelCheque?.url);
    }
  },[editData]);
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const updateProfile = async (e) => {
    if(isEdit){
        try {
            const res = await axios.patch(`/api/editBroker/${user._id}`, {
              ...details,cancelCheque
            });
            document.getElementById("success4").style.display = "block";
            const fis = document.getElementById("fes2");
            fis.innerText = `${res.data.msg}`;
            setCallback(!callback);
            setTimeout(() => {
              document.getElementById("success4").style.display = "none";
            }, 2000);
          } 
          catch (error) {
            alert(error.response.data.msg);
          }
    }
   
  };

  

  const handleUpload = async (e)=>{
    e.preventDefault();
    try {
        const file = e.target.files[0];
        if(!file)  return alert("Files doesnt exit");
        if(file.size > 1024*1024) 
         return alert("size to large");
         if(file.type!=='image/jpeg' && file.type!=='image/png')
         return alert("File Format is incorrect")
         let formData = new FormData();
         formData.append('file',file);
         const res = await axios.post('/api/upload',formData)
         setCancelCheque(res.data);
    }
    
    catch (error) {
      alert(error.response.data.msg);
    }
 }

 const handleDestroy = async () => {
  try {
    await axios.post(
      "/api/destroy",
      { public_id: cancelCheque.public_id }
    );
    setCancelCheque(false); 
  } catch (error) {
    alert(error.response.data.msg);
  }
};

const showStyle1 = {
    display: show1 ? "block" : "none"
  }

  const imgStyle = {
    display: uploadedImage2 ? "block" : "none"
  }


  return (
    <>
        <div className="flex justify-between">
                  <p className="font-bold">Bank Details</p>
                  <p  onClick={() => { 
                     setIsEdit(true);
                     setEditData(user);
                     setShow1(!show1);
                  }} className="cursor-pointer text-blue-600">Add</p>
                </div>

                <div style={showStyle1} className="bank-hide bank-hide1" >
                 <div className="upper-b pb-2 mb-9"></div>
                 <div className="lower-b flex flex-wrap">
                  <div className="broker-myp-input">
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Name in Bank Account"
                      name='bankAcountName'
                      value={details.bankAcountName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="broker-myp-input">
                    <input
                      type="text"
                      value={details.bankName}
                      onChange={handleChange}
                      name="bankName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Bank Name"
                      required
                    />
                  </div>
                  <div className="broker-myp-input">
                    <input
                    value={details.acountNumber}
                    onChange={handleChange}
                    name="acountNumber"
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Account Number"
                      required
                    />
                  </div>
                  <div className="broker-myp-input">
                    <input
                    name='ifsc'
                    value={details.ifsc}
                    onChange={handleChange}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="IFSC code"
                      required
                    />
                  </div>
                  <div className="broker-myp-input">
                    <input
                      type="text"
                      value={details.branchAddress}
                      name="branchAddress"
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Branch Address"
                      required
                    />
                  </div>

                  <div className="broker-myp-input">
                    <input
                      type="text"
                      value={details.vpaId}
                      name="vpaId"
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="VPA ID"
                      required
                    />
                  </div>
                  
                  <div className="broker-myp-input">
                    <input
                      type="file"
                      name='file'
                      onChange={handleUpload}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Branch Address"
                      required
                    />
                     {isEdit ? <div>
                    <p className="mb-2">{uploadedImage2 ? "Uploaded CancelChe" : "Upload Cancel"}</p>
                    <img style={imgStyle}  width={30} height={30} src={uploadedImage2} alt={uploadedImage2} />
                  </div> : null}
                  <div className='file_img1' id="file_img" style={styleUploads} >
                               <img src={cancelCheque ? cancelCheque.url : ""} alt="not" />
                                <span onClick={handleDestroy}>X</span>
                        </div> 
                  </div>
                  
                  <button
                     onClick={() =>{updateProfile(user._id); 
                      setShow1(false);
                    }}
                    type="button"
                    className="text-white h-fit bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Save
                  </button>
                </div>
                </div>
    </>
  )
}

export default Bankdetails