import React from "react";
// import man2 from '../../../images/man2.png';
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
// import {  Navigation, Pagination, Keyboard } from "swiper";
// import HomePop from "./HomePop";
import manHome from '../../../images/manHome.png';
import app from '../../../images/app.png';
import google from '../../../images/google-play.png';
import real from '../../../images/real.png';
import mansa from '../../../images/mansa.png';
import radiobtn from '../../../images/radiobtn.png';
import benifits from '../../../images/benifits.png';
import card1 from '../../../images/card1.png';
import card2 from '../../../images/card2.png';
import card3 from '../../../images/card3.png';
import women from '../../../images/women.png';
const Home = ({setPop}) => {
  
  return (
    <>
      <div className="joint_us">
        <div className="joint-home">
        <div className="joint-home-heading">
        <h2>To get access to the premium inventory</h2>
            <h2>and get opportunity to earn high brokerage.</h2>
           </div>
            <div className="joint-home-para">
                <p>Nestohub app is a solution to major problems faced by builder & </p>
                <p>broker and maximize their business.</p>
            </div>
            <button onClick={() => setPop(true)} className="joint-button">Join Us Now</button>
        </div>
        <div className="pic_joint">
            <img src={manHome} alt="NoMan" />
        </div>
      </div>

      <div className="real_estate">
          <div className="first-real">
             <div className="first-real-header">
                <h2>India's first B2B PropTech platform</h2>
                <h2>designed exclusively for brokers</h2>
             </div>
             <div className="first-real-para">
                <p>Broker Network app is a suite of services specifically designed for Indian</p>
                <p>real estate brokers and developers to maximize their business.</p>
             </div>

             <div className="first-real-img">
                <img src={google} alt="" />
                <img className="se-imgasa" src={app} alt="" />
             </div>
          </div>
          <div className="second-real">
               <img src={real} alt="" />
          </div>
      </div>

    
      {/* =============third section============= */}
         <div className="int-formation">
            <div className="first-inform">
               <div className="first-inform-heading">
               <h2>Solution to All platform, these</h2>
               <h2>problem is Nesto hub.</h2>
               </div>
               <div className="first-inform-para">
               <p>Nesto Hub is India’s,</p>
            <p>
              first B2B real estate platform which connects brokers with
              builders.
            </p>
               </div>
               <div className="second-inform-para">
               <p>Nesto Hub helps builders in selling their inventory at faster rate as the,</p>
            <p>
                inventory is accessible by large pool of
              brokers across PAN India
            </p>
               </div>
               <hr className="first-hras" />
               <div className="third-inform-para">
                 <p>1 <small> Nesto Hub enables brokers to get visibility into premium properties at PAN India</small>  </p>
                 <p> <small></small> <small>level and provide them opportunity to
                get rid of dependencies on the bigger dealers</small></p>
               </div>
               <hr className="second-hras" />
               <div className="third-inform-para">
                 <p> 2 <small> Nesto Hub act as an entrepreneur platform which provides support</small></p>
                 <p> <small></small> <small>to new brokers in establishing their business. </small></p>
               </div>
               <hr className="second-hras" />
               <div className="third-inform-para">
                 <p> 3 <small> Nesto Hub cloud offices shall provide brokers a professional working 
                </small> </p>
                <p> <small></small> <small>place where in they can meet with prospective buyers and
                also get</small> </p>
                <p> <small></small> <small>professional support from Nesto team.</small> </p>
               </div>
               <hr className="second-hras" />
            </div>
            <div className="second-Inform">
                 <img src={mansa} alt="" />
            </div>
         </div>
      {/* ===============third section end============== */}

     {/* ====================fourth-section=================== */}
        <div className="company-benifits">
           <div className="company-benifits-first">
             <h2>Company Benefits & Statics</h2>
             <div className="company-benifits-para">
               <div className="company-benifits-flex">
               <img src={radiobtn} alt="" />
                <p>No dependency on bigger dealer for inventory</p>
               </div>
               <div className="company-benifits-flex">
               <img src={radiobtn} alt="" />
                <p>No Bias in getting premium inventory</p>
               </div>
               <div className="company-benifits-flex">
               <img src={radiobtn} alt="" />
                <p>Professional way to manage customer profiles for future references</p>
               </div>
               <div className="company-benifits-flex">
               <img src={radiobtn} alt="" />
                <p>Focus only on customer acquisition</p>
               </div>
               <div className="company-benifits-flex">
               <img src={radiobtn} alt="" />
                <p>Easy to track payment status</p>
               </div>
               <div className="company-benifits-flex">
               <img src={radiobtn} alt="" />
                <p>No tension of brokerage loss</p>
               </div>
               <div className="company-benifits-flex">
               <img src={radiobtn} alt="" />
                <p>Work with well known brand name which improves customer trust on broker</p>
               </div>
               <div className="company-benifits-flex">
               <img src={radiobtn} alt="" />
                <p>Easy to track payment status</p>
               </div>
             </div>
             <button className="benifits-button">Read More</button>
           </div>
           <div className="company-benifits-second">
                <img src={benifits} alt="ben" />
           </div>
        </div>

     {/* ==================fourth-section-end======================= */}
         
     {/* ==================fifth-section===================== */}
     <div className="card-section">
            <div className="card-box">
              <img src={card1} alt="" />
              <h2 className="headsr">Lorem ipsum, in graphical and textual</h2>
              <div className="para-card">
                  <p>Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself.
                  Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual.</p>
              </div>
              <div className="card-side">
                <small>May 20th 2020</small>
                <a href="#">Read more</a>
              </div>
            </div> 
            <div className="card-box">
              <img src={card2} alt="" />
              <h2>Lorem ipsum, in graphical and textual</h2>
              <div className="para-card">
                  <p>Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself.
                  Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual.</p>
              </div>
              <div className="card-side">
                <small>May 20th 2020</small>
                <a href="#">Read more</a>
              </div>
            </div> 
            <div className="card-box">
              <img src={card3} alt="" />
              <h2>Lorem ipsum, in graphical and textual</h2>
              <div className="para-card">
                  <p>Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself.
                  Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual.</p>
              </div>
              <div className="card-side">
                <small>May 20th 2020</small>
                <a href="#">Read more</a>
              </div>
            </div> 
      </div>
     {/* ======================fifth-section-end===================== */}

     {/* ===============sixth section====================== */}
        <div className="women">
            <div className="red-women">
                <div className="first-red-women">
                   <div className="first-red-heading">
                      <h2>Need Something ? We are here, contact us anytime.</h2>
                      
                   </div>
                   <button className="enquiry-btn">Enqire now</button>
                </div>
                <div className="second-red-women">
                   <img src={women} alt="wm" />
                </div>
            </div>
        </div>
     {/* =====================sixth section end================= */}
     {/* ===========================customer section=================== */}
      {/* <div className="our-customer">
      <div className="customer-1">
          <h2>What our agents are <br /> saying</h2>
           <div className="custom-btn">
              <button>Read More Agent Stories <i className="fa-solid fa-arrow-right"></i></button>
           </div>
          </div>
         
          <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
      
           <SwiperSlide>
            <div className="swift-js">
                <div className="swifter-js">
                    <div className="swift-img">
                      <img src={man2} alt="" />
                    </div>
                    <div className="swift-para">
                        <p className="first-para">Tims Goulet</p>
                        <div className="small-para">
                            <p className="second-para">Principal Agent</p>
                            <p className="third-para">SF Bay Area, CA</p>
                        </div>
                    </div>
                </div>
                <div className="swifters-js">
                     <div className="swifters-para">
                         <p className="fourt-para">“Because of Compass tools I am on track to </p>
                         <p className="fourt-para">triple, if not quadruple, my production year-</p>
                         <p className="fourt-para">over-year using Compass products. I love the fact </p>
                         <p className="fourt-para">that we are always improving and empowering </p>
                         <p className="fourt-para">
                         agents by having a streamlined business system.”
                         </p>
                        
                     </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swift-js">
                <div className="swifter-js">
                    <div className="swift-img">
                      <img src={man2} alt="" />
                    </div>
                    <div className="swift-para">
                        <p className="first-para">Tims Goulet</p>
                        <div className="small-para">
                            <p className="second-para">Principal Agent</p>
                            <p className="third-para">SF Bay Area, CA</p>
                        </div>
                    </div>
                </div>
                <div className="swifters-js">
                     <div className="swifters-para">
                         <p className="fourt-para">“Because of Compass tools I am on track to </p>
                         <p className="fourt-para">triple, if not quadruple, my production year-</p>
                         <p className="fourt-para">over-year using Compass products. I love the fact </p>
                         <p className="fourt-para">that we are always improving and empowering </p>
                         <p className="fourt-para">
                         agents by having a streamlined business system.”
                         </p>
                        
                     </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swift-js">
                <div className="swifter-js">
                    <div className="swift-img">
                      <img src={man2} alt="" />
                    </div>
                    <div className="swift-para">
                        <p className="first-para">Tims Goulet</p>
                        <div className="small-para">
                            <p className="second-para">Principal Agent</p>
                            <p className="third-para">SF Bay Area, CA</p>
                        </div>
                    </div>
                </div>
                <div className="swifters-js">
                     <div className="swifters-para">
                         <p className="fourt-para">“Because of Compass tools I am on track to </p>
                         <p className="fourt-para">triple, if not quadruple, my production year-</p>
                         <p className="fourt-para">over-year using Compass products. I love the fact </p>
                         <p className="fourt-para">that we are always improving and empowering </p>
                         <p className="fourt-para">
                         agents by having a streamlined business system.”
                         </p>
                        
                     </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>

      
      </div> */}
      {/* {
        pop && <HomePop setPop = {setPop}/>
      } */}
    </>
  );
};

export default Home;
