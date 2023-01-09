import React, { useEffect } from 'react'
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
const Propertyies = ({ setAuthFlag }) => {
    useEffect(() => {
        setAuthFlag(false);
    }, []);
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

                    <div className="relative table123  overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
                            </thead>
                            <tbody>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th className="px-6 py-4 ">
                                        <h3 className='font-medium text-gray-900  dark:text-white'>Locations</h3>
                                        <select name="" id="city">
                                            <option value="">Select your city</option>
                                        </select>
                                    </th>

                                    <td className="px-6 py-4 ">
                                        <h3 className='propji  font-medium text-gray-900  dark:text-white'>Property Type</h3>
                                        <select name="" id="city">
                                            <option value="">Select property type</option>
                                        </select>
                                    </td>
                                    <td className="px-6 py-4 ">
                                        <h3 className='price font-medium text-gray-900  dark:text-white'>Price</h3>
                                        <select name="" id="city">
                                            <option value="">Select price</option>
                                        </select>
                                    </td>
                                    <td className="px-6 py-4 ">
                                        <button className='btnserach'>Search</button>
                                    </td>
                                </tr>
                                {/* <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
            </tr> */}
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
                        <span>sort by: <select name="" id="">
                            <option value="">Default Order</option>
                        </select></span>
                    </div>
                    <div className="sort-flex2">
                        <div className="allp">
                            <p className='ac'>All Properties</p>
                            <p className='act'>For Buy</p>
                            <p className='act'>For Sale</p>
                            <p className='act'>For Rent</p>
                        </div>
                    </div>
                </div>

                <div className="property-flex property-flex2">
                    <div className="first-property">

                        <div className='similar-properties-card similar2'>
                            <div className='sp-card-img'>
                                <img src={ghar} alt="" />
                            </div>
                            <div className='sp-card-detail'>
                                <p className='sp-card-text'>Lorem Ipsum in graphical and textual context.</p>
                                <p className='sp-card-price'>&#8377; 5000</p>
                                <div className='property-props flex'>
                                    <div className='property-prop flex'>
                                        <img src={car} />
                                        <p>4</p>
                                    </div>
                                    <div className='property-prop  flex'>
                                        <img src={bathtub} />
                                        <p>4</p>
                                    </div>
                                    <div className='property-prop  flex'>
                                        <img src={zoomout} />
                                        <p>2,096.00 ft</p>
                                    </div>
                                </div>
                                <div className='sp-broker-sec flex'>
                                    <div className='sp-broker-img flex'>
                                        <img src={brokerimg} />
                                        <p>Jenny Wilson</p>
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

                    </div>
                    <div className="second-property">
                        <div className='similar-properties-card similar2'>
                            <div className='sp-card-img'>
                                <img src={ghar} alt="" />
                            </div>
                            <div className='sp-card-detail'>
                                <p className='sp-card-text'>Lorem Ipsum in graphical and textual context.</p>
                                <p className='sp-card-price'>&#8377; 5000</p>
                                <div className='property-props flex'>
                                    <div className='property-prop flex'>
                                        <img src={car} />
                                        <p>4</p>
                                    </div>
                                    <div className='property-prop  flex'>
                                        <img src={bathtub} />
                                        <p>4</p>
                                    </div>
                                    <div className='property-prop  flex'>
                                        <img src={zoomout} />
                                        <p>2,096.00 ft</p>
                                    </div>
                                </div>
                                <div className='sp-broker-sec flex'>
                                    <div className='sp-broker-img flex'>
                                        <img src={brokerimg} />
                                        <p>Jenny Wilson</p>
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

                    </div>
                    <div className="third-property">
                        <div className='similar-properties-card similar2'>
                            <div className='sp-card-img'>
                                <img src={ghar} alt="" />
                            </div>
                            <div className='sp-card-detail'>
                                <p className='sp-card-text'>Lorem Ipsum in graphical and textual context.</p>
                                <p className='sp-card-price'>&#8377; 5000</p>
                                <div className='property-props flex'>
                                    <div className='property-prop flex'>
                                        <img src={car} />
                                        <p>4</p>
                                    </div>
                                    <div className='property-prop  flex'>
                                        <img src={bathtub} />
                                        <p>4</p>
                                    </div>
                                    <div className='property-prop  flex'>
                                        <img src={zoomout} />
                                        <p>2,096.00 ft</p>
                                    </div>
                                </div>
                                <div className='sp-broker-sec flex'>
                                    <div className='sp-broker-img flex'>
                                        <img src={brokerimg} />
                                        <p>Jenny Wilson</p>
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

                    </div>
                </div>
                <div className="property-flex">
                    <div className="first-property">

                        <div className='similar-properties-card similar2'>
                            <div className='sp-card-img'>
                                <img src={ghar} alt="" />
                            </div>
                            <div className='sp-card-detail'>
                                <p className='sp-card-text'>Lorem Ipsum in graphical and textual context.</p>
                                <p className='sp-card-price'>&#8377; 5000</p>
                                <div className='property-props flex'>
                                    <div className='property-prop flex'>
                                        <img src={car} />
                                        <p>4</p>
                                    </div>
                                    <div className='property-prop  flex'>
                                        <img src={bathtub} />
                                        <p>4</p>
                                    </div>
                                    <div className='property-prop  flex'>
                                        <img src={zoomout} />
                                        <p>2,096.00 ft</p>
                                    </div>
                                </div>
                                <div className='sp-broker-sec flex'>
                                    <div className='sp-broker-img flex'>
                                        <img src={brokerimg} />
                                        <p>Jenny Wilson</p>
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

                    </div>
                    <div className="second-property">
                        <div className='similar-properties-card similar2'>
                            <div className='sp-card-img'>
                                <img src={ghar} alt="" />
                            </div>
                            <div className='sp-card-detail'>
                                <p className='sp-card-text'>Lorem Ipsum in graphical and textual context.</p>
                                <p className='sp-card-price'>&#8377; 5000</p>
                                <div className='property-props flex'>
                                    <div className='property-prop flex'>
                                        <img src={car} />
                                        <p>4</p>
                                    </div>
                                    <div className='property-prop  flex'>
                                        <img src={bathtub} />
                                        <p>4</p>
                                    </div>
                                    <div className='property-prop  flex'>
                                        <img src={zoomout} />
                                        <p>2,096.00 ft</p>
                                    </div>
                                </div>
                                <div className='sp-broker-sec flex'>
                                    <div className='sp-broker-img flex'>
                                        <img src={brokerimg} />
                                        <p>Jenny Wilson</p>
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

                    </div>
                    <div className="third-property">
                        <div className='similar-properties-card similar2'>
                            <div className='sp-card-img'>
                                <img src={ghar} alt="" />
                            </div>
                            <div className='sp-card-detail'>
                                <p className='sp-card-text'>Lorem Ipsum in graphical and textual context.</p>
                                <p className='sp-card-price'>&#8377; 5000</p>
                                <div className='property-props flex'>
                                    <div className='property-prop flex'>
                                        <img src={car} />
                                        <p>4</p>
                                    </div>
                                    <div className='property-prop  flex'>
                                        <img src={bathtub} />
                                        <p>4</p>
                                    </div>
                                    <div className='property-prop  flex'>
                                        <img src={zoomout} />
                                        <p>2,096.00 ft</p>
                                    </div>
                                </div>
                                <div className='sp-broker-sec flex'>
                                    <div className='sp-broker-img flex'>
                                        <img src={brokerimg} />
                                        <p>Jenny Wilson</p>
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

                    </div>
                </div>
                <div className="property-flex">
                    <div className="first-property">

                        <div className='similar-properties-card similar2'>
                            <div className='sp-card-img'>
                                <img src={ghar} alt="" />
                            </div>
                            <div className='sp-card-detail'>
                                <p className='sp-card-text'>Lorem Ipsum in graphical and textual context.</p>
                                <p className='sp-card-price'>&#8377; 5000</p>
                                <div className='property-props flex'>
                                    <div className='property-prop flex'>
                                        <img src={car} />
                                        <p>4</p>
                                    </div>
                                    <div className='property-prop  flex'>
                                        <img src={bathtub} />
                                        <p>4</p>
                                    </div>
                                    <div className='property-prop  flex'>
                                        <img src={zoomout} />
                                        <p>2,096.00 ft</p>
                                    </div>
                                </div>
                                <div className='sp-broker-sec flex'>
                                    <div className='sp-broker-img flex'>
                                        <img src={brokerimg} />
                                        <p>Jenny Wilson</p>
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

                    </div>
                    <div className="second-property">
                        <div className='similar-properties-card similar2'>
                            <div className='sp-card-img'>
                                <img src={ghar} alt="" />
                            </div>
                            <div className='sp-card-detail'>
                                <p className='sp-card-text'>Lorem Ipsum in graphical and textual context.</p>
                                <p className='sp-card-price'>&#8377; 5000</p>
                                <div className='property-props flex'>
                                    <div className='property-prop flex'>
                                        <img src={car} />
                                        <p>4</p>
                                    </div>
                                    <div className='property-prop  flex'>
                                        <img src={bathtub} />
                                        <p>4</p>
                                    </div>
                                    <div className='property-prop  flex'>
                                        <img src={zoomout} />
                                        <p>2,096.00 ft</p>
                                    </div>
                                </div>
                                <div className='sp-broker-sec flex'>
                                    <div className='sp-broker-img flex'>
                                        <img src={brokerimg} />
                                        <p>Jenny Wilson</p>
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

                    </div>
                    <div className="third-property">
                        <div className='similar-properties-card similar2'>
                            <div className='sp-card-img'>
                                <img src={ghar} alt="" />
                            </div>
                            <div className='sp-card-detail'>
                                <p className='sp-card-text'>Lorem Ipsum in graphical and textual context.</p>
                                <p className='sp-card-price'>&#8377; 5000</p>
                                <div className='property-props flex'>
                                    <div className='property-prop flex'>
                                        <img src={car} />
                                        <p>4</p>
                                    </div>
                                    <div className='property-prop  flex'>
                                        <img src={bathtub} />
                                        <p>4</p>
                                    </div>
                                    <div className='property-prop  flex'>
                                        <img src={zoomout} />
                                        <p>2,096.00 ft</p>
                                    </div>
                                </div>
                                <div className='sp-broker-sec flex'>
                                    <div className='sp-broker-img flex'>
                                        <img src={brokerimg} />
                                        <p>Jenny Wilson</p>
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

                    </div>
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
                    <button>Contact Us</button>
                </div>
            </div>
        </>
    )
}

export default Propertyies