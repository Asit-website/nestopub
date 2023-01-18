
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GlobalState } from '../../GlobalState';
import car from '../../images/Car.png'
import bathtub from '../../images/Bathtub.png'
import zoomout from '../../images/ArrowsOut.png'
import brokerimg from '../../images/brokerpng.png'
import share from '../../images/ShareNetwork.png'
import wishlist from '../../images/Heart.png'
import addProperty from '../../images/Plus.png'
import propLimg from '../../images/propLimg.png'
import propSimg from '../../images/propSimg.png'
import sImgBroker from '../../images/sdescImgbroker.png'
import sImgBuilding from '../../images/sdescImgbuilding.png'
import bookmarkIcon from '../../images/bookmark_added.png'
import shareIcon from '../../images/ios_share.png'
import calenderIcon from '../../images/calenderIcon.png'
import { Sidebar } from 'react-pro-sidebar';
// import { json } from 'body-parser';
const DetailsProperty = ({setAuthFlag}) => {
  useEffect(() => {
    setAuthFlag(false);
}, []);
const param = useParams();
const [property, setProperty] = useState([]);
const [detailProperty,setDetailProperty] = useState([]);

const state = useContext(GlobalState);
const [page] = state.page
const [result,setResult] = state.result;

useEffect(() => {
  getProperties();
}, [page]);

const getProperties = async () => {
  const data = await state.getProperties();
  console.log(data);
  // console.log(JSON.parse(data[7].user));
  setProperty(data.property);
  setResult(data.result);
};

useEffect(()=>{
  if(param.id){
      property.forEach(prop=>{
         if(prop._id === param.id) setDetailProperty(prop)
      })
  }
},[param.id,property]);

const [propertyImg, setPropertyImg] = useState(0);

    const imageHandle0 = () => {
        setPropertyImg(0);
    }

    const imageHandle1 = () => {
        setPropertyImg(1);
    }

    const imageHandle2 = () => {
        setPropertyImg(2);
    }


if(detailProperty.length===0) return null;

  return (
    <>
        <div className='broker-home'>
                <div className="broker-home1 flex">
                   {/* <Sidebar/> */}
                    <div className='broker-property12'>
                        <div className='flex'>
                            <div className='broker-property121 border-10'>
                                    <div className='propImgs flex'>
                                        <div className='verticalPropImg'>
                                            <div className='propSImg' onClick={imageHandle0}>
                                                <img src={detailProperty.images[0]}/>
                                            </div>
                                            <div className='propSImg' onClick={imageHandle1}>
                                                <img src={propSimg}/>
                                            </div>
                                            <div className='propSImg' onClick={imageHandle2}>
                                                <img src={propLimg}/>
                                            </div>
                                        </div>
                                        <div className='verticalPropImg'>
                                            {propertyImg == 0 ? 
                                                <div className='propLImg'>
                                                  <img src={detailProperty.images[0]} alt="" />
                                                </div>
                                             : (propertyImg == 1) ? <div className='propLImg'>
                                             <img src={propSimg}/>
                                             </div> :
                                             <div className='propLImg'>
                                             <img src={propLimg}/>
                                             </div>
                                            }
                                            
                                        </div>
                                    </div>

                                    <div className='propDesc'>
                                        <div className='propTitle'>
                                            <p>{detailProperty.propertyContent}</p>
                                        </div>
                                        <div className='propDetails flex'>
                                            <div className='flex'>
                                                <img src={car}/>
                                                <p>{detailProperty.parking}</p>
                                            </div>
                                            <div className='flex'>
                                                <img src={bathtub}/>
                                                <p>{detailProperty.bathRoom}</p>
                                            </div>
                                            <div className='flex'>
                                                <img src={zoomout}/>
                                                <p>{detailProperty.propertyArea}</p>
                                            </div>
                                        </div>

                                        <div className='propTitle'>
                                            <p>Details</p>
                                        </div>

                                        <div className='propBlog'>
                                            <p>{detailProperty.propertyDescription}</p>
                                            
                                        </div>
                                    </div>
                            </div>
                            <div className='broker-property122'>
                                <div className='priceCard'>
                                    <div className='pCDesc flex'>
                                        <p className='pCPrice'>&#8377;{detailProperty.propertyPrice}</p>
                                        <p className='pCStatus'>For {detailProperty.category}</p>
                                        <p className='pCListDay'>Listed 2 days ago</p>
                                    </div>
                                    <div className='pCDetail'>
                                        <p>
                                            Lorem ipsum, in graphical and textualcontext
                                            ipsum, in graphical and textual context.
                                        </p>
                                    </div>
                                </div>

                                <div className='sdescTitle'>
                                    <p>Listing Agent</p>
                                </div>

                                <div className='sdescCard flex'>
                                    <div className='sdescCardImg'>
                                        <img src={sImgBroker}/>
                                    </div>
                                    <div className='sdescCardDetail'>
                                        <p className='sdescCardTitle'>Lisa Marady</p>
                                        <p className='sdescCardDesc'>Better Homes & Garden Rand Homes Limited</p>
                                    </div>
                                </div>

                                <div className='sdescTitle'>
                                    <p>Building</p>
                                </div>

                                <div className='sdescCard flex'>
                                    <div className='sdescCardImg'>
                                        <img src={sImgBuilding}/>
                                    </div>
                                    <div className='sdescCardDetail'>
                                        <p className='sdescCardTitle'>Gaur siddhartham</p>
                                        <p className='sdescCardDesc'>3 BHK | Built in 1995</p>
                                    </div>
                                </div>

                                <div className='scheduleTourSec'>
                                    <div className='sTTitle flex'>
                                        <img src={calenderIcon}/>
                                        <p>Sehedule a Tour</p>
                                    </div>

                                    <div className='weekCalender'>

                                    </div>

                                    <div className='sTButtons flex'>
                                        <a className='sTGrayButton'>Choose Time</a>
                                        <a className='sTBlueButton'>Schedule a Tour</a>
                                    </div>
                                </div>

                                <div className='buttons flex'>
                                    <a className='blue-button flex'>
                                        <img src={bookmarkIcon}/>
                                        <p>Save</p>
                                    </a>
                                    <a className='white-button flex'>
                                        <img src={shareIcon}/>
                                        <p>Share</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <div className='similar-properties'>
                            <p className='sp-title'>Similar Properties</p>
                            <div className='similar-properties-cards flex'>
                                <div className='similar-properties-card'>
                                    <div className='sp-card-img'></div>
                                    <div className='sp-card-detail'>
                                        <p className='sp-card-text'>Lorem Ipsum in graphical and textual context.</p>
                                        <p className='sp-card-price'>&#8377; 5000</p>
                                        <div className='property-props flex'>
                                            <div className='property-prop flex'>
                                                <img src={car}/>
                                                <p>4</p>
                                            </div>
                                            <div className='property-prop  flex'>
                                                <img src={bathtub}/>
                                                <p>4</p>
                                            </div>
                                            <div className='property-prop  flex'>
                                                <img src={zoomout}/>
                                                <p>2,096.00 ft</p>
                                            </div>
                                        </div>
                                        <div className='sp-broker-sec flex'>
                                            <div className='sp-broker-img flex'>
                                                <img src={brokerimg}/>
                                                <p>Jenny Wilson</p>
                                            </div>
                                            <div className='sp-actions flex'>
                                                <div className='flex action-box'>
                                                    <img src={share}/>
                                                </div>
                                                <div className='flex action-box'>
                                                    <img src={wishlist}/>
                                                </div>
                                                <div className='flex action-box'>
                                                    <img src={addProperty}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='similar-properties-card'>
                                    <div className='sp-card-img'></div>
                                    <div className='sp-card-detail'>
                                        <p className='sp-card-text'>Lorem Ipsum in graphical and textual context.</p>
                                        <p className='sp-card-price'>&#8377; 5000</p>
                                        <div className='property-props flex'>
                                            <div className='property-prop flex'>
                                                <img src={car}/>
                                                <p>4</p>
                                            </div>
                                            <div className='property-prop  flex'>
                                                <img src={bathtub}/>
                                                <p>4</p>
                                            </div>
                                            <div className='property-prop  flex'>
                                                <img src={zoomout}/>
                                                <p>2,096.00 ft</p>
                                            </div>
                                        </div>
                                        <div className='sp-broker-sec flex'>
                                            <div className='sp-broker-img flex'>
                                                <img src={brokerimg}/>
                                                <p>Jenny Wilson</p>
                                            </div>
                                            <div className='sp-actions flex'>
                                                <div className='flex action-box'>
                                                    <img src={share}/>
                                                </div>
                                                <div className='flex action-box'>
                                                    <img src={wishlist}/>
                                                </div>
                                                <div className='flex action-box'>
                                                    <img src={addProperty}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='similar-properties-card'>
                                    <div className='sp-card-img'></div>
                                    <div className='sp-card-detail'>
                                        <p className='sp-card-text'>Lorem Ipsum in graphical and textual context.</p>
                                        <p className='sp-card-price'>&#8377; 5000</p>
                                        <div className='property-props flex'>
                                            <div className='property-prop flex'>
                                                <img src={car}/>
                                                <p>4</p>
                                            </div>
                                            <div className='property-prop  flex'>
                                                <img src={bathtub}/>
                                                <p>4</p>
                                            </div>
                                            <div className='property-prop  flex'>
                                                <img src={zoomout}/>
                                                <p>2,096.00 ft</p>
                                            </div>
                                        </div>
                                        <div className='sp-broker-sec flex'>
                                            <div className='sp-broker-img flex'>
                                                <img src={brokerimg}/>
                                                <p>Jenny Wilson</p>
                                            </div>
                                            <div className='sp-actions flex'>
                                                <div className='flex action-box'>
                                                    <img src={share}/>
                                                </div>
                                                <div className='flex action-box'>
                                                    <img src={wishlist}/>
                                                </div>
                                                <div className='flex action-box'>
                                                    <img src={addProperty}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='similar-properties-card'>
                                    <div className='sp-card-img'></div>
                                    <div className='sp-card-detail'>
                                        <p className='sp-card-text'>Lorem Ipsum in graphical and textual context.</p>
                                        <p className='sp-card-price'>&#8377; 5000</p>
                                        <div className='property-props flex'>
                                            <div className='property-prop flex'>
                                                <img src={car}/>
                                                <p>4</p>
                                            </div>
                                            <div className='property-prop  flex'>
                                                <img src={bathtub}/>
                                                <p>4</p>
                                            </div>
                                            <div className='property-prop  flex'>
                                                <img src={zoomout}/>
                                                <p>2,096.00 ft</p>
                                            </div>
                                        </div>
                                        <div className='sp-broker-sec flex'>
                                            <div className='sp-broker-img flex'>
                                                <img src={brokerimg}/>
                                                <p>Jenny Wilson</p>
                                            </div>
                                            <div className='sp-actions flex'>
                                                <div className='flex action-box'>
                                                    <img src={share}/>
                                                </div>
                                                <div className='flex action-box'>
                                                    <img src={wishlist}/>
                                                </div>
                                                <div className='flex action-box'>
                                                    <img src={addProperty}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='similar-properties-card'>
                                    <div className='sp-card-img'></div>
                                    <div className='sp-card-detail'>
                                        <p className='sp-card-text'>Lorem Ipsum in graphical and textual context.</p>
                                        <p className='sp-card-price'>INR 5000</p>
                                        <div className='property-props flex'>
                                            <div className='property-prop flex'>
                                                <img src={car}/>
                                                <p>4</p>
                                            </div>
                                            <div className='property-prop  flex'>
                                                <img src={bathtub}/>
                                                <p>4</p>
                                            </div>
                                            <div className='property-prop  flex'>
                                                <img src={zoomout}/>
                                                <p>2,096.00 ft</p>
                                            </div>
                                        </div>
                                        <div className='sp-broker-sec flex'>
                                            <div className='sp-broker-img flex'>
                                                <img src={brokerimg}/>
                                                <p>Jenny Wilson</p>
                                            </div>
                                            <div className='sp-actions flex'>
                                                <div className='flex action-box'>
                                                    <img src={share}/>
                                                </div>
                                                <div className='flex action-box'>
                                                    <img src={wishlist}/>
                                                </div>
                                                <div className='flex action-box'>
                                                    <img src={addProperty}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div> */}
                        
                    </div>
                </div>
        </div>
    </>
  )
}

export default DetailsProperty