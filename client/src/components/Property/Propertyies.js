import React, { useContext, useEffect, useState } from 'react'
import ListBullets from '../../../src/images/ListBullets.png'
import car from '../../images/Car.png'
import bathtub from '../../images/Bathtub.png'
import zoomout from '../../images/ArrowsOut.png'
import brokerimg from '../../images/brokerpng.png'
import share from '../../images/ShareNetwork.png'
import wishlist from '../../images/Heart.png'
import addProperty from '../../images/Plus.png'
import ghar from '../../../src/images/ghar.png'
import LoadMoreProperty from './LoadMoreProperty'
import MapPin from '../../../src/images/MapPin.png'
import ArrowLeft from '../../../src/images/ArrowLeft.png';
import { GlobalState } from '../../GlobalState'
import { NavLink } from 'react-router-dom'

const Propertyies = ({ setAuthFlag }) => {
    const [property, setProperty] = useState([]);
    useEffect(() => {
        setAuthFlag(false);
    }, []);

    const state = useContext(GlobalState);
    const [page] = state.page
    const [result, setResult] = state.result;
    const [category, setCategory] = useState("all");
    const [sortBy, setSortBy] = useState("");
    const [filter, setFilter] = useState({
        city: "",
        type: "",
        price: ""
    });

    useEffect(() => {
        // console.log(category);
        getProperties(category, sortBy);
    }, [page, category, sortBy]);

    const getProperties = async (category, sortBy) => {
        const data = await state.getProperties(category, sortBy);
        // console.log(data);
        setProperty(data.property);
        setResult(data.result);
    };

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
        console.log(sortBy);
    };

    const handleChange = (e) => {
        setFilter({ ...filter, [e.target.name]: e.target.value });
    };

    const toggleCatgory = (e, category) => {
        console.log(e.target);
        document.querySelector('.ac').classList.remove('ac');
        e.target.classList.add('ac');
        setCategory(category);
    };

    return (
        <>
            <div className="sell-prop">
                <div className="sell">
                    <h2>Sell or Rent Your Home <br />
                        At the Best Price</h2>

                </div>
                <div className="view-property">
                    <button>View Property</button>
                    {/* <div className='serach-by'>
              <div className='locations'></div>
          </div> */}

                    <div className="relative table123 overflow-x-auto tab">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
                            </thead>
                            <tbody>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th className="px-6 py-4 ">
                                        <h3 className='font-medium text-gray-900  dark:text-white'>Locations</h3>
                                        <select name="city" onChange={handleChange} value={filter.city} id="city">
                                            <option value="">Select your city</option>
                                            {
                                                property.map((val) => {
                                                    return <option key={val._id} value={val.location}>{val.location}</option>
                                                })
                                            }

                                        </select>
                                    </th>

                                    <td className="px-6 py-4 ">
                                        <h3 className='propji  font-medium text-gray-900  dark:text-white'>Property Type</h3>
                                        <select name="type" onChange={handleChange} value={filter.city} id="ptype">
                                            <option value="">Select property type</option>
                                            {/* {
                                                property.map(val=>{
                                                    return <option key={val._id}  value={val._id}>{val.category}</option>
                                                })
                                            } */}
                                        </select>
                                    </td>
                                    <td className="px-6 py-4 ">
                                        <h3 className='price font-medium text-gray-900  dark:text-white'>Price</h3>
                                        <select name="price" onChange={handleChange} value={filter.city} id="price">
                                            <option value="">Select price</option>
                                            {/* {
                                                property.map(val=>{
                                                    return <option key={val._id} value={val._id}>{val.price}</option>
                                                })
                                            } */}
                                        </select>
                                    </td>
                                    <td className="px-6 py-4 ">
                                        <button className='btnserach'>Search</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

            <div className="diffrent-property">
                <h2 className=' text-center mt-8 property-head'>Propertice by Area</h2>
                <p className='text-center mt-2 property-para'>Lorem ipsum, in graphical and textual context.</p>

                <div className='sort-flex'>
                    <div className="sort-flex1">
                        <img src={ListBullets} alt="" />
                        <span>sort by: <select value={sortBy} onChange={handleSortChange}>
                            <option value="">Default Order</option>
                            <option value={1}>Price (Low to High)</option>
                            <option value={-1}>Price (High to Low)</option>
                        </select></span>
                    </div>
                    <div className="sort-flex2">
                        <div className="allp">
                            <p onClick={(e) => {
                                toggleCatgory(e, "all");
                            }} className='ac cursor-pointer'>All Properties</p>
                            <p onClick={(e) => {
                                toggleCatgory(e, "buy");
                            }} className='act cursor-pointer'>For Buy</p>
                            <p onClick={(e) => {
                                toggleCatgory(e, "sell");
                            }} className='act cursor-pointer'>For Sale</p>
                            <p onClick={(e) => {
                                toggleCatgory(e, "rent");
                            }} className='act cursor-pointer'>For Rent</p>
                        </div>
                    </div>
                </div>
                <div className="property-flex property-flex2">
                    {
                        property.map(((val, index) => {
                            return (
                                <div key={val._id} className="first-property">
                                    <NavLink to={`/detail/${val._id}`}>
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
                                                </div>
                                                <div className='sp-broker-sec flex'>
                                                    <div className='sp-broker-img flex'>
                                                        <img src={JSON.parse(val.user).images.url} />
                                                        <p>{JSON.parse(val.user).name}</p>
                                                    </div>
                                                    <div className='sp-actions flex'>
                                                        <div className='flex action-box'>
                                                            <img src={share} />
                                                        </div>
                                                        <div className='flex action-box'>
                                                            <img src={wishlist} />
                                                        </div>
                                                        <div className='flex action-box'>
                                                            <img src={addProperty} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>

                            )
                        }))
                    }
                </div>
                <LoadMoreProperty />
            </div>

            <div className="latest-rent">
                <h2>Letest Properties of Rent</h2>
                <div className="latest-para">
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere <br /> cubilia curae; Proin sodales ultrices nulla blandit volutpat.</p>
                </div>
                <div className="fort-card">
                    <div className="hot-card">
                        <div className="first-hot">
                            <div className="hot-offer">
                                <button>Hot offer</button>
                            </div>
                            <div className="view-de">
                                <button>View Detail</button>
                            </div>
                            <div className="fat-area">
                                <div className="hot-area">
                                    <div className="hot-area1">
                                        <img src={MapPin} alt="" />
                                        <p>Delhi</p>
                                    </div>
                                    <div className="hot-area2">
                                        <img src={zoomout} alt="" />
                                        <p>12000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="second-hot">
                            <div className="hot-offer">
                                <button>Hot offer</button>
                            </div>
                            <div className="view-de">
                                <button>View Detail</button>
                            </div>
                            <div className="fat-area">
                                <div className="hot-area">
                                    <div className="hot-area1">
                                        <img src={MapPin} alt="" />
                                        <p>Noida</p>
                                    </div>
                                    <div className="hot-area2">
                                        <img src={zoomout} alt="" />
                                        <p>12000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="third-hot">
                            <div className="hot-offer">
                                <button>Hot offer</button>
                            </div>
                            <div className="view-de">
                                <button>View Detail</button>
                            </div>
                            <div className="fat-area">
                                <div className="hot-area">
                                    <div className="hot-area1">
                                        <img src={MapPin} alt="" />
                                        <p>Gurgau</p>
                                    </div>
                                    <div className="hot-area2">
                                        <img src={zoomout} alt="" />
                                        <p>12000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fourth-hot">
                            <div className="hot-offer">
                                <button>Hot offer</button>
                            </div>
                            <div className="view-de">
                                <button>View Detail</button>
                            </div>
                            <div className="fat-area">
                                <div className="hot-area">
                                    <div className="hot-area1">
                                        <img src={MapPin} alt="" />
                                        <p>Noida</p>
                                    </div>
                                    <div className="hot-area2">
                                        <img src={zoomout} alt="" />
                                        <p>12000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fifth-hot">
                            <div className="hot-offer">
                                <button>Hot offer</button>
                            </div>
                            <div className="view-de">
                                <button>View Detail</button>
                            </div>
                            <div className="fat-area">
                                <div className="hot-area">
                                    <div className="hot-area1">
                                        <img src={MapPin} alt="" />
                                        <p>Noida</p>
                                    </div>
                                    <div className="hot-area2">
                                        <img src={zoomout} alt="" />
                                        <p>12000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="arrows-crausol">
                  <div className="pret">
                     <img src={ArrowLeft} alt="" />
                  </div>
                  <div className="nxt">

                  </div>
             </div> */}
                </div>

            </div>

            <div className="find">
                <div className="finds">
                    <h2>Find Best Properties</h2>
                    <p>Spend vacations in best hotels and resorts find the great place of your <br /> choice using different searching options.</p>
                    <NavLink to="/contact"><button>Contact Us</button></NavLink>
                </div>
            </div>
        </>
    );
};

export default Propertyies;
