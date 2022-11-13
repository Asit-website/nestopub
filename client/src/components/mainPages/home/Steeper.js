import React, { useState} from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios  from "axios";
// import { GlobalState } from "../../../GlobalState";
import { Alert } from "@mui/material";



const steps = [
  "Create Account",
  "Mobile,Email OTP Verification",
];

export default function Steeper({type,setType,ty}) {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    mobileOtp: "",
    mobileOtp2: "",
    mobileOtp3: "",
    mobileOtp4: "",
    emailOtp: "",
    emailOtp2: "",
    emailOtp3: "",
    emailOtp4: "",
    experience: "",
    builderList: "",
    registrationNumber: "",
    certificationCopy: "",
    address: "",
    state: "",
    pinCode: "",
    city: "",
    area: "",
    whatsapp: "",
  });


  // const state = useContext(GlobalState);
  // const [brok] = state.BrokerApi.brok;
  // const [callback,setCallback] = state.BrokerApi.callback;

  const [tabIndex,setTabIndex] = useState(1);
  // const [isActive, setIsActive] = useState(false);

  const [images,setImages] = useState(false);
  const [images1,setImages1] = useState(false);
  const [images2,setImages2] = useState(false);
  const [images3,setImages3] = useState(false);

 var css = { "background": "#EBF7FF", "border": "1.5px solid #0678C4", "width": "220px",
"height": "60px", "color": "#1B84C9", "opacity": "1" };

var secondCss = {"border": "1.5px solid #000000", "opacity": "0.6", "width": "220px", "height": "60px", "color": "#101010"}



  const tabChange = (e) => {
    e.preventDefault();
    setTabIndex(1);  
    for(var prop in secondCss){
      document.getElementById("camp").style[prop] = secondCss[prop];
    }
    for(var prop in css){
      document.getElementById("barier").style[prop] = css[prop];
    }
  }

  const tabAnother = (e) =>{
    e.preventDefault();
    setTabIndex(2);
    for(var prop in css) {
      document.getElementById("camp").style[prop] = css[prop];
    }
    for(var prop in secondCss){
      document.getElementById("barier").style[prop] = secondCss[prop];
    }
  }

  
 const handleUplaod = async(e) =>{
    e.preventDefault();
    try {
      const file = e.target.files[0];
      const file1 = e.target.files[0];
      const file2 = e.target.files[0];
      const file3 = e.target.files[0];
      if(!file || !file1 || !file2 || !file3)  return alert("Files doesnt exit");
      if(file.size > 1024*1024 || file1.size > 1024*1024 || file2.size > 1024*1024 || file3.size > 1024*1024 ) 
       return alert("size to large");

       if((file.type!=='image/jpeg' && file.type!=='image/png') || (file1.type!=='image/jpeg' && file1.type!=='image/png') || (file2.type!=='image/jpeg' && file2.type!=='image/png') || (file3.type!=='image/jpeg' && file3.type!=='image/png'))
       return alert("File Format is incorrect");
       let formData = new FormData();
       let formData1 = new FormData();
       let formData2 = new FormData();
       let formData3 = new FormData();
       formData.append('file',file);
       formData1.append('file1',file1);
       formData2.append('file2',file2);
       formData3.append('file3',file3);
       const res = await axios.post('/api/upload',formData,formData1,formData2,formData3,{
        headers: {'Content-Type': 'multipart/form-data'}
       })

       setImages(res.data);
       setImages1(res.data);
       setImages2(res.data);
       setImages3(res.data);
    } 
    
    catch (error) {
       console.log(error.message);
    }
      
 }

 

 
  const handleChange = (e) => {

    if (document.getElementsByName(e.target.name)[0].nextElementSibling) {
      document.getElementsByName(e.target.name)[0].nextElementSibling.remove();
    }

    // if (
    //   e.target.name === "file" ||
    //   e.target.name === "file1" ||
    //   e.target.name === "file2" ||
    //   e.target.name === "file3"
    // ) {
    //   setDetails({ ...details, [e.target.name]: e.target.files[0] });
    //   e.preventDefault();
    //   try {
    //     if (!e.target.files[0]) return alert("Files doesnt exit");

    //     if (e.target.files[0] > 1024 * 1024) return alert("size to large");

    //     if (
    //       e.target.files[0] !== "image/jpeg" &&
    //       e.target.files[0] !== "image/png"
    //     )
    //       return alert("file format is incorrect");

    //     let formData = new FormData();
    //     formData.append("file", e.target.files[0]);
    //     formData.append("file1", e.target.files[0]);
    //     formData.append("file2", e.target.files[0]);
    //     formData.append("file3", e.target.files[0]);
       


    //     const res = await axios.post('/api/upload',formData,{
    //       headers: {'Content-Type': 'multipart/form-data', 'Authorization': ''}
    //   })

    //   console.log(res.data);
    //   setImages(res.data);
    //   } 
    //   catch (error) {
    //     alert(error.response.data.msg)
    //   }
      setDetails({ ...details, [e.target.name]: e.target.value });
  };

 

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let resp = await axios.post("/api/broker", {...details,images})
  //     let t = document.getElementById("git");
  //     t.style.display="block"
  //     t.innerText=`${resp.data.msg}`;
  //     setTimeout(() => {
  //       t.style.display="none";
  //     }, 5000);
  //     setCallback(!callback);
  //   } 
    
  //   catch (error) {
  //     let t = document.getElementById("fit");
  //     t.style.display="block"
  //     t.innerText=`${error.response.data.msg}`;
  //     setTimeout(() => {
  //       t.style.display="none";
  //     }, 5000);
  //   }
  // };

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());


  const styleUpload = {
    opacity: activeStep === 1 ? '0' : '1',
  }
  
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

    

    
    // if(activeStep===0){
    //   if(details.firstName.length ===0 || details.lastName.length===0 || details.mobile.length===0 || details.email.length === 0){
    //     alert("plz fill all the data");
    //   }
    //   else{
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //     setSkipped(newSkipped);
    //    }
    // }

    // else if(activeStep === 1){
    //   if(details.mobileOtp.length === 0 || details.mobileOtp2.length == 0 || details.mobileOtp3.length === 0 || details.mobileOtp4.length === 0 || details.emailOtp.length === 0 || details.emailOtp2.length === 0 || details.emailOtp3.length === 0 || details.emailOtp4.length === 0){
    //     alert("plz fill the data");
    //    }
    //    else{
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //     setSkipped(newSkipped);
    //    }
    // }

    //  else{
    //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //   setSkipped(newSkipped);
    //  }

    //  <small className="text-error">First name is required</small>

    // console.log(t);
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

    if(activeStep === 0){
      setType("popup-container1");
      let tyr = document.getElementById(ty);
      tyr.classList.remove("popup-container")
    }
    
  };

  const handleBack = () => {
    let tyr = document.getElementById(ty);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
      setType("popup-container");
      tyr.classList.remove("popup-container1");
  };

  const deepStyle = {
    backgroundColor:'#D9D9D9',
  }


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
    <Box  sx={{ width: "100%" }}>
    <Alert id="git" style={{display:'none'}} severity="success">This is a success alert — check it </Alert>
    <Alert id="fit" style={{display:'none'}}  severity="error"> </Alert>
     
      <Stepper style={styleUpload}  className="stoper"  activeStep={activeStep}>
        {steps.map((label, index) => {
          console.log(index);
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
        
          <form >
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
                      <button id="barier" onClick={tabChange} className="broking">Broking Firm </button>
                      <button id="camp" onClick={tabAnother} className="broker-individual">Individual broker</button>
                  </div>
                  
                <div id="myForm" className="dance">
                  <div className="form">
                   <div className="top-forms">
                   {
                    tabIndex === 1 && <>
                    <div className="top-form">
                      <div className="inner-form">
                        <input
                          type="text"
                          placeholder="Name of the firm"
                          name="firstName"
                        
                          value={details.firstName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="inner-form">
                        <input
                          type="text"
                          placeholder="Name of  Authorized Person"
                          name="lastName"
                          value={details.lastName}
                          onChange={handleChange}
                          
                        />
                      </div>
                    </div>
                    <div className="top-form">
                      <div className="inner-form">
                        <input
                          type="text"
                          placeholder="city"
                          name="mobile"
                         
                          value={details.mobile}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="inner-form">
                        <input
                          type="text"
                          placeholder="Mobile No."
                          name="email"
                          value={details.email}
                          onChange={handleChange}
                         
                        />
                      </div>
                    </div>
                    </>
                   }

                   {
                    tabIndex === 2 && <>
                    <div className="top-form">
                      <div className="inner-form">
                        <input
                          type="text"
                          placeholder="Name"
                          name="firstName"
                        
                          value={details.firstName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="inner-form">
                        <input
                          type="text"
                          placeholder="City"
                          name="lastName"
                          value={details.lastName}
                          onChange={handleChange}
                          
                        />
                      </div>
                    </div>
                    <div className="top-form">
                      <div className="inner-form">
                        <input
                          type="text"
                          placeholder="Mobile"
                          name="mobile"
                         
                          value={details.mobile}
                          onChange={handleChange}
                        />
                      </div>
                      {/* <div className="inner-form">
                        <input
                          type="text"
                          placeholder="Mobile No."
                          name="email"
                          value={details.email}
                          onChange={handleChange}
                         
                        />
                      </div> */}
                    </div>
                    </>
                   }
                    
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente quas natus optio dicta, impedit minus eum blanditiis
                  ex adipisci{" "}
                </p>
                <div id="myForm" className="dance">
                  <div className="form">
                    <div className="top-form">
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          name="mobileOtp"
                          required
                          value={details.mobileOtp}
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
                          value={details.mobileOtp2}
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
                          value={details.mobileOtp3}
                          onChange={handleChange}
                          maxLength="1"
                          style={deepStyle}
                        />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          name="mobileOtp4"
                          value={details.mobileOtp4}
                          onChange={handleChange}
                          required
                          maxLength="1"
                          style={deepStyle}
                        />
                      </div>
                     
                    </div>
                    <span className="resend">Resend</span>
                    {/* <div className="top-form">
           
          </div> */}
                  </div>
                </div>
                {/* <h2>Email OTP Verification</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente quas natus optio dicta, impedit minus eum blanditiis
                  ex adipisci{" "}
                </p> */}
                <div id="myForm" className="dance">
                  <div className="form">
                    {/* <div className="top-form">
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          name="emailOtp"
                          required
                          value={details.emailOtp}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          name="emailOtp2"
                          required
                          value={details.emailOtp2}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          name="emailOtp3"
                          required
                          value={details.emailOtp3}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          name="emailOtp4"
                          value={details.emailOtp4}
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            )}

            {/* {activeStep === 2 && (
             
              <input
                          type="text"
                          placeholder="Experience in the field (years.)"
                          name="experience"
                          value={details.experience}
                          onChange={handleChange}
                          required
                        />
              
             
            )} */}

            {/* {activeStep === 3 && (
              <div className="wrapper">
                <h2>Address Information</h2>
                <div id="myForm" className="dance">
                  <div className="form">
                    <div className="bottom-form">
                      <div className="inner-form">
                        <textarea
                          placeholder="Address"
                          name="address"
                          value={details.address}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="top-form">
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          placeholder="State"
                          name="state"
                          value={details.state}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          placeholder="PIN Code"
                          name="pinCode"
                          value={details.pinCode}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          placeholder="City"
                          name="city"
                          value={details.city}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          placeholder="Area"
                          name="area"
                          value={details.area}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
           
            {activeStep === 4 && (
              <div className="wrapper">
                <h2>Document Submition</h2>
                <div id="myForm" className="dance">
                  <div className="form">
                    <div className="top-form">
                      <div className="inner-form">
                     
                        <label htmlFor="file">Photo of PAN</label>
                        <input
                          className="fileup"
                          type="file"
                          placeholder="Photo of Business Card / Shop (Optional)"
                          name="file"
                          onChange={handleUplaod}
                        />
                            <img width="100" height="100" src={images ? images.url : ''} alt="not" />
                      </div>
                      <div className="inner-form">
                   
                        <label htmlFor="file1">Photo of Aadhar</label>

                        <input
                          className="fileup"
                          type="file"
                          placeholder="Rera Certification Copy"
                          name="file1"
                          onChange={handleUplaod}
                          
                        />
                        
                           <img width="100" height="100" src={images1 ? images1.url : ''} alt="no" />
                        
                         
                      </div>
                    </div>
                    <div className="top-form">
                      <div className="inner-form">
                    
                        <label htmlFor="file2">
                          Photo of Business Card / Shop (Optional)
                        </label>
                        <input
                          className="fileup"
                          type="file"
                          placeholder="Photo of Pan"
                          name="file2"
                          onChange={handleUplaod}
                          
                        />
                         <img width="100" height="100" src={images2 ? images2.url : ''} alt="not" />
                      </div>
                      <div className="inner-form">
                    
                        <label htmlFor="file3">
                          Rera Certification Copy (Optional)
                        </label>
                        <input
                          className="fileup"
                          type="file"
                          placeholder="Photo of Aadhar"
                          name="file3"
                          onChange={handleUplaod}
                          
                        />
                         <img width="100" height="100" src={images3 ? images3.url : ''} alt="not" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeStep === 5 && (
              <div className="wrapper">
               
                <div className="whatsapp-box">
                  <div className="imgs-what">
                    <img src="" alt="" />
                  </div>
                  <div id="myForm" className="dance">
                    <div className="form">
                      <div className="top-form">
                        <div className="inner-form">
                          <input
                            className="fileup"
                            type="text"
                            placeholder="Whatsapp Number (Optional) - Same as contact number tick"
                            name="whatsapp"
                            value={details.whatsapp}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )} */}
            <Box style={{padding:'0 35px'}} sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                style={stylepeer}
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />

              {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}

              {activeStep === steps.length - 1 ? (
                <Button type="submit" style={stylepeer} className="next-btn">
                  Submit
                </Button>
              ) : (
                <Button
                  type={"button"}
                  style={stylepeer}
                  className="next-btn"
                  onClick={handleNext}
                >
                  Next
                </Button>
              )}
            </Box>

          </form>
         
        </>
      )}
    </Box>
   
  );
}
