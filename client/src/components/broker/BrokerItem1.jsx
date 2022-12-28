import React, { useContext, useState } from 'react'
import Sidebar from '../common/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
// import dayjs from 'dayjs';
import { GlobalState } from '../../GlobalState';
import ClientsItem from '../ClientsPop/ClientsItem';
import LoadMoreClients from '../ClientsPop/LoadMoreClients';

const weekUtil = {
    0: "S",
    1: "M",
    2: "T",
    3: "W",
    4: "T",
    5: "F",
    6: "S"
};

const BrokerItem1 = () => {
    const [value, onChange] = useState(new Date());
    const state = useContext(GlobalState);
    const [clientLog] = state.ClientApi.clientLog;
    return (
        <>
            <div className='broker-home'>
                <div className="broker-home1 flex">
                    <Sidebar />
                    <div className="broker-home12 flex">
                        <div className="broker-home121">
                            <div className="broker-home1211">
                                <div className="broker-home12111 flex justify-between">
                                    <b>Dashboard</b>
                                    <div>
                                        !
                                    </div>
                                </div>
                                <div className="broker-home12112 flex">
                                    <div className="broker-home12a">
                                        <p>Total Sales</p>
                                        <p className="text-xl font-semibold">120</p>
                                    </div>
                                    <div className="broker-home12a broker-home12-border">
                                        <p>Total Earning</p>
                                        <p className="text-xl font-semibold">10Lac</p>
                                    </div>
                                    <div className="broker-home12a broker-home12-border">
                                        <p>Total Clients</p>
                                        <p className="text-xl font-semibold">{clientLog.length}</p>
                                    </div>
                                    <div className="broker-home12a broker-home12-border">
                                        <p>Follow Up</p>
                                        <p className="text-xl font-semibold">50</p>
                                    </div>
                                    <div className="broker-home12a">
                                        <p>Total Meetings</p>
                                        <p className="text-xl font-semibold">110</p>
                                    </div>
                                </div>
                            </div>
                            <div className="broker-home1212">
                                <div className="broker-home12121 items-center flex justify-between">
                                    <div>
                                        <p>Clients</p>
                                    </div>
                                    <div className='flex'>
                                        <button className="broker-home-btn broker-home-btn1 mr-4 flex items-center">
                                            <p>Today</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ml-2 bi bi-chevron-down" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                            </svg>
                                        </button>
                                        <button className="broker-home-btn broker-home-btn2 flex items-center">
                                            <p>Lorem, ipsum</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ml-2 bi bi-chevron-down" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="broker-home12122">
                                    {
                                        clientLog.map((client) => {
                                            return <ClientsItem key={client._id} client={client} />
                                        })
                                    }
                                </div>
                                <LoadMoreClients/>
                                {
                                    clientLog.length === 0 && <h2>No Client to Display</h2>
                                }
                            </div>
                        </div>
                        <div className="broker-home122">
                            <div className="broker-home1221 pb-3">
                                <div className="flex justify-between">
                                    <b className="font-bold">Visit Management</b>
                                    <div className='mark-a'>
                                        !
                                    </div>
                                </div>
                            </div>
                            <div className="broker-home1222 pt-3">
                                <div className="broker-home12221 flex items-center">
                                    <div>
                                        +
                                    </div>
                                    <p>Schudle New Visit</p>
                                </div>
                                <div className="broker-home12222">
                                    <Calendar formatShortWeekday={(locale, date) => weekUtil[(date.getDay())]} onChange={onChange} value={value} />
                                </div>
                                {/* dayjs(date).format() */}
                                <div className="broker-home12223">
                                    <div className="broker-home2-card flex mb-3 p-2">
                                        <div className="img mr-3">
                                            <img src="/static/images/cho.png" alt="" />
                                        </div>
                                        <div className="text">
                                            <h5 className='mb-0 font-semibold text-sm'>Visit with Shubham Gupta</h5>
                                            <p className='mb-0 text-xs'>Visting on New Ashok Nagar Flat (3BHK)</p>
                                            <p className='font-semibold text-sm'>12:30  November 10,2022</p>
                                        </div>
                                    </div>
                                    <div className="broker-home2-card flex mb-3 p-2">
                                        <div className="img mr-3">
                                            <img src="/static/images/cho.png" alt="" />
                                        </div>
                                        <div className="text">
                                            <h5 className='mb-0 font-semibold text-sm'>Visit with Shubham Gupta</h5>
                                            <p className='mb-0 text-xs'>Visting on New Ashok Nagar Flat (3BHK)</p>
                                            <p className='font-semibold text-sm'>12:30  November 10,2022</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mb-4 broker-side-bottom underline">
                                    Show all meetings and Tasks
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default BrokerItem1;
