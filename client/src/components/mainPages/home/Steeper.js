import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { GlobalState } from "../../../GlobalState";
import { Alert } from "@mui/material";

const steps = ["Create Account", "Mobile,Email OTP Verification", "profile"];

export default function Steeper({ type, setType, ty }) {

  const navigate = useNavigate();
  const [details, setDetails] = useState({
    firmName: "",
    authorizedName: "",
    city: "",
    mobile: "",
    mobileOtp1: "",
    mobileOtp2: "",
    mobileOtp3: "",
    mobileOtp4: "",
    individualName: "",
    city1: "",
    mobile1: "",
    name: "",
    phone: "",
    images:""
  });
  // const [details, setDetails] = useState({});

  const state = useContext(GlobalState);
  // const [images, setImages] = useState(false);
  const [isAdmin] = state.BrokerApi.isAdmin;
  const [tabIndex, setTabIndex] = useState(1);
  // const [isActive, setIsActive] = useState(false);



  var css = {
    background: "#EBF7FF",
    border: "1.5px solid #0678C4",
    width: "220px",
    height: "60px",
    color: "#1B84C9",
    opacity: "1",
    fontFamily: "Bold"
  };

  var secondCss = {
    border: "1.5px solid #000000",
    opacity: "0.6",
    width: "220px",
    height: "60px",
    color: "#101010",
    fontFamily: "Regular",
  };


  const tabChange = (e) => {
    e.preventDefault();
    setTabIndex(1);
    for (var prop in secondCss) {
      document.getElementById("camp").style[prop] = secondCss[prop];
    }
    for (var prop in css) {
      document.getElementById("barier").style[prop] = css[prop];
    }
  };

  const tabAnother = (e) => {
    e.preventDefault();
    setTabIndex(2);
    for (var prop in css) {
      document.getElementById("camp").style[prop] = css[prop];
    }
    for (var prop in secondCss) {
      document.getElementById("barier").style[prop] = secondCss[prop];
    }
  };

  const tabAnother1 = (e) => {
    e.preventDefault();
    setTabIndex(3);
  }

  const handleChange = (e) => {
    if (document.getElementsByName(e.target.name)[0].nextElementSibling) {
      document.getElementsByName(e.target.name)[0].nextElementSibling.remove();
    }
    // setDetails({ ...details, [e.target.name]: e.target.value });

    if(e.target.name==='images')
    {
        setDetails({...details, [e.target.name]: e.target.files});
    }
    else
    {
        setDetails({...details, [e.target.name]: e.target.value});
    }
  };

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      console.log(details);
   
      let ans = await state.registerBroker(details);
      localStorage.setItem('nestoBroker', JSON.stringify(ans.user));
      localStorage.setItem("firstlogin", true);
      // window.location.href = "/brokerProfile/dashboard";
      console.log(ans);
      console.log(ans.user.images);
      navigate("/brokerProfile/dashboard");
    } 
    
    catch (error) {
       console.log(error);
    }
   

  }

  // const handleUpload = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const file = e.target.files[0];
  //     if (!file) return alert("Files doesnt exit");
  //     if (file.size > 1024 * 1024)
  //       return alert("size to large")

  //     if (file.type !== 'image/jpeg' && file.type !== 'image/png')
  //       return alert("File Format is incorrect")

  //     let formData = new FormData();
  //     formData.append('file', file);
  //     const res = await axios.post('/api/upload', formData)
  //     setImages(res.data);
  //   }

  //   catch (error) {
  //     alert(error.response.data.msg);
  //   }
  // };

  // const handleDestroy = async () => {
  //   try {
  //     await axios.post(
  //       "/api/destroy",
  //       { public_id: images.public_id }
  //     );
  //     setImages(false);
  //   } catch (error) {
  //     alert(error.response.data.msg);
  //   }
  // };


  // const styleUploads = {
  //   display: images ? "block" : "none",
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let resp = await axios.post("/api/registerBroker", { ...details, images });
  //     localStorage.setItem('nestoBroker', JSON.stringify(resp.data.user));
  //     localStorage.setItem("firstlogin", true);
  //     window.location.href = "/brokerProfile/dashboard";
     
  //     let t = document.getElementById("git");
  //     t.style.display = "block"
  //     t.innerText = `${resp.data.msg}`;
  //     setTimeout(() => {
  //       t.style.display = "none";
  //     }, 5000);
  //   }

  //   catch (error) {
  //     alert(error.response.data.msg)
  //   }
  // };

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const styleUpload = {
    opacity: activeStep === 1 ? "0" : "1",
  };

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    let flag = true;
    for (let i of document.querySelectorAll(".alertEle")) {
      i.remove();
    }
    for (let i of Object.keys(details)) {
      let t = document.getElementsByName(i);
      if (details[i] === "" && t.length !== 0) {
        flag = false;
        let nc = document.createElement("div");
        nc.setAttribute("class", "alertEle");
        nc.innerHTML = `<small class="text-error">${i} is required</small>`;
        t[0].parentNode.appendChild(nc);
      }
    }

    if (flag) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }

    if (activeStep === 0) {
      setType("popup-container1");
      let tyr = document.getElementById(ty);
      tyr.classList.remove("popup-container");
    }
  };

  const handleBack = () => {
    let tyr = document.getElementById(ty);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setType("popup-container");
    tyr.classList.remove("popup-container1");
  };

  const deepStyle = {
    backgroundColor: "#D9D9D9",
    textAlign: "center"
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const stylepeer = {
    backgroundColor: "#c00000",
    color: "#ffffff",
    width: "150px",
    maxWidth: "100%",
    height: "45px",
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Alert id="git" style={{ display: "none" }} severity="success">
        This is a success alert — check it{" "}
      </Alert>
      <Alert id="fit" style={{ display: "none" }} severity="error">
        {" "}
      </Alert>

      <Stepper style={styleUpload} className="stoper" activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}

          <form onSubmit={handleSubmit}>
            {activeStep === 0 && (
              <div className="wrapper">
                <div className="shadow">
                  <h2>Create Account</h2>
                </div>
                <div className="hr">
                  <hr className="small-hr" />
                  <hr className="step-hr" />
                </div>
                <div className="steeper-button">
                  <button id="barier" onClick={tabChange} className="broking">
                    Broking Firm{" "}
                  </button>
                  <button
                    id="camp"
                    onClick={tabAnother}
                    className="broker-individual"
                  >
                    Individual broker
                  </button>
                  <button style={{display:"none"}}  onClick={tabAnother1}>admin</button>
                </div>

                <div id="myForm" className="dance">
                  <div className="form form-steps">
                    <div className="top-forms">
                      {tabIndex === 1 && (
                        <>
                          <div className="top-form">
                            <div className="inner-form int-form2">
                              <input
                                type="text"
                                placeholder="Name of the firm"
                                name="firmName"
                                value={details?.firmName}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="inner-form int-form2">
                              <input
                                type="text"
                                placeholder="Name of  Authorized Person"
                                name="authorizedName"
                                value={details?.authorizedName}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="top-form">
                            <div className="inner-form int-form2">
                              <input
                                type="text"
                                placeholder="city"
                                name="city"
                                value={details?.city}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="inner-form int-form2">
                              <input
                                type="text"
                                placeholder="Mobile No."
                                name="mobile"
                                value={details?.mobile}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </>
                      )}

                      {tabIndex === 2 && (
                        <>
                          <div className="top-form">
                            <div className="inner-form int-form2">
                              <input
                                type="text"
                                placeholder="Name"
                                name="individualName"
                                value={details?.individualName}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="inner-form int-form2">
                              <input
                                type="text"
                                placeholder="City"
                                name="city1"
                                value={details?.city1}
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
                                value={details?.mobile1}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </>
                      )}

                      {/* {
                        tabIndex === 3 && (
                          <>
                          <div className="top-form">
                            <div className="inner-form int-form2">
                              <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={details?.name}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="inner-form int-form2">
                              <input
                                type="text"
                                placeholder="Phone"
                                name="phone"
                                value={details?.phone}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                         
                          </>
                        )
                      } */}

                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 1 && (
              <div className="wrapper">
                <div className="shadow">
                  <h2 className="step123">Mobile Verification</h2>
                </div>
                <p className="wrap-para">
                  Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual
                </p>
                <div id="myForm" className="dance">
                  <div className="form">
                    <div className="top-form">
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          name="mobileOtp1"
                          required
                          value={details?.mobileOtp1}
                          onChange={handleChange}
                          maxLength="1"
                          style={deepStyle}
                        />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          name="mobileOtp2"
                          required
                          value={details?.mobileOtp2}
                          onChange={handleChange}
                          maxLength="1"
                          style={deepStyle}
                        />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          name="mobileOtp3"
                          required
                          value={details?.mobileOtp3}
                          onChange={handleChange}
                          maxLength="1"
                          style={deepStyle}
                        />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          name="mobileOtp4"
                          value={details?.mobileOtp4}
                          onChange={handleChange}
                          required
                          maxLength="1"
                          style={deepStyle}
                        />
                      </div>
                    </div>
                    <span className="resend">Resend</span>
                  </div>
                </div>

              </div>
            )}

            {
              activeStep === 2 && (
                <div className="wrapper">
                  <div className="shadow">
                    <h2 className="step123">Mobile Verification</h2>
                  </div>
                  <p className="wrap-para">
                    Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual
                  </p>
                  <div id="myForm" className="dance">
                    <div className="form">
                      <div className="top-form">
                        <div className="inner-form inner-form-1 upload">
                          <input required type="file" name="images" multiple id="images" onChange={handleChange} />
                          {/* <div id="file_img" style={styleUploads} >
                            <img src={images ? images.url : ''} alt="not" />
                            <span onClick={handleDestroy}>X</span>
                          </div> */}
                        </div>
                      </div>
                      <span className="resend">Resend</span>
                    </div>
                  </div>

                </div>
              )
            }




            <Box
              style={{ padding: "30px 40px" }}
              sx={{
                display: "flex",
                flexDirection: "row",
                pt: 2,

              }}
            >
              <div className="next-btn">
                <Button
                  style={stylepeer}
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
              </div>
              <Box sx={{ flex: "1 1 auto" }} />

              {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}

              {activeStep === steps.length - 1 ? (
                <div className="next-btn">
                  <Button type="submit" style={stylepeer} className="next-btn">
                    Submit
                  </Button>
                </div>
              ) : (
                <div className="next-btn">
                  <Button
                    type={"button"}
                    style={stylepeer}
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                </div>
              )}
            </Box>
          </form>
        </>
      )}
    </Box>
  );
}
