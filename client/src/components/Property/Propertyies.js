import React, { useContext, useEffect, useState } from 'react';
import ListBullets from '../../../src/images/ListBullets.png';
import zoomout from '../../images/ArrowsOut.png';
import LoadMoreProperty from './LoadMoreProperty';
import MapPin from '../../../src/images/MapPin.png';
import { GlobalState } from '../../GlobalState';
import { NavLink, useNavigate } from 'react-router-dom';
import PropertyItem from './PropertyItem';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Propertyies = ({ setAuthFlag }) => {
    const navigate = useNavigate();
    const state = useContext(GlobalState);
    const [page] = state.page
    const savedProperty = state.BrokerApi.savedProperty;
    const [result, setResult] = state.result;
    const [isLogged] = state.BrokerApi.isLogged;
    const [property, setProperty] = useState([]);
    const [category, setCategory] = useState("all");
    const [sortBy, setSortBy] = useState("");
    const [filter, setFilter] = useState({
        city: "",
        type: "",
        // price: ""
    });
    const [cities, setCities] = useState([]);
    const [latestCities, setLatestCities] = useState([]);

    useEffect(() => {
        setAuthFlag(false);
        getCities();
    }, []);

    useEffect(() => {
        // console.log(category);
        getProperties(category, sortBy, filter.city);
    }, [page, category, sortBy]);

    const getProperties = async (category, sortBy, city) => {
        const data = await state.getProperties(category, sortBy, city);
        console.log(data);
        setProperty(data.property);
        setResult(data.result);
    };

    const getCities = async () => {
        let tempCities = [];
        const data = await state.getProperties("", "", "");
        // console.log(data);
        setLatestCities(data.property);
        for (let i of data.property) {
            if (!tempCities.includes(i.location)) {
                tempCities.push(i.location);
            }
        }
        console.log(tempCities);
        setCities(tempCities);
    };

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
        console.log(sortBy);
    };

    const handleChange = (e) => {
        setFilter({ ...filter, [e.target.name]: e.target.value });
    };

    const toggleCatgory = (e, category) => {
        // console.log(e.target);
        document.querySelector('.ac').classList.remove('ac');
        e.target.classList.add('ac');
        setCategory(category);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(filter);
        getProperties(filter.type, '', filter.city);
    };

    return (
        <>
            <div className="sell-prop">
                <div className="sell">
                    <h2>Sell or Rent Your Home <br />
                        At the Best Price</h2>

                </div>
                <div className="view-property">
                    <button className='prop-view'>View Property</button>
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
                                                cities.map((val, index) => {
                                                    return <option key={index} value={val}>{val}</option>
                                                })
                                            }
                                        </select>
                                    </th>
                                    <td className="px-6 py-4 ">
                                        <h3 className='propji  font-medium text-gray-900  dark:text-white'>Property Type</h3>
                                        <select name="type" onChange={handleChange} value={filter.type} id="ptype">
                                            <option value="">Select property type</option>
                                            <option value="buy">Buy</option>
                                            <option value="sell">Sell</option>
                                            <option value="rent">Rent</option>
                                        </select>
                                    </td>
                                    {/* <td className="px-6 py-4 ">
                                        <h3 className='price font-medium text-gray-900  dark:text-white'>Price</h3>
                                        <select name="price" onChange={handleChange} value={filter.city} id="price">
                                            <option value="">Select price</option>
                                        </select>
                                    </td> */}
                                    <td className="px-6 py-4 ">
                                        <button onClick={handleSubmit} className='btnserach'>Search</button>
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
                                <PropertyItem key={index} val={val} savedProperty={savedProperty} />
                            );
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
                        <Splide aria-label="My Favorite Images" options={{
                            perPage: 5
                        }}>
                            {latestCities.map((e, index) => {
                                return (
                                    <SplideSlide key={index}>
                                        <div className="first-hot">
                                            <div className="hot-offer">
                                                <button>Hot offer</button>
                                            </div>
                                            <div className="view-de">
                                                <NavLink to={`detail/${e._id}`}>View Detail</NavLink>
                                            </div>
                                            <div className="fat-area">
                                                <div className="hot-area">
                                                    <div className="hot-area1">
                                                        <img src={MapPin} alt="" />
                                                        <p>{e.location}</p>
                                                    </div>
                                                    <div className="hot-area2">
                                                        <img src={zoomout} alt="" />
                                                        <p>{e.propertyPrice}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SplideSlide>
                                );
                            })}
                        </Splide>
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
