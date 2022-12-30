import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Multiselect} from 'multiselect-react-dropdown';
import Sidebar from '../common/Sidebar'
import fi from '../../images/FilterIcon.png'
import dangerous from '../../images/dangerous.png'
import star from '../../images/Star.png'
import propertyimg from '../../images/propertyimg.png'

const BrokerProperty = ({setAuthFlag}) => {
    useEffect(()=>{
        setAuthFlag(true);
      },[]);

    const navigate = useNavigate();
    
    return (
        <>
            <div className='broker-home'>
                <div className="broker-home1 flex">
                    <Sidebar />
                    <div className='broker-property12 flex'>
                        <div className='broker-property121 border-10 height-max'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224369.0356247885!2d77.26107938753395!3d28.516681710818563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1672126747474!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                        <div className='broker-property122'>
                            <div className='multiSelect'>
                            
                            </div>
                            <div className='properties-section'>
                                <p className='stays'>Stays In Noida</p>
                                <div className='filter-section flex'>
                                    <div className='filters flex'>
                                        <div className='filter flex'>
                                            <p>$ 125k</p>
                                            <img src={dangerous} />
                                        </div>

                                        <div className='filter flex'>
                                            <p>$ 125k</p>
                                            <img src={dangerous} />
                                        </div>

                                        <div className='filter flex'>
                                            <p>$ 125k</p>
                                            <img src={dangerous} />
                                        </div>

                                        <div className='filter flex'>
                                            <p>$ 125k</p>
                                            <img src={dangerous} />
                                        </div>

                                        <div className='filter flex'>
                                            <p>$ 125k</p>
                                            <img src={dangerous} />
                                        </div>

                                    </div>
                                    <img className='filterIcon' src={fi} />
                                </div>

                                <div className='properties'>

                                    <div className='property-card flex' onClick={()=> navigate('/brokerProfile/propertyDetails')}>
                                        <div className='property-card-img'>
                                            <img src={propertyimg} />
                                        </div>
                                        <div className='property-card-detail'>
                                            <p className='property-card-title'>Fully Furnished Smart Studio Apartment</p>
                                            <div className='rating-section flex'>
                                                <img className='star-icon' src={star} />
                                                <p className='rating'>4.8</p>
                                                <p>Noida</p>
                                            </div>
                                            <div className='property-detail flex'>
                                                <p>2 guests| </p>
                                                <p>3 bedroom| </p>
                                                <p>2 bathroom</p>
                                            </div>
                                            <div className='flex'>
                                                <div className='city-icon'></div>
                                                <p>Noida</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='property-card flex' onClick={()=> navigate('/brokerProfile/propertyDetails')}>
                                        <div className='property-card-img'>
                                            <img src={propertyimg} />
                                        </div>
                                        <div className='property-card-detail'>
                                            <p className='property-card-title'>Fully Furnished Smart Studio Apartment</p>
                                            <div className='rating-section flex'>
                                                <img className='star-icon' src={star} />
                                                <p className='rating'>4.8</p>
                                                <p>Noida</p>
                                            </div>
                                            <div className='property-detail flex'>
                                                <p>2 guests| </p>
                                                <p>3 bedroom| </p>
                                                <p>2 bathroom</p>
                                            </div>
                                            <div className='flex'>
                                                <div className='city-icon'></div>
                                                <p>Noida</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='property-card flex' onClick={()=> navigate('/brokerProfile/propertyDetails')}>
                                        <div className='property-card-img'>
                                            <img src={propertyimg} />
                                        </div>
                                        <div className='property-card-detail'>
                                            <p className='property-card-title'>Fully Furnished Smart Studio Apartment</p>
                                            <div className='rating-section flex'>
                                                <img className='star-icon' src={star} />
                                                <p className='rating'>4.8</p>
                                                <p>Noida</p>
                                            </div>
                                            <div className='property-detail flex' onClick={()=> navigate('/brokerProfile/propertyDetails')}>
                                                <p>2 guests| </p>
                                                <p>3 bedroom| </p>
                                                <p>2 bathroom</p>
                                            </div>
                                            <div className='flex'>
                                                <div className='city-icon'></div>
                                                <p>Noida</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='property-card flex' onClick={()=> navigate('/brokerProfile/propertyDetails')}>
                                        <div className='property-card-img'>
                                            <img src={propertyimg} />
                                        </div>
                                        <div className='property-card-detail'>
                                            <p className='property-card-title'>Fully Furnished Smart Studio Apartment</p>
                                            <div className='rating-section flex'>
                                                <img className='star-icon' src={star} />
                                                <p className='rating'>4.8</p>
                                                <p>Noida</p>
                                            </div>
                                            <div className='property-detail flex'>
                                                <p>2 guests| </p>
                                                <p>3 bedroom| </p>
                                                <p>2 bathroom</p>
                                            </div>
                                            <div className='flex'>
                                                <div className='city-icon'></div>
                                                <p>Noida</p>
                                            </div>
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

export default BrokerProperty

