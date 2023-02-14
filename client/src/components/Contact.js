import React, { useContext, useEffect, useState } from 'react'
import corporate from '../images/corporate.jpg';
import fb1 from '../images/fb1.png';
import twit1 from '../images/twit1.png';
import instagram from '../images/Instagram.png';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import { GlobalState } from '../GlobalState';
const Contact = ({setAuthFlag}) => {
   useEffect(()=>{
      setAuthFlag(false);
    },[]);
   const [contactUser,setContactUser] = useState({
      name1:"",
      email1:"",
      message1:"",
   });

   const state = useContext(GlobalState);
   const [callback,setCallback] = state.BrokerApi.callback

   const handleInputs = (e) =>{
      setContactUser({...contactUser,[e.target.name]: e.target.value});
   }
   const submitForm = async(e) =>{
      e.preventDefault();
      try {
         const res = await axios.post('/user/contacts',{...contactUser});
         document.getElementById("success-msg").style.display = "block"; 
        const fis = document.getElementById("fes");
        fis.innerText=`${res.data.msg}`;
        setTimeout(() => {
         document.getElementById("success-msg").style.display = "none"; 
        }, 2000);
         setContactUser({
            name1:"",
            email1:"",
            message1:"",
         })
      } 
      
      catch (error) {
         document.getElementById("fuccess").style.display = "block"; 
         const tis = document.querySelector(".tis");
         tis.innerText=`${error.response.data.msg}`;
         setTimeout(() => {
            document.getElementById("fuccess").style.display = "none"; 
           }, 2000);

           setContactUser({
            name1:"",
            email1:"",
            message1:"",
         })
      }
     
   }


   const [builderDetails,setBuilderDetails] = useState({
      builderName:"",
      builderPhone:"",
      builderEmail:"",
      role:2
   });

   const handleBuilderInput = (e) =>{
      setBuilderDetails({...builderDetails,[e.target.name]: e.target.value})
   }

   const handleBuilder = async(e) =>{
        e.preventDefault();
      try {
         let resp = await axios.post("/api/registerBuilder", { ...builderDetails });
             localStorage.setItem('nestoBroker', JSON.stringify(resp.data.user));
             localStorage.setItem("firstlogin", true);
            setCallback(!callback);
            alert(resp.data.msg);
            setBuilderDetails({
               builderName:"",
               builderPhone:"",
               builderEmail:"",
            });

      } 
      catch (error) {
        alert(error.response.data.msg);
      }
   }

   const [builderLogin,setBuilderLogin] = useState({
      builderName:"",
      builderPhone:""
   })

   const handleBuilderInput1 = (e) =>{
       setBuilderLogin({...builderLogin,[e.target.name]: e.target.value});
   };

   const loginBuilders = async(e) =>{
      e.preventDefault();
      try {
         const res = await axios.post('/api/loginBuilder', { ...builderLogin });
         localStorage.setItem('nestoBroker', JSON.stringify(res.data.user));
         localStorage.setItem("firstlogin", true);
         window.location.href = "/";
         alert(res.data.msg); 
      } 
      
      catch (error) {
          alert(error.response.data.msg);
      }
   }
  return (
   <>
    <div className='contact'>
       <div className="contact-sect">
           <div className='first-contact'>
               <img src={corporate} alt="" />
           </div>
           <div className="second-contact">
           <h2 className='text-black'>Contact Us</h2>
                <form onSubmit={submitForm}>
                   <div className="input-filed">
                       <input 
                       name='name1'
                       value={contactUser.name1}
                       onChange={handleInputs}
                       className="text-black" 
                       type="text" 
                       placeholder='Full Name' />
                   </div>
                   <div className="input-filed">
                       <input 
                       name='email1'
                       value={contactUser.email1}
                       onChange={handleInputs}
                       type="email" 
                       placeholder='E-mail' />
                   </div>
                   <div className="input-filed">
                       <input 
                       name='message1'
                       value={contactUser.message1}
                       onChange={handleInputs}
                       type="text" 
                       placeholder='Message' />
                   </div>
                   <div className="con-bt">
                      <button type='submit'>Contact Us</button>
                   </div>
                </form>
           </div>
           <div className="third-contact">
              <div className="head-contact-send">
                 <h2 className='text-black'>Contact</h2>
                 <p>hi@green.com</p>
              </div>
              <div className="head-contact-send mt-10">
                 <h2 className='text-black'>Based In</h2>
                 <div className="para-section-c">
                 <p>Lorem ipsum, or</p>
                 <p> lipsum as it is sometimes</p>
                 </div>
              </div>

              <div className="contact-links">
                 <img src={fb1} alt="" />
                 <img className='contact-img' src={instagram} alt="" />
                 <img className='contact-img' src={twit1} alt="" />
              </div>
           </div>
       </div>
       <div className="success-message" id="success-msg">
              <Alert id='fes'  severity="success"></Alert>
            </div>
            <div id='fuccess'>
              <Alert   className='tis' severity="error"></Alert>
            </div>
       <div className="another-contact">
             <div className="sect">
                <h2>Looking for an agent</h2>
                <div className="sect-para">
                  <p>Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself."</p>
                </div>
                <button className='sect-button'>Find a Compass agent near you</button>
             </div> 
       </div>

       <div className="direct">
         <h2>Need a direct line?</h2>
         <div className="direct-header">
             <div className="dirct-header1">
               <h3>General Questions</h3>
               <div className="diecrt-para">
                  <p>Contact our Corporate HQ</p>
               </div>
             </div>
             <div className="dirct-header1">
             <h3>Press & Media</h3>
               <div className="diecrt-para">
                  <p>Send a request to our</p>
                  <p>Communications team</p>
               </div>
             </div>
             <div className="dirct-header1">
             <h3>Wire Confirmation and <br />Funds Assistance</h3>
               <div className="diecrt-para">
                  <p>For questions related to wire</p>
                  <p>Instructions and where to mail checks.</p>
               </div>
             </div>
         </div>
       </div>
    </div>
   <div className="builder flex justify-evenly">
    <div className="builderRegister">
        <h2>Builder Register</h2>
        <form onSubmit={handleBuilder}>
           <input type="text" placeholder='name' value={builderDetails.builderName}
           onChange={handleBuilderInput} name="builderName" required />
           <br />
           <input className='mt-2' type="text" placeholder='phone' value={builderDetails.builderPhone}
            onChange={handleBuilderInput} name="builderPhone" required />
             <br />
           <input className='mt-2' type="text" placeholder='email' value={builderDetails.builderEmail}
            onChange={handleBuilderInput} name="builderEmail" required />
            <input hidden placeholder='role'   type="text" value={builderDetails.role} onChange={handleBuilderInput}
            name="role"  />
            <br />
            <br />
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register</button>
        </form>
    </div>
    <div className="builderLogin">
    <h2>Builder Login</h2>
        <form onSubmit={loginBuilders}>
           <input type="text" placeholder='name' value={builderLogin.builderName}
           onChange={handleBuilderInput1} name="builderName" required />
           <br />
           <input className='mt-2' type="text" placeholder='phone' value={builderLogin.builderPhone}
            onChange={handleBuilderInput1} name="builderPhone" required />
             <br />
             <br />
             <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>
        </form>
    </div>
    </div>
    </>

    
  )
}

export default Contact