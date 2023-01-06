import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../common/Sidebar';
import moment from 'moment';
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import events from './events';
import { GlobalState } from '../../GlobalState';
import NewVisitModal from './modals/NewVisitModal';

moment.locale("en-GB");
const localizer = momentLocalizer(moment)
console.log(Views);
const allViews = Object.keys(Views).map(k => Views[k]);
console.log(allViews);
// const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const VisitManagement = ({ setAuthFlag }) => {
    useEffect(() => {
        setAuthFlag(true);
    }, []);

    const state = useContext(GlobalState);
    const [clientLog] = state.ClientApi.clientLog;
    const [visits, setVisits] = useState([]);
    const [editData1, setEditData1] = useState({});
    const [isEdit1, setIsEdit1] = useState(false);
    const [refreshFlag, setRefreshFlag] = useState(false);

    useEffect(() => {
        getVisits();
    }, [refreshFlag]);

    const getVisits = async () => {
        const data = await state.getVisits();
        setVisits(data.data);
        console.log(data);
    };

    const editSchedule = (data) => {
        console.log(data);
    }

    return (
        <>
            <NewVisitModal isEdit1={isEdit1} editData1={editData1} refreshFlag={refreshFlag} setRefreshFlag={setRefreshFlag} />

            <div className='broker-home'>
                <div className="broker-home1 flex">
                    <Sidebar />
                    <div className="broker-home12 visit-manage flex">
                        <div className="broker-home121 broker-cus">
                            <div className="myCustomHeight">
                                <Calendar
                                    localizer={localizer}
                                    events={events}
                                    step={60}
                                    views={allViews}
                                    defaultDate={new Date(2015, 3, 1)}
                                    popup={false}
                                    onShowMore={(events, date) => this.setState({ showModal: true, events })}
                                />
                            </div>
                        </div>
                        <div className="broker-home12223">
                            {
                                visits.map((e, index) => {
                                    let info = clientLog.find(x => x._id === e.client);

                                    return (
                                        <div className="broker-home2-card flex mb-3 p-2">
                                            <div className="img mr-3">
                                                <img src={info?.BuyerImages.url} alt="" />
                                            </div>
                                            <div className="text">
                                                <h5 className='mb-0 font-semibold text-sm'>Visit with {info?.BuyName}</h5>
                                                <p className='mb-0 text-xs'>Visting on {info?.BuyerLocation} ({info?.BuyerBhk})</p>
                                                <p className='font-semibold text-sm'>{new Date(e?.date).toLocaleString()}</p>
                                            </div>
                                            <i onClick={() => {
                                                setIsEdit1(true);
                                                setEditData1(e);
                                                document.getElementById('newVisitModal').classList.toggle('hidden');
                                            }} className="fa-solid fa-pen-to-square farts"></i>
                                        </div>
                                    )
                                })
                            }
                            {/* <div className="broker-home2-card flex mb-3 p-2">
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
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VisitManagement;
