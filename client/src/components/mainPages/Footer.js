import React from 'react'
import logo from '../../images/logo.png';
import twit from '../../images/twit.png';
import insta from '../../images/insta.png';
import youTube from '../../images/youTube.png';
import home1 from '../../images/home1.png';
import home2 from '../../images/home2.png';
import home3 from '../../images/home3.png';
import Globe from '../../images/globe.png';
const Footer = () => {
  return (
   <>
    <footer>
      <div className="foot">
        <div className='first-foot'>
            <div className="logo-footer">
                <img src={logo} alt="loko" />
            </div>
            <div className="first-para">
                <p> Dream Home is a gated community  </p>
                <p>with a great location. Located</p>
                <p>downtown, you’re within walking </p>
                <p>distance of Parks, and the...<span>View More</span></p>
            </div>
        </div>
        <div className='second-foot'>
           <div className="foot-header">
              <h2>Contact Us</h2>
           </div>
           <div className="second-para">
              <p className='par'>For any queries or discussions, <br /> reach out to us.</p>
<div className="another-second">
<p>+91 5586XXXXXXXX</p>
<p className='another-sec-first'>info@nestohub.co</p>
</div>
           </div>
        </div>
        <div className='third-foot'>
            <div className="foot-header">
                <h2>Follow Us</h2>
            </div>
            <div className="social-links">
                <span className='first'><img src={insta} alt="ins" /></span>
                <span className='second'><img src={youTube} alt="you" /></span>
                <span className='third'><img src={twit} alt="tw" /></span>
            </div>
            <div className="input-era">
              <div className="earth-img">
                <img src= {Globe} alt="" />
              </div>
               <select>
                  <option value="">English-En</option>
               </select>
            </div>
        </div>
        <div className='fourth-foot'>
             <div className="fourth-foot-first">
                <img className='first-ima' src={home1} alt="" />
                <img className='second-ima' src={home2} alt="" />
                <img className='third-ima' src={home3} alt="" />
             </div>
             <div className="fourth-foot-first v-link">
                <img className='first-ima' src={home1} alt="" />
                <img className='second-ima' src={home2} alt="" />
                <img className='third-ima' src={home3} alt="" />
             </div>
        </div>
      </div>
     
    </footer>
    <hr className='foot-hr' />
      <div className="bottom-para">
        <p>© 2022 Dandelion | All Rights Reserved</p>
      </div>
      </>
  )
}

export default Footer