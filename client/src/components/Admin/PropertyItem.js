import React,{useState} from 'react';
import car from '../../images/Car.png'
import bathtub from '../../images/Bathtub.png'
import zoomout from '../../images/ArrowsOut.png'
import share from '../../images/ShareNetwork.png'
import wishlist from '../../images/Heart.png'
import axios from 'axios';
import ShareModal from '../Property/ShareModal'
import { BASE_URL } from '../../utils/config';

const PropertyItem = ({val,token,callback,setCallback}) => {
    const [isShare,setIsShare] = useState(false);
    const deleteProperty = async() =>{
        try {
          
            if(window.confirm("do you want to delete this property")){
                const res = await axios.delete(`/api/deleteProperty/${val._id}`,{
                    headers: { Authorization: token },
                 });
    
                 
                    alert(res.data.msg);
                    setCallback(!callback);
            }
               
        } 
        
        catch (error) {
             console.log(error.response.data.msg);
        }
       
    }
  return (
     <>
        <div key={val._id} className="first-property">
                                    <div className='similar-properties-card similar2'>
                                        <div className='sp-card-img'>
                                            <img src={val.images[0]} alt="" />
                                        </div>
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
                                                <i onClick={()=> deleteProperty(val._id)} className="fa-solid fa-trash"></i>
                                            </div>
                                            <div className='sp-broker-sec flex'>
                                                <div className='sp-broker-img flex'>
                                                    <img src={JSON.parse(val.user).images.url} />
                                                    <p>{JSON.parse(val.user).name}</p>    
                                                </div>
                                                <div className='sp-actions flex'>
                                                    <div onClick={()=> setIsShare(true)} className='flex action-box'>
                                                        <img src={share} />
                                                    </div>
                                                    <div className='flex action-box'>
                                                        <img src={wishlist} />
                                                    </div>
                                                    {/* <div className='flex action-box'>
                                                        <img src={addProperty} />
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {
                                    isShare && isShare && <ShareModal setIsShare={setIsShare} url = {`${BASE_URL}/detail/${val._id}`}/>
                                }
     </>
  )
}

export default PropertyItem