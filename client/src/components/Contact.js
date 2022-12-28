import React from 'react'
import corporate from '../images/corporate.jpg';
import fb1 from '../images/fb1.png';
import twit1 from '../images/twit1.png';
import instagram from '../images/Instagram.png';
const Contact = () => {
  return (
    <div className='contact'>
       <div className="contact-sect">
           <div className='first-contact'>
               <img src={corporate} alt="" />
           </div>
           <div className="second-contact">
           <h2 className='text-black'>Contact Us</h2>
                <form >
                   <div className="input-filed">
                       <input className="text-black" type="text" placeholder='Full Name' />
                   </div>
                   <div className="input-filed">
                       <input type="text" placeholder='E-mail' />
                   </div>
                   <div className="input-filed">
                       <input type="text" placeholder='Message' />
                   </div>
                   <div className="con-bt">
                      <button>Contact Us</button>
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
                
             </div>
             <div className="dirct-header1">
               
             </div>
             <div className="dirct-header1">
               
             </div>
         </div>
       </div>
    </div>
  )
}

export default Contact