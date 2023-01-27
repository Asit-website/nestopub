import axios from 'axios';
import React, { useContext } from 'react'
import { GlobalState } from '../../GlobalState';
import { NavLink } from 'react-router-dom';
import car from '../../images/Car.png'
import bathtub from '../../images/Bathtub.png'
import zoomout from '../../images/ArrowsOut.png'
import Sidebar from '../common/Sidebar';
// import LoadMoreProperty from './LoadMoreProperty'
const SavedProperty = () => {
    const state = useContext(GlobalState);
    const [saved,setSaved] = state.BrokerApi.saved;
    const [token] = state.token;


    const addToProperty = async (saved) =>{
        await axios.patch('/api/save',{saved},{
            headers: {Authorization:token} 
        })
    }

    const removeProperty = id=>{
        if(window.confirm("Do You Want To Remove This Property")){
            saved.forEach((item,index)=>{
               if(item._id===id){
                 saved.splice(index,1)
               }
            })
    
            setSaved([...saved])
            addToProperty(saved); 
        }
      }

      if (saved.length === 0)
    return (
      <h2 className='text-center'>Property Empty</h2>
    );
  return (
    <>
    <div className="broker-home">
        <div className="flex">
        <Sidebar />
        <div className="flex ml-3 flex-wrap w-full">

                    {
                        saved.map(((val, index) => {
                            return (
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
                                                    {/* <div className='sp-actions flex'>
                                                        <div className='flex action-box'>
                                                            <img src={share} />
                                                        </div>
                                                        <div className='flex action-box'>
                                                            <img src={wishlist} />
                                                        </div>
                                                        <div onClick={()=> savedProperty(val)}  className='flex action-box'>
                                                            <img src={addProperty} />
                                                        </div>
                                                    </div> */}
                                                    <div className="paras">
                                                        <p onClick={()=> removeProperty(val._id)}>Remove</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                   
                                </div>

                            )
                        }))
                    }
                </div>
</div>

                </div>
    </>
  )
}

export default SavedProperty