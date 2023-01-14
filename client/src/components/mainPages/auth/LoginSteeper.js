import React  from 'react'
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


const steps = [
  "Create Account",
  "Mobile,Email OTP Verification",
];

export default function LoginSteeper() {
  
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const styleUpload = {
    opacity: activeStep === 0 || activeStep === 1 ? '0' : '1',
  };

  const isStepOptional = (step) => {
    return step === 1;
  };

  const deepStyle = {
    backgroundColor:'#D9D9D9',
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
    
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  
  };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  const handleReset = () => {
    setActiveStep(0);
  };
 
  const stylepeer = {
    backgroundColor: "#c00000",
    borderRadius:'5px',
    color: "#ffffff",
    width: "260px",
    maxWidth: "100%",
    height: "50px",
    margin:'30px 0px',
    outline:'none',
    fontSize:'18px',
    fontWeight:'500',
    cursor:'pointer'
  };

  return (
    <>
    <Box  sx={{ width: "100%" }}>
      <Stepper style={styleUpload}  className="stoper fighter"  activeStep={activeStep}>
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
        
          <form >
             {
               activeStep === 0 && (
                <>
                <div style={{padding:'25px 0px'}} className="wrapper">
              <div className="shadow">
                <h2 className='wrap-header' style={{textAlign:'center'}}>Enter The Otp</h2>
              </div>
                <p className='wrap-para' style={{padding:'0 30px',textAlign:'center'}}>
                Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual
                </p>
                <div id="myForm" className="dance">
                  <div className="form">
                    <div className="top-form">
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          name="mobileOtp"
                          required
                          className='depp'
                          style={deepStyle}
                          maxLength="1"
                        />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          name="mobileOtp2"
                          required
                          className='depp'
                          style={deepStyle}
                          maxLength="1"
                        />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          name="mobileOtp3"
                          required
                          className='depp'
                          style={deepStyle}
                          maxLength="1"
                        />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          name="mobileOtp4"
                          className='depp'
                          required
                          style={deepStyle}
                          maxLength="1"
                        />
                      </div>
                     
                    </div>
                    <span className="resend">Resend</span>
                  
                  </div>
                </div>
              </div>
                </>
               ) 
             }

             {
              activeStep === 1 && (
                <>
                <div style={{padding:'25px 0px'}} className="wrapper">
              <div className="shadow">
                <h2 className='wrap-header' style={{textAlign:'center'}}>Reset password</h2>
              </div>
                <p className='wrap-para' style={{padding:'0 30px',textAlign:'center'}}>
                Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual
                </p>
                <div className="reset-input">
                <input required type="text" placeholder='New Password' />
                </div>
                <div className="reset-input">
                <input required type="text" placeholder='Confirm Password' />
                </div>
              </div>
                </>
              )
             }
            <Box style={{padding:'0 35px',display:'flex',alignItems:'center',justifyContent:'center'}} >
              {/* <Button
                style={stylepeer}
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button> */}
              {/* <Box sx={{ flex: "1 1 auto" }} /> */}

              {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}

              {activeStep === steps.length - 1 ? (
                <Button type="submit" style={stylepeer} className="next-btn">
                   Done
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

   
    </>
  );
};
