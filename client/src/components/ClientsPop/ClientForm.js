import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { GlobalState } from "../../GlobalState";
const ClientForm = () => {
 
  const state = useContext(GlobalState);
  const [callback,setCallback] = state.ClientApi.callback;
  const [token] = state.token;
  const [BuyerImages,setBuyerImages] = useState(false);
  const myform = {
    marginTop: "-30px",
  };

  const [client, setClient] = useState({
    BuyName: "",
    BuyerMobile: "",
    BuyerLocation: "",
    BuyerBudget: "",
    BuyerBhk: "",
  });


  const handleUpload = async(e) =>{
    e.preventDefault();
    try {
        const file = e.target.files[0];
        if(!file)  return alert("Files doesnt exit");
        if(file.size > 1024*1024) 
         return alert("size to large")
         if(file.type!=='image/jpeg' && file.type!=='image/png')
         return alert("File Format is incorrect")
         let formData = new FormData();
         formData.append('file',file);
         const res = await axios.post('/api/upload',formData)
         setBuyerImages(res.data);
    }
    
    catch (error) {
      alert(error.response.data.msg);
    }
  }

  const handleDestroy = async () => {
    try {
      await axios.post(
        "/api/destroy",
        { public_id: BuyerImages.public_id }
      );
      setBuyerImages(false); 
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  const styleUploads = {
    display: BuyerImages ? "block" : "none",
  };


  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };
  const handleClient = async (e) => {
    e.preventDefault();
    try {
        let resp = await axios.post("/api/addClient", {...client,BuyerImages},{
          headers: {Authorization:token}
        });
        alert(resp.data.msg);  
        setCallback(!callback)
    } 
    
    catch (error) {
        alert(error.response.data.msg) 
    }
    
  };

 
  return (
    <>
      <div className="wrapper">
        <div className="shadow">
          <h2>Add New Client</h2>
        </div>
        <div className="hr">
          <hr className="small-hr" />
          <hr className="step-hr" />
        </div>
        <form onSubmit={handleClient}>
          <div id="myForm" style={myform} className="dance">
            <div className="form form-steps">
              <div className="top-forms">
                <div className="top-form">
                  <div className="inner-form int-form2">
                    <input
                      type="text"
                      placeholder="Name of the Buyer"
                      name="BuyName"
                      value={client.BuyName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="inner-form int-form2">
                    <input
                      type="text"
                      placeholder="Buyer Mobile Number"
                      name="BuyerMobile"
                      value={client.BuyerMobile}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="top-form">
                  <div className="inner-form int-form2">
                    <input
                      type="text"
                      placeholder="Location"
                      name="BuyerLocation"
                      value={client.BuyerLocation}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="inner-form int-form2">
                    <input
                      type="text"
                      placeholder="Budget"
                      name="BuyerBudget"
                      value={client.BuyerBudget}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="top-form">
                  <div className="inner-form int-form2">
                    <input
                      type="text"
                      placeholder="BHK"
                      name="BuyerBhk"
                      value={client.BuyerBhk}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="inner-form inner-form-1 upload">
                    <input onChange={handleUpload}  type="file" name="file" id="file_up" />
                    <div id="file_img" style={styleUploads} >
                               <img className="parrot" src={BuyerImages ? BuyerImages.url : ''} alt="not" />
                                <span onClick={handleDestroy}>X</span>
                        </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="Client-btn">Add</button>
        </form>
      </div>
    </>
  );
};

export default ClientForm;
