import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../common/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import { GlobalState } from '../../GlobalState';
import ClientsItem from '../ClientsPop/ClientsItem';
import LoadMoreClients from '../ClientsPop/LoadMoreClients';
import NewVisitModal from './modals/NewVisitModal';
import Clientspop from '../ClientsPop/Clientspop';
import axios from 'axios';

import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import moment from 'moment';
import Alert from '@mui/material/Alert';

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
    const [token] = state.token;
    const [refreshFlag, setRefreshFlag] = useState(false);
    const [visits, setVisits] = useState([]);
    const [popAdd, setPopAdd] = useState(false);
    const [editData, setEditData] = useState({});
    const [editData1, setEditData1] = useState({});
    const [isEdit1, setIsEdit1] = useState(false);

    useEffect(() => {
        getVisits();
    }, [refreshFlag]);

    const getVisits = async () => {
        const data = await state.getVisits();
        setVisits(data.data);
        console.log(data);
    };

    const editClient = (data) => {
        console.log(data);
        setEditData(data);
        setPopAdd(true);
    };

    const editSchedule = (data) => {
        console.log(data);
    }

    // const deleteSchedule = async() => {
    //     try {
    //       const res = await axios.delete(`/api/deleteSchedule/${visits._id}`,{
    //          headers:{Authorization:token}
    //       });
    //       alert(res.data.msg);
    //       setRefreshFlag(!refreshFlag);
    //     } 

    //     catch (error) {
    //        alert(error.response.data.msg);
    //     }
    // }

    return (
        <>
            {
                popAdd && <Clientspop setPopAdd={setPopAdd} isEdit={true} editData={editData} />
            }
            <NewVisitModal isEdit1={isEdit1} editData1={editData1} refreshFlag={refreshFlag} setRefreshFlag={setRefreshFlag} />

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
                                        <p className="text-xl font-semibold">{visits.length}</p>
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
                                            return <ClientsItem key={client._id} client={client} editClient={editClient} />
                                        })
                                    }
                                </div>
                                <LoadMoreClients />
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
                                <div onClick={() => {
                                    setIsEdit1(false);
                                    document.getElementById('newVisitModal').classList.toggle('hidden');
                                }} className="broker-home12221 cursor-pointer flex items-center">
                                    <div>
                                        +
                                    </div>
                                    <p>Schudle New Visit</p>
                                </div>
                                <div className="broker-home12222">
                                    <Calendar formatShortWeekday={(locale, date) => weekUtil[(date.getDay())]} onChange={onChange} value={value} />
                                </div>

                                <div className="broker-home12223">
                                    {visits.map((e, index) => {
                                        // console.log(clientLog);
                                        let info = clientLog.find(x => x._id === e.client);
                                        // console.log(info);
                                        return (
                                            <div key={index} className="relative broker-home2-card flex mb-3 p-2">
                                                <div className="img mr-3">
                                                    <img src={info?.BuyerImages.url} alt="" />
                                                </div>
                                                <div className="text">
                                                    <h5 className='mb-0 font-semibold text-sm'>Visit with {info?.BuyName}</h5>
                                                    <p className='mb-0 text-xs'>Visting on {info?.BuyerLocation} ({info?.BuyerBhk})</p>
                                                    <p className='font-semibold text-sm'>{new Date(e?.date).toLocaleString()}</p>
                                                </div>
                                                <div onClick={()=>{
                                                    setIsEdit1(true);
                                                    setEditData1(e);
                                                    document.getElementById('newVisitModal').classList.toggle('hidden');
                                                }} className='schedule-edit'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        )
                                    })}
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
