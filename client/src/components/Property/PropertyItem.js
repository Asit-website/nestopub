import React,{useState} from 'react'
import car from '../../images/Car.png'
import bathtub from '../../images/Bathtub.png'
import zoomout from '../../images/ArrowsOut.png'
import share from '../../images/ShareNetwork.png'
import wishlist from '../../images/Heart.png'
import addProperty from '../../images/Plus.png'
import { NavLink } from 'react-router-dom';
import ShareModal from './ShareModal'
import { BASE_URL } from '../../utils/config'
const PropertyItem = ({val,savedProperty}) => {
    const [isShare,setIsShare] = useState(false);
  return (
    <>
        <div key={val._id} className="first-property">
                                  
                                        <div className='similar-properties-card similar2'>
                                          <NavLink to={`/detail/${val._id}`}>
                                            <div className='sp-card-img'>
                                                <img src={val.images[0]} alt="" />
                                            </div>
                                            </NavLink>
                                            <div className='sp-card-detail'>
                                                <p className='sp-card-text'>{val.propertyContent}</p>
                                                <p className='sp-card-price'>&#8377; {val.propertyPrice}</p>
                                                <div className='property-props flex'>
                                                    <div className='property-prop flex'>
                                                        <img src={car} />
                                                        <p>{val.parking}</p>
                                                    </div>
                                                    <div className='property-prop  flex'>
                                                        <img src={bathtub} />
                                                        <p>{val.bathRoom}</p>
                                                    </div>
                                                    <div className='property-prop  flex'>
                                                        <img src={zoomout} />
                                                        <p>{val.propertyArea} ft</p>
                                                    </div>
                                                </div>
                                                <div className='sp-broker-sec flex'>
                                                    <div className='sp-broker-img flex'>
                                                        <img src={JSON.parse(val.user).images.url} />
                                                        <p>{JSON.parse(val.user).name}</p>
                                                    </div>
                                                    <div className='sp-actions flex'>
                                                        <div onClick={()=> setIsShare(true) } className='flex action-box cursor-pointer'>
                                                            <img src={share} />
                                                        </div>
                                                        <div onClick={()=> {
                                                            savedProperty(val);
                                                        //    isLogged &&
                                                        //    navigate("/propertySaved");

                                                        }} className='flex action-box cursor-pointer'>
                                                            <img src={wishlist} />
                                                        </div>
                                                        {/* <div    className='flex action-box cursor-pointer'>
                                                            <img src={addProperty} />
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                   
                                </div>

                                {
                                    isShare && <ShareModal setIsShare={setIsShare} url = {`${BASE_URL}/detail/${val._id}`}/>
                                }

    </>
  )
}

export default PropertyItem