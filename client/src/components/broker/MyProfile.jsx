import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../GlobalState";
import Sidebar from "../common/Sidebar";
import axios from "axios";
import { Alert } from "@mui/material";
import Bankdetails from "./Bankdetails";
import ClamPop from "./ClamPop/ClamPop";
const MyProfile = ({ setAuthFlag,claimPop,setClaimPop }) => {
  useEffect(() => {
    setAuthFlag(true);
  }, []);

  const [show, setShow] = useState(false);
  const [show1,setShow1] = useState(false);
  const state = useContext(GlobalState);
  const [user] = state.BrokerApi.user;
  
  const [callback, setCallback] = state.BrokerApi.callback;
  const [editData,setEditData] = useState({});
  const [isEdit,setIsEdit] = useState(false);
  const [images, setImages] = useState(false);
  const [uploadedImage1, setUploadedImage1] = useState('');
  const [details, setDetails] = useState({
    firmName: "",
    authorizedName: "",
    city: "",
    mobile: "",
    individualName: "",
    city1: "",
    mobile1: "",
    date1:"",
    date2:""
  });

  const styleUploads = {
    display: images ? "block" : "none",
  };



  useEffect(()=>{
    if(isEdit){
      console.log(editData);
      setDetails({
         id:editData._id,
         firmName:editData.firmName,
         authorizedName: editData.authorizedName,
         city:editData.city,
         mobile:editData.mobile,
         date1:editData.date1,
         individualName:editData.individualName,
         city1:editData.city1,
         mobile1:editData.mobile1,
         date2: editData.date2,
         images: editData.images
      });
      setUploadedImage1(editData.images.url);
    }
  },[editData]);
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const updateProfile = async (e) => {
    if(isEdit){
        try {
            const res = await axios.patch(`/api/editBroker/${user._id}`, {
              ...details,images
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
         setImages(res.data);
    }
    
    catch (error) {
      alert(error.response.data.msg);
    }
 }

 const handleDestroy = async () => {
  try {
    await axios.post(
      "/api/destroy",
      { public_id: images.public_id }
    );
    setImages(false); 
  } catch (error) {
    alert(error.response.data.msg);
  }
};


  const logoutUser = async () => {
    await axios.get("/api/logout");
    localStorage.removeItem("firstlogin");
    document.getElementById("success4").style.display = "block";
    const fis = document.getElementById("fes2");
    fis.innerText = "logout successfully";
    setTimeout(() => {
      window.location.href = "/";
      document.getElementById("success4").style.display = "none";
    }, 2000);
  };

  const showStyle = {
    top: show ? "0" : "-100%",
  };

  const showStyle1 = {
    display: show1 ? "block" : "none"
  }

  
  return (
    <>
      <div className="broker-home">
        <div className="success-message mrji" id="success4">
          <Alert id="fes2" severity="success"></Alert>
        </div>
        <div id="fuccess4" className="fuccess-msg">
          <Alert className="tis2" severity="error"></Alert>
        </div>
        <div className="broker-home1 flex">
          <Sidebar />
          <div className="broker-home12 flex">
            <div className="broker-myp1 mr-2 p-3">
              <div className="broker-myp11 items-center flex mb-3 mt-7">
                <img
                  src={user.images[0]}
                  alt="notch"
                  className="mr-5 prof-img"
                />
                <p className="font-bold text-lg">{user.firmName}{user.individualName}</p>
              </div>
              <div className="broker-my10 py-5 broker-myp11 cursor-pointer">
                <p>Saved Search</p>
                <div className="broker-10-alert text-sm">View</div>
              </div>
              <div className="broker-my10 broker-myp12 broker-myp-bor cursor-pointer">
                <p>Personal Details</p>
                <div
                  onClick={() => { 
                     setIsEdit(true);
                     setEditData(user);
                     setShow(!show)
                  }}
                  className="broker-10-alert text-sm"
                >
                  Edit
                </div>
              </div>
              <div className="broker-my10 broker-myp13 broker-myp-bor cursor-pointer">
                <p>Payment Status</p>
              </div>
              <div className="broker-my10 broker-myp14 broker-myp-bor cursor-pointer">
                <p>Claim Brokerage (Payment)</p>
                <div onClick={()=> setClaimPop(true)} className="broker-10-alert text-sm">Claim</div>
              </div>
              <div className="broker-my10 broker-myp15 broker-myp-bor cursor-pointer">
                <p>Download Legal Documents</p>
              </div>
              <div className="broker-my10 broker-myp16 broker-myp-bor cursor-pointer">
                <p>Raise Query</p>
              </div>
              <div className="broker-my10 broker-myp17 py-5 cursor-pointer">
                <p>Nesto Support</p>
              </div>
              <div
                onClick={logoutUser}
                className="broker-my18 cursor-pointer mt-12 flex items-center"
              >
                <img className="mr-2" src="/static/images/logout.png" alt="" />
                <p>Sign Out</p>
              </div>
            </div>
            <div className="broker-myp2 ml-2">
              <div
                style={showStyle}
                className="broker-myp21 broker-myp20 p-3 mb-3 bg-white"
              >
                <div className="upper-b flex justify-between pb-2 mb-9">
                  <p>{user.firmName ? "Personal Details BrokingFirm" : "Personal Details IndividualBroker"}</p>
                  <div>!</div>
                </div>
                {
                  user.firmName && 
                   <div className="lower-b flex flex-wrap">
                  <div className="broker-myp-input">
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Name of the firm"
                      required
                      value={details?.firmName}
                      name="firmName"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="broker-myp-input">
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Name of the Authorised Person"
                      required
                      name="authorizedName"
                      value={details?.authorizedName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="broker-myp-input">
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="City"
                      required
                      name="city"
                      value={details?.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="broker-myp-input">
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Mobile No."
                      required
                      name="mobile"
                      value={details?.mobile}
                      onChange={handleChange}
                    />
                    
                  </div>
                  <div className="broker-myp-input">
                    <input
                      type="date"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Date of birth"
                      required
                      name="date1"
                      value={details.date1}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="broker-myp-input">
                    <input
                      type="file"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={handleUpload}  name="file"
                      required
                    />
                    {isEdit ? <div>
                    <p className="mb-2">Uploaded Profile pic</p>
                    <img width={30} height={30} src={uploadedImage1} alt={uploadedImage1} />
                  </div> : null}
                  <div id="file_img" style={styleUploads} >
                               <img src={images ? images.url : ""} alt="not" />
                                <span onClick={handleDestroy}>X</span>
                        </div> 
                  </div>
                  <button
                    className="text-white h-fit bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    type="submit"
                    onClick={() =>{updateProfile(user._id); 
                      setShow(false);
                    }}
                  >
                    Save
                  </button>
                </div>
                }
                {
                  user.individualName && 
                     <div className="lower-b flex flex-wrap">
                  <div className="broker-myp-input">
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Name"
                      required
                      name="individualName"
                      value={details?.individualName}       
                      onChange={handleChange}
                    />
                  </div>
                  <div className="broker-myp-input">
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      placeholder="City"
                      name="city1"
                      value={details?.city1}
                      onChange={handleChange}
                    />
                  </div>
                 
                  <div className="broker-myp-input">
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Mobile No."
                      required
                      name="mobile1"
                      value={details?.mobile1}
                      onChange={handleChange}
                    />
                    
                  </div>
                  <div className="broker-myp-input">
                    <input
                      type="date"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Date of birth"
                      required
                      name="date2"
                      value={details.date2}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="broker-myp-input">
                    <input
                      type="file"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={handleUpload}  name="file"
                    />
                    {isEdit ? <div>
                    <p className="mb-2">Uploaded Image</p>
                    <img width={30} height={30} src={uploadedImage1} alt={uploadedImage1} />
                  </div> : null}
                  <div id="file_img" style={styleUploads} >
                               <img src={images ? images.url : ""} alt="not" />
                                <span onClick={handleDestroy}>X</span>
                        </div> 
                  </div>
                  <button
                    className="text-white h-fit bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    type="submit"
                    onClick={() =>{updateProfile(user._id); 
                      setShow(false);
                    }}
                  >
                    Save
                  </button>
                </div>
                }
               
              </div>
              <div className="broker-myp22 broker-myp20 p-3 mb-3 bg-white">
                {/* <div className="flex justify-between">
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
                      required
                    />
                  </div>
                  <div className="broker-myp-input">
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Bank Name"
                      required
                    />
                  </div>
                  <div className="broker-myp-input">
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Account Number"
                      required
                    />
                  </div>
                  <div className="broker-myp-input">
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="IFSC code"
                      required
                    />
                  </div>
                  <div className="broker-myp-input">
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Branch Address"
                      required
                    />
                  </div>
                  
                  <button
                    type="button"
                    className="text-white h-fit bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Save
                  </button>
                </div>
                </div> */}
                 <Bankdetails/>
              </div>


              <div className="broker-myp23 broker-myp20 p-3 bg-white">
                <div className="upper-b flex justify-between pb-2 mb-9">
                  <p>Change Password</p>
                  <div>!</div>
                </div>
                <div className="lower-b flex flex-wrap">
                  <div className="broker-myp-input">
                    <input
                      type="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Old Password"
                      required
                    />
                  </div>
                  <div className="broker-myp-input">
                    <input
                      type="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="New Password"
                      required
                    />
                  </div>
                  <button
                    type="button"
                    className="text-white h-fit bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        claimPop && <ClamPop setClaimPop={setClaimPop}/>
      }
    </>
  );
};

export default MyProfile;
