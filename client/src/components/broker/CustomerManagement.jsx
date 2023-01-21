import { sliderClasses } from '@mui/material';
import React, { useContext, useEffect,useState } from 'react'
import { GlobalState } from '../../GlobalState';
import Sidebar from '../common/Sidebar';

const CustomerManagement = ({setAuthFlag}) => {
    useEffect(()=>{
        setAuthFlag(true);
      },[]);

      const state = useContext(GlobalState);
      const [clientLog] = state.ClientApi.clientLog;
      const [refreshFlag, setRefreshFlag] = useState(false);
      const [visits, setVisits] = useState([]);

      useEffect(() => {
        getVisits();
    }, [refreshFlag]);

    const getVisits = async () => {
        const data = await state.getVisits();
        setVisits(data.data);
        console.log(data);
    };
    return (
        <>
            <div className='broker-home'>
                <div className="broker-home1 flex">
                    <Sidebar />
                    <div className="broker-home12 flex">
                        <div className="broker-home121 broker-cus">
                            <div className="broker-home1211">
                                <div className="broker-home12111 flex justify-between">
                                    <b>All Details</b>
                                    <div>
                                        !
                                    </div>
                                </div>
                                <div className="broker-home12112 flex">
                                    <div className="broker-home12a broker-cus-1a flex">
                                        <div className="broker-cus1-img broker-cus1-img1">
                                            <img src="/static/images/a9.png" alt="" />
                                        </div>
                                        <div className="broker-cus1-p broker-cus1-p1">
                                            <p className="text-xs">Done</p>
                                            <p className="text-sm font-semibold">02</p>
                                        </div>
                                    </div>
                                    <div className="broker-home12a broker-cus-1a flex">
                                        <div className="broker-cus1-img broker-cus1-img2">
                                            <img src="/static/images/a8.png" alt="" />
                                        </div>
                                        <div className="broker-cus1-p broker-cus1-p2">
                                            <p className="text-xs">Pending</p>
                                            <p className="text-sm font-semibold">222</p>
                                        </div>
                                    </div>
                                    <div className="broker-home12a broker-cus-1a flex">
                                        <div className="broker-cus1-img broker-cus1-img3">
                                            <img src="/static/images/a7.png" alt="" />
                                        </div>
                                        <div className="broker-cus1-p broker-cus1-p3">
                                            <p className="text-xs">Today</p>
                                            <p className="text-sm font-semibold">20</p>
                                        </div>
                                    </div>
                                    <div className="broker-home12a broker-cus-1a flex">
                                        <div className="broker-cus1-img broker-cus1-img4">
                                            <img src="/static/images/a6.png" alt="" />
                                        </div>
                                        <div className="broker-cus1-p broker-cus1-p4">
                                            <p className="text-xs">Meetings</p>
                                            <p className="text-sm font-semibold">{visits.length}</p>
                                        </div>
                                    </div>
                                    <div className="broker-home12a broker-cus-1a flex">
                                        <div className="broker-cus1-img broker-cus1-img5">
                                            <img src="/static/images/a5.png" alt="" />
                                        </div>
                                        <div className="broker-cus1-p broker-cus1-p5">
                                            <p className="text-xs">Dump</p>
                                            <p className="text-sm font-semibold">20</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="broker-home1212">
                                <div className="broker-home12121 broker-cus-head items-center flex">
                                    <div className='font-semibold'>
                                        Clients  Details
                                    </div>
                                    <div className='font-semibold ml-32'>
                                        Location
                                    </div>
                                    <div className='font-semibold'>
                                        BHK
                                    </div>
                                    <div className='font-semibold'>
                                        Date
                                    </div>
                                    <div className='font-semibold'>
                                        Price
                                    </div>
                                    <div className='font-semibold'>
                                        Responsible Person
                                    </div>
                                </div>
                                <div className="broker-home12122">
                                  {
                                      clientLog.map((client1,index)=>{
                                        return(
                                            <div key={index} className="broker-home-table broker-cus-table flex">
                                        <div className="broker-cus-table1 broker-home-table11 flex items-center">
                                            <img className='mr-1.5 buymarImg' src={client1.BuyerImages.url} alt="" />
                                            <div>
                                                <p>{client1.BuyName}</p>
                                                <p className="text-xs">{(client1._id).slice(0,9)}</p>
                                            </div>
                                        </div>
                                        <div className="broker-cus-table1 broker-home-table12 flex items-center">
                                            <img src="/static/images/a4.png" alt="" />
                                            <img className='mx-3' src="/static/images/a3.png" alt="" />
                                            <img src="/static/images/a2.png" alt="" />
                                        </div>
                                        <div className="broker-cus-table1 broker-home-table11 flex items-center">
                                            <img className='mr-1.5' src="/static/images/Path11489.png" alt="" />
                                            <p>{client1.BuyerLocation}</p>
                                        </div>
                                        <div className="broker-cus-table1 broker-home-table11 flex items-center">
                                            <img className='mr-1.5' src="/static/images/Path11490.png" alt="" />
                                            <p>{client1.BuyerBhk}</p>
                                        </div>
                                        <div className="broker-cus-table1 broker-home-table11 flex items-center">
                                            <img className='mr-1.5 cursor-pointer' src="/static/images/a1.png" alt="" />
                                            <div>
                                                <p style={{ color: "#0A2E57" }} className="font-semibold">{new Date(Number(client1.date)).toLocaleString().slice(0,16)}</p>
                                              
                                                {/* <p style={{ color: "#0A2E57" }} className="text-xs">10 : 45 AM</p> */}
                                            </div>
                                        </div>
                                        <div className="broker-cus-table1 broker-home-table11 flex items-center">
                                            <img className='mr-1.5' src="/static/images/Path11488(1).png" alt="" />
                                            <p>{client1.BuyerBudget}</p>
                                        </div>
                                        <div className="broker-cus-table1 flex items-center">
                                            <p className="font-semibold">YES</p>
                                        </div>
                                    </div>
                                        )
                                      })
                                  }
                                    {/* <div className="broker-home-table broker-cus-table flex">
                                        <div className="broker-cus-table1 broker-home-table11 flex items-center">
                                            <img className='mr-1.5' src="/static/images/Rectangle2151.png" alt="" />
                                            <div>
                                                <p>Sagar Sharma</p>
                                                <p className="text-xs">NO22MR183</p>
                                            </div>
                                        </div>
                                        <div className="broker-cus-table1 broker-home-table12 flex items-center">
                                            <img src="/static/images/a4.png" alt="" />
                                            <img className='mx-3' src="/static/images/a3.png" alt="" />
                                            <img src="/static/images/a2.png" alt="" />
                                        </div>
                                        <div className="broker-cus-table1 broker-home-table11 flex items-center">
                                            <img className='mr-1.5' src="/static/images/Path11489.png" alt="" />
                                            <p>Uttam Nagar (Delhi)</p>
                                        </div>
                                        <div className="broker-cus-table1 broker-home-table11 flex items-center">
                                            <img className='mr-1.5' src="/static/images/Path11490.png" alt="" />
                                            <p>4(BHK) at Gaur’s City</p>
                                        </div>
                                        <div className="broker-cus-table1 broker-home-table11 flex items-center">
                                            <img className='mr-1.5 cursor-pointer' src="/static/images/a1.png" alt="" />
                                            <div>
                                                <p style={{ color: "#0A2E57" }} className="font-semibold">15 July 2021</p>
                                                <p style={{ color: "#0A2E57" }} className="text-xs">10 : 45 AM</p>
                                            </div>
                                        </div>
                                        <div className="broker-cus-table1 broker-home-table11 flex items-center">
                                            <img className='mr-1.5' src="/static/images/Path11488(1).png" alt="" />
                                            <p>70-01 Lack-one Crore</p>
                                        </div>
                                        <div className="broker-cus-table1 flex items-center">
                                            <p className="font-semibold">YES</p>
                                        </div>
                                    </div>
                                    <div className="broker-home-table broker-cus-table flex">
                                        <div className="broker-cus-table1 broker-home-table11 flex items-center">
                                            <img className='mr-1.5' src="/static/images/Rectangle2151.png" alt="" />
                                            <div>
                                                <p>Sagar Sharma</p>
                                                <p className="text-xs">NO22MR183</p>
                                            </div>
                                        </div>
                                        <div className="broker-cus-table1 broker-home-table12 flex items-center">
                                            <img src="/static/images/a4.png" alt="" />
                                            <img className='mx-3' src="/static/images/a3.png" alt="" />
                                            <img src="/static/images/a2.png" alt="" />
                                        </div>
                                        <div className="broker-cus-table1 broker-home-table11 flex items-center">
                                            <img className='mr-1.5' src="/static/images/Path11489.png" alt="" />
                                            <p>Uttam Nagar (Delhi)</p>
                                        </div>
                                        <div className="broker-cus-table1 broker-home-table11 flex items-center">
                                            <img className='mr-1.5' src="/static/images/Path11490.png" alt="" />
                                            <p>4(BHK) at Gaur’s City</p>
                                        </div>
                                        <div className="broker-cus-table1 broker-home-table11 flex items-center">
                                            <img className='mr-1.5 cursor-pointer' src="/static/images/a1.png" alt="" />
                                            <div>
                                                <p style={{ color: "#0A2E57" }} className="font-semibold">15 July 2021</p>
                                                <p style={{ color: "#0A2E57" }} className="text-xs">10 : 45 AM</p>
                                            </div>
                                        </div>
                                        <div className="broker-cus-table1 broker-home-table11 flex items-center">
                                            <img className='mr-1.5' src="/static/images/Path11488(1).png" alt="" />
                                            <p>70-01 Lack-one Crore</p>
                                        </div>
                                        <div className="broker-cus-table1 flex items-center">
                                            <p className="font-semibold">YES</p>
                                        </div>
                                    </div>
                                    <div className="broker-home-table broker-cus-table flex">
                                        <div className="broker-cus-table1 broker-home-table11 flex items-center">
                                            <img className='mr-1.5' src="/static/images/Rectangle2151.png" alt="" />
                                            <div>
                                                <p>Sagar Sharma</p>
                                                <p className="text-xs">NO22MR183</p>
                                            </div>
                                        </div>
                                        <div className="broker-cus-table1 broker-home-table12 flex items-center">
                                            <img src="/static/images/a4.png" alt="" />
                                            <img className='mx-3' src="/static/images/a3.png" alt="" />
                                            <img src="/static/images/a2.png" alt="" />
                                        </div>
                                        <div className="broker-cus-table1 broker-home-table11 flex items-center">
                                            <img className='mr-1.5' src="/static/images/Path11489.png" alt="" />
                                            <p>Uttam Nagar (Delhi)</p>
                                        </div>
                                        <div className="broker-cus-table1 broker-home-table11 flex items-center">
                                            <img className='mr-1.5' src="/static/images/Path11490.png" alt="" />
                                            <p>4(BHK) at Gaur’s City</p>
                                        </div>
                                        <div className="broker-cus-table1 broker-home-table11 flex items-center">
                                            <img className='mr-1.5' src="/static/images/a1.png" alt="" />
                                            <div>
                                                <p style={{ color: "#0A2E57" }} className="font-semibold">15 July 2021</p>
                                                <p style={{ color: "#0A2E57" }} className="text-xs">10 : 45 AM</p>
                                            </div>
                                        </div>
                                        <div className="broker-cus-table1 broker-home-table11 flex items-center">
                                            <img className='mr-1.5' src="/static/images/Path11488(1).png" alt="" />
                                            <p>70-01 Lack-one Crore</p>
                                        </div>
                                        <div className="broker-cus-table1 flex items-center">
                                            <p className="font-semibold">YES</p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default CustomerManagement;
