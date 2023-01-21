import React from 'react'
import Sidebar from '../common/Sidebar'
import object from '../../../src/images/gt.png';
import ghar8 from '../../../src/images/ghar8.png';
import book from '../../../src/images/book.png';
import ladki from '../../../src/images/ladki.png';
import ladka from '../../../src/images/ladka.png';
const Support = () => {
  return (
     <>
           <div className='broker-home broker-double'>
                <div className="broker-home1 flex">
                    <Sidebar />
                    <div className="flex-col broker145">
                     <div className="broker45 flex ">
                         <div className="su">
                         <div className="first-su">
                         <h2>Set What you need</h2>
                              <p>Lorem ipsum, in graphical and <br />textual context.</p>
                         </div>

                         <div className="second-su">
                            <img src={object} alt="" />
                         </div>
                            
                         </div>
                     </div>
                     <div className="support mt-6">
                             <h3>Support</h3>
                             <div className="store mt-8">
                                 <div className="first-store">
                                     <div className="fi">
                                         <img src={ghar8} alt="ghar8" />
                                         <div className="nesto-text">
                                             <h2>Find Nesto Store </h2>
                                             <p>Lorem ipsum, in graphical and <br />textual context.</p>
                                         </div>
                                     </div>
                                 </div>
                                 <div className="first-store first-store1">
                                     <div className="fi">
                                         <img src={book} alt="book" />
                                         <div className="nesto-text">
                                             <h2>Book Nesto Store </h2>
                                             <p>Lorem ipsum, in graphical and <br />textual context.</p>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                             <div className="store mt-8">
                                 <div className="first-store">
                                     <div className="fi">
                                         <img src={ladki} alt="ladki" />
                                         <div className="nesto-text nesto-text1">
                                             <h2>Q&A Support from <br />Broker Community</h2>
                                             <p>Lorem ipsum, in graphical and textual context.</p>
                                         </div>
                                     </div>
                                 </div>
                                 <div className="first-store first-store1">
                                     <div className="fi">
                                         <img src={ladka} alt="ladka" />
                                         <div className="nesto-text">
                                             <h2>Tutorial (Blogs + Videos)</h2>
                                             <p>Lorem ipsum, in graphical and <br />textual context.</p>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                        </div>
                     </div>
                </div>
            </div>
     </>
  )
}

export default Support