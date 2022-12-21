import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { GlobalState } from "../../GlobalState";
import { Alert } from "@mui/material";
const BrokerItem = ({ user, setUser, profilePop, setProfilePop }) => {
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [callback, setCallback] = state.BrokerApi.callback;
  const [images,setImages] = useState(false);
  const [details, setDetails] = useState({
    firmName: "",
    authorizedName: "",
    city: "",
    mobile: "",
    individualName: "",
    city1: "",
    mobile1: "",
  });

  const naviagte = useNavigate();

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const DeleteProfile = async (e) => {
    try {
      if (window.confirm("do you want to delete your account")) {
        const res = await axios.delete(`/api/deleteBroker/${user._id}`);
        window.location.href = "/brokerProfile";
        alert(res.data.msg);
      }
      setCallback(!callback);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  const updateProfile = async (e) => {
    try {
      const res = await axios.patch(
        `/api/editBroker/${user._id}`,
        { ...details,images}
      );

      naviagte("/brokerProfile");
      let t = document.getElementById("git");
      t.style.display="block";
      t.innerText=`${res.data.msg}`;
      t.innerHTML=`<div class="alertji"><i class="fa-solid fa-circle-check"></i><p>${res.data.msg}</p></div>`;
      setTimeout(() => {
        t.style.display="none";
      }, 5000);
      setCallback(!callback);
    } catch (error) {
      alert(error.response.data.msg);
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


const styleUploads = {
  display: images ? "block" : "none",
};
  return (
    <div>
      {user.firmName && (
        <>
        <div className="user-card">
        <img className="brok-img" src={user.images.url} alt="not" />
          <h2>Broking Firm</h2>
          <p><span>Name</span>: {user.firmName}</p>
          <p><span>AutohirizedName</span>: {user.authorizedName}</p>
          <p><span>City</span>: {user.city}</p>
          <p><span>Phone Number</span>: {user.mobile}</p>
          <div className="btn-adhar">
          <button type="submit" onClick={() => DeleteProfile(user._id)}>
        Delete
      </button>
      <button onClick={() => setProfilePop(true)}>Edit Profile</button>
          </div>
          </div>
        </>
      )}
      {user.individualName && (
        <>
        <div className="user-card">
          <img className="brok-img" src={user.images.url} alt="" />
          <h2>Individual Broker</h2>
          <p>IndividualBrokerName :{user.individualName}</p>
          <p>IndividualBrokerCity :{user.city1}</p>
          <p>IndividualBrokerPhone :{user.mobile1}</p>
          <div className="btn-adhar">
          <button type="submit" onClick={() => DeleteProfile(user._id)}>
        Delete
      </button>
      <button onClick={() => setProfilePop(true)}>Edit Profile</button>
      </div>
      </div>
        </>
      )}

      {
        user.name && (
          <>
            <p>{user.name}</p>
            <p>{user.phone}</p>
          </>
        )
      }
      {/* <button type="submit" onClick={() => DeleteProfile(user._id)}>
        Delete
      </button>
      <button onClick={() => setProfilePop(true)}>Edit Profile</button> */}
      {profilePop && (
        <>
          <div className="home-pop">
            <i
              onClick={() => setProfilePop(false)}
              className="fa-solid fa-xmark"
            ></i>
            <div className="popup-container">
              {user.firmName && (
                <>
                  <div className="wrapper">
                  <div id="git">
                  {/* <Alert  severity="success" id="git">

                  </Alert> */}
                  
                  </div>
                    <div className="shadow">
                      <h2>Broker Updation</h2>
                    </div>
                    <div id="myForm" className="dance">
                      <div className="form form-steps">
                        <div className="top-forms">
                          <div className="top-form">
                            <div className="inner-form int-form2">
                              <input
                                className="brokerItem"
                                type="text"
                                placeholder="Name of the firm"
                                name="firmName"
                                value={details?.firmName || user.firmName}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="inner-form int-form2">
                              <input
                                className="brokerItem"
                                type="text"
                                placeholder="Name of  Authorized Person"
                                name="authorizedName"
                                value={
                                  details?.authorizedName || user.authorizedName
                                }
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="top-form">
                            <div className="inner-form int-form2">
                              <input
                                className="brokerItem"
                                type="text"
                                placeholder="city"
                                name="city"
                                value={details?.city || user.city}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="inner-form int-form2">
                              <input
                                className="brokerItem"
                                type="text"
                                placeholder="Mobile No."
                                name="mobile"
                                value={details?.mobile || user.mobile}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="inner-form inner-form-1 upload">
                        <input required type="file" name="file" id="file_up" onChange={handleUpload} />
                      <div id="file_img" style={styleUploads} >
                               <img src={images ? images.url : ""} alt="not" />
                                <span onClick={handleDestroy}>X</span>
                        </div> 
                      </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {user.individualName && (
                <>
                  <div className="wrapper">
                    <div className="shadow">
                      <h2>Broker Updation</h2>
                    </div>
                    <div id="myForm" className="dance">
                      <div className="form form-steps">
                        <div className="top-forms">
                          
                            <div className="top-form">
                              <div className="inner-form int-form2">
                                <input
                                  type="text"
                                  placeholder="Name"
                                  name="individualName"
                                  value={
                                    details?.individualName ||
                                    user.individualName
                                  }
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="inner-form int-form2">
                                <input
                                  type="text"
                                  placeholder="City"
                                  name="city1"
                                  value={details?.city1 || user.city1}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="top-form">
                              <div className="inner-form int-form2">
                                <input
                                  type="text"
                                  placeholder="Mobile"
                                  name="mobile1"
                                  value={details?.mobile1 || user.mobile1}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
               {
                user.name && (
                  <>
                   
                  </>
                )
               }
              <button
                className="brokerItem-btn"
                type="submit"
                onClick={() => updateProfile(user._id)}
              >
                Update
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BrokerItem;
