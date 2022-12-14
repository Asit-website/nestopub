import React, { useContext, useEffect, useState } from 'react';
// import DateTimePicker from 'react-datetime-picker';
import { GlobalState } from '../../../GlobalState';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import moment from 'moment';
import Alert from '@mui/material/Alert';

const NewVisitModal = (props) => {
    const state = useContext(GlobalState);
    const [clientLog] = state.ClientApi.clientLog;
    const [value, setValue] = useState({
        client: '',
        date: ''
    });

    useEffect(()=>{
        console.log(props.editData1);
        setValue({
            id: props.editData1._id,
            client: props.editData1.client,
            date: props.editData1.date
        });
    },[props.editData1]);

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };

    const onchange = (e) => {
        setValue({ ...value, date: moment(e).format() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(value);
        let data;
        if(!props.isEdit1)
        {
            console.log('if');
            data = await state.postVisit(value.client, value.date);
        }
        else
        {
            console.log('else');
            data = await state.editSchedule({id: value.id,client: value.client, date: value.date});
        }

        if (data.status === 'success') {
            props.setRefreshFlag(!props.refreshFlag);
            document.getElementById('newVisitModal').classList.toggle('hidden');
            document.getElementById("success4").style.display = "block";
            const fis = document.getElementById("fes2");
            fis.innerText = `${data.msg}`;

            setTimeout(() => {
                document.getElementById("success4").style.display = "none";
            }, 2000);
        }
        else {
            document.getElementById('newVisitModal').classList.toggle('hidden');
            document.getElementById("fuccess4").style.display = "block";
            const tis = document.querySelector(".tis2");
            tis.innerText = `${data.msg}`;

            setTimeout(() => {
                document.getElementById("fuccess4").style.display = "none";
            }, 2000);
        }
    };

    return (
        <>
            <div className="success-message mrji" id="success4">
                <Alert id='fes2' severity="success"></Alert>
            </div>
            <div id='fuccess4' className="fuccess-msg">
                <Alert className='tis2' severity="error"></Alert>
            </div>
            <div id="newVisitModal" className="clients-pop hidden">
                <div tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                    <div className="cus-modal relative w-full h-full max-w-2xl md:h-auto">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    { props.isEdit1 ? 'Edit Scheduled Visit' : 'Schudle New Visit'}
                                </h3>
                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => {
                                    document.getElementById('newVisitModal').classList.toggle('hidden');
                                }}>
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-6 space-y-6">
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="countries" className="block mb-2 text-md font-semibold text-gray-900 dark:text-white">Choose client</label>
                                    <select id="countries" name="client" onChange={handleChange} value={value.client} className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value=''>Choose a client to meet</option>
                                        {clientLog.map((e, index) => {
                                            return <option key={index} value={e._id}>{`${e.BuyName} - ${e.BuyerBhk} - ${e.BuyerBudget} - ${e.BuyerLocation}`}</option>
                                        })}
                                    </select>

                                    <div className='mb-3'>
                                        <p className='mb-2 font-semibold text-md'>Pick date and time</p>
                                        {/* <DateTimePicker onChange={onChange} value={value} /> */}
                                        <Datetime className='visit-date' onChange={onchange} inputProps={{ placeholder: "Choose date and time" }} />
                                    </div>

                                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{props.isEdit1 ? "Edit" : "Submit"}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewVisitModal;
