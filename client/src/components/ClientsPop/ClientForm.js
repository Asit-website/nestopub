import React, { useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { GlobalState } from "../../GlobalState";
import { useNavigate } from "react-router-dom";
import moment from 'moment';
import Datetime from 'react-datetime';

import Alert from '@mui/material/Alert';
const ClientForm = ({ isEdit, editData, setPopAdd }) => {
  const state = useContext(GlobalState);
  const [callback, setCallback] = state.ClientApi.callback;
  const [token] = state.token;
  const [BuyerImages, setBuyerImages] = useState(false);
  const navigate = useNavigate();
  const [uploadedImage, setUploadedImage] = useState('');

  const myform = {
    marginTop: "-30px",
  };

  const [client, setClient] = useState({
    BuyName: "",
    BuyerMobile: "",
    BuyerLocation: "",
    BuyerBudget: "",
    BuyerBhk: "",
    date:"",
  });

  useEffect(() => {
    if (isEdit) {
      console.log(editData);
      setClient({
        id: editData._id,
        BuyName: editData.BuyName,
        BuyerMobile:editData.BuyerMobile,
        BuyerLocation: editData.BuyerLocation,
        BuyerBudget: editData.BuyerBudget,
        BuyerBhk: editData.BuyerBhk,
        date: new Date(editData.date)
      });
      setUploadedImage(editData.BuyerImages.url);
    }
  }, [editData]);

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const file = e.target.files[0];
      if (!file) return alert("Files doesnt exit");
      if (file.size > 1024 * 1024)
        return alert("size to large")
      if (file.type !== 'image/jpeg' && file.type !== 'image/png')
        return alert("File Format is incorrect")
      let formData = new FormData();
      formData.append('file', file);
      const res = await axios.post('/api/upload', formData)
      console.log(res);
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

  const onchange = (e) => {
    setClient({ ...client, date: new Date(moment(e).format()) });
};

  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleClient = async (e) => {
    e.preventDefault();
    console.log('yes');
    // setClient({...client, date: new Date(client.date).getTime()});
    client['date']=new Date(client.date).getTime();

    if(isEdit)
    {
      console.log('if');
      console.log(client);
      const data = await state.editClient({ ...client, BuyerImages });
      console.log(data);
      if(data.status)
      {
        alert(data.message);
        setCallback(!callback);
        setPopAdd(false);
      }
      else
      {
        alert("Something went wrong!");
      }
    }
    else
    {
      try {
        let resp = await axios.post("/api/addClient", { ...client, BuyerImages }, {
          headers: { Authorization: token }
        });
        document.getElementById("success-msg").style.display = "block";
        const fis = document.getElementById("fes");
        fis.innerText = `${resp.data.msg}`;
        setTimeout(() => {
          document.getElementById("success-msg").style.display = "none";
          navigate("/brokerProfile/dashboard");
        }, 2000);
        setCallback(!callback);
  
        setClient({
          BuyName: "",
          BuyerMobile: "",
          BuyerLocation: "",
          BuyerBudget: "",
          BuyerBhk: "",
          date:""
        });
  
        setBuyerImages(false);
      }
      catch (error) {
        document.getElementById("fuccess").style.display = "block";
        const tis = document.querySelector(".tis");
        tis.innerText = `${error.response.data.msg}`;
        setTimeout(() => {
          document.getElementById("fuccess").style.display = "none";
        }, 2000);
      }
    }

  };

  return (
    <>
      <div className="wrapper">
        <div className="shadow">
          {isEdit ? <h2>Edit Client</h2> : <h2>Add New Client</h2>}
        </div>
        <div className="success-message mrji" id="success-msg">
          <Alert id='fes' severity="success"></Alert>
        </div>
        <div id='fuccess' className="fuccess-msg">
          <Alert className='tis' severity="error"></Alert>
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
                 
                  {isEdit ? <div>
                    <p className="mb-2">Uploaded Image</p>
                    <img width={30} height={30} src={uploadedImage} alt={uploadedImage} />
                  </div> : null}
                  <div className="inner-form inner-form-1 upload">
                    <input onChange={handleUpload} type="file" name="file" id="file_up" />
                    <div id="file_img" style={styleUploads} >
                      <img className="parrot" src={BuyerImages ? BuyerImages.url : ''} alt="not" />
                      <span onClick={handleDestroy}>X</span>
                    </div>
                  </div>
                </div>

                <div className="top-form">
                  <div className="inner-form int-form2">
                  <Datetime className='visit-date' onChange={onchange} value={client.date} inputProps={{ placeholder: "Choose date and time" }} />
                  </div>
                </div>

              </div>
            </div>
          </div>
          <button className="Client-btn">{isEdit ? "Update" : "Add"}</button>
        </form>
      </div>
    </>
  );
};

export default ClientForm;
