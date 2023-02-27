
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GlobalState } from '../../GlobalState';
import car from '../../images/Car.png'
import bathtub from '../../images/Bathtub.png'
import zoomout from '../../images/ArrowsOut.png'
import share from '../../images/ShareNetwork.png'
import wishlist from '../../images/Heart.png'
import sImgBroker from '../../images/sdescImgbroker.png'
import bookmarkIcon from '../../images/bookmark_added.png'
import shareIcon from '../../images/ios_share.png'
import calenderIcon from '../../images/calenderIcon.png'
import ShareModal from './ShareModal';
import { BASE_URL } from '../../utils/config';
const DetailsProperty = ({ setAuthFlag }) => {
    const { id } = useParams();
    const state = useContext(GlobalState);
    const [property, setProperty] = useState([]);
    const [detailProperty, setDetailProperty] = useState([]);
    const [page] = state.page;
    const savedProperty = state.BrokerApi.savedProperty;
    const [category, setCategory] = useState("all");
    const [sortBy, setSortBy] = useState("");
    const [isShare, setIsShare] = useState(false);

    useEffect(() => {
        setAuthFlag(false);
    }, []);

    useEffect(() => {
        getProperty();
    }, [id]);

    const getProperty = async () => {
        const data = await state.getPropertyById(id);
        console.log(data);
        // setProperty(data.data);
        setDetailProperty(data.data);
    };


    useEffect(() => {
        // if (param.id) {
        //     property.forEach(prop => {
        //         if (prop._id === param.id) setDetailProperty(prop)
        //     })
        // }
    }, [id]);

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


    if (detailProperty.length === 0) return null;

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
                                            <img src={detailProperty.images[0]} />
                                        </div>
                                        <div className='propSImg' onClick={imageHandle1}>
                                            <img src={detailProperty.images[1]} />
                                        </div>
                                        <div className='propSImg' onClick={imageHandle2}>
                                            <img src={detailProperty.images[2]} />
                                        </div>
                                    </div>
                                    <div className='verticalPropImg'>
                                        {propertyImg == 0 ?
                                            <div className='propLImg'>
                                                <img src={detailProperty.images[0]} alt="" />
                                            </div>
                                            : (propertyImg == 1) ? <div className='propLImg'>
                                                <img src={detailProperty.images[1]} />
                                            </div> :
                                                <div className='propLImg'>
                                                    <img src={detailProperty.images[2]} />
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
                                            <img src={car} />
                                            <p>{detailProperty.parking}</p>
                                        </div>
                                        <div className='flex'>
                                            <img src={bathtub} />
                                            <p>{detailProperty.bathRoom}</p>
                                        </div>
                                        <div className='flex'>
                                            <img src={zoomout} />
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
                                        <img src={sImgBroker} />
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
                                        <img src={detailProperty.images[0]} />
                                    </div>
                                    <div className='sdescCardDetail'>

                                        <p className='sdescCardTitle'>{detailProperty.propertyContent}</p>
                                        <p className='sdescCardDesc'>{detailProperty.bhk} | Built in 1995</p>
                                    </div>
                                </div>

                                <div className='scheduleTourSec'>
                                    <div className='sTTitle flex'>
                                        <img src={calenderIcon} />
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
                                        <img src={bookmarkIcon} />
                                        <p>Save</p>
                                    </a>
                                    <a className='white-button flex'>
                                        <img src={shareIcon} />
                                        <p>Share</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='similar-properties'>
                            <p className='sp-title sp-title1'>Similar Properties</p>
                            <div className='similar-properties-cards flex'>
                                {
                                    property.map(val => {
                                        return val.bhk === detailProperty.bhk ? <div className='similar-properties-card similar-properties-card2 ' style={{ width: '25%' }}>
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
                                                </div>
                                                <div className='sp-broker-sec flex'>
                                                    <div className='sp-broker-img flex'>
                                                        <img src={JSON.parse(val.user).images.url} />
                                                        <p>{JSON.parse(val.user).name}</p>
                                                    </div>
                                                    <div className='sp-actions flex'>
                                                        <div onClick={() => setIsShare(true)} className='flex action-box cursor-pointer'>
                                                            <img src={share} />
                                                        </div>
                                                        <div onClick={() => savedProperty(val)} className='flex action-box cursor-pointer'>
                                                            <img src={wishlist} />
                                                        </div>
                                                        {/* <div  className='flex action-box'>
                                                    <img src={addProperty}/>
                                                </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div> : null
                                    })
                                }
                                {/* <div className='similar-properties-card similar-properties-card2'>
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
                                </div> */}

                                {/* <div className='similar-properties-card similar-properties-card2'>
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


                                <div className='similar-properties-card similar-properties-card2'>
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


                                <div className='similar-properties-card similar-properties-card2'>
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


                                <div className='similar-properties-card similar-properties-card2'>
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
                                </div> */}

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {
                isShare && <ShareModal setIsShare={setIsShare} url={`${BASE_URL}/detail/${detailProperty._id}`} />
            }
        </>
    )
}

export default DetailsProperty