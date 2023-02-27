import React, { useContext, useEffect,useState } from "react";
import AdminMenu from "./AdminMenu";
import { GlobalState } from "../../GlobalState";
import axios from "axios";
const AdminProfile = ({ setAuthFlag,setAlert }) => {
  useEffect(() => {
    setAuthFlag(false);
  }, []);

   const [images, setImages] = useState(false);
   const [uploadedImage1, setUploadedImage1] = useState('');
   const [editData, setEditData] = useState({});
   const [isEdit, setIsEdit] = useState(false);

   const [show,setShow] = useState(false);

   const styleShow = {
    display: show ? "block" : "none"
   }

   
   const state = useContext(GlobalState);
   const [user] = state.BrokerApi.user;
   const [callback, setCallback] = state.BrokerApi.callback;
   const styleUploads = {
    display: images ? "block" : "none",
 };


   const [details, setDetails] = useState({
     name: "",
     phone: "",
     email: "",
  });

  useEffect(() => {
    if (isEdit) {
       console.log(editData);
       setDetails({
          id: editData._id,
          name: editData.name,
          phone: editData.phone,
          email: editData.email,
          images: editData.images.url
       });
       setUploadedImage1(editData.images.url);
    }
 }, [editData]);
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
 };

 const handleUpload = async (e) => {
  e.preventDefault();
  try {
     const file = e.target.files[0];
     if (!file) return alert("Files doesnt exit");
     if (file.size > 1024 * 1024)
        return alert("size to large");
     if (file.type !== 'image/jpeg' && file.type !== 'image/png')
        return alert("File Format is incorrect")
     let formData = new FormData();
     formData.append('file', file);
     const res = await axios.post('/api/upload', formData)
     setImages(res.data);
     setAlert("success",res.data.msg);
  }

  catch (error) {
    setAlert("error",error.response.data.msg);
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
     setAlert("error",error.response.data.msg);
  }
};

const updateProfile = async(e) =>{
   if(isEdit){
       try {
        const res = await axios.patch(`/api/adminEdit/${user._id}`, {
          ...details, images
       });
       localStorage.setItem("firstlogin", true);
       setAlert("success",res.data.msg);
       setCallback(!callback);
       } 
       
       catch (error) {
        setAlert("error",error.response.data.msg);
       }
   }
}
  return (
    <>
      <div className="w-full">
        <div className="flex w-full">
          <AdminMenu />
          <div className="w-full m-10">
            <div className="flex">
              <div className="cardos">
                <div class="carding">
                  <img src={user?.images.url} alt="John" />
                  <div className="py-4">
                    <h1 className="text-3xl">{user?.name}</h1>
                    <p className="text-2xl">{user?.phone}</p>
                    <p className="title text-2xl">{user?.email}</p>
                  </div>
                  {/* <div>
    <a className='a' href="#"><i class="fa fa-dribbble"></i></a> 
    <a className='a' href="#"><i class="fa fa-twitter"></i></a>  
    <a className='a' href="#"><i class="fa fa-linkedin"></i></a>  
    <a className='a' href="#"><i class="fa fa-facebook"></i></a> 
  </div> */}
                  <p>
                    <button onClick={()=>{
                        setIsEdit(true);
                        setEditData(user);
                        setShow(!show)
                    }} className="xanji">Edit Profile</button>
                  </p>
                </div>
              </div>
              <div style={styleShow}  className="update-admin w-full ml-10">
               
                  <div class="mb-6">
                    <label
                      htmlFor="name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Name"
                      name="name"
                      value={details?.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      htmlFor="phone"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Phone"
                      value={details?.phone}
                      name="phone"
                      onChange={handleChange}
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      htmlFor="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Email"
                      name="email"
                      value={details?.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      for="file_input"
                    >
                      Upload profile
                    </label>
                    <input
                      class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      id="file_input"
                      type="file"
                      name="file"
                      onChange={handleUpload}
                    />
                     {isEdit ? <div>
                                    <p className="mb-2">Uploaded Profile pic</p>
                                    <img width={30} height={30} src={uploadedImage1} alt={uploadedImage1} />
                                 </div> : null}
                                 <div  id="file_img" style={styleUploads} >
                                    <img  className="adminFile" src={images ? images.url : ""} alt="not" />
                                    <span onClick={handleDestroy}>X</span>
                                 </div>
                  </div>
                  <button
                    type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={()=>{
                       updateProfile(user._id);
                       setShow(false)
                    }}
                  >
                    Submit
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
