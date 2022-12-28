import React from 'react';
import Sidebar from '../common/Sidebar';

const MyProfile = () => {
    return (
        <>
            <div className='broker-home'>
                <div className="broker-home1 flex">
                    <Sidebar />
                    <div className="broker-home12 flex">
                        <div className="broker-myp1 mr-2 p-3">
                            <div className="broker-myp11 items-center flex mb-3 mt-7">
                                <img src="/static/images/a10.png" alt="" className='mr-5' />
                                <p className='font-bold text-lg'>Sudeep Sharma</p>
                            </div>
                            <div className="broker-my10 py-5 broker-myp11 cursor-pointer">
                                <p>Saved Search</p>
                                <div className="broker-10-alert text-sm">
                                    View
                                </div>
                            </div>
                            <div className="broker-my10 broker-myp12 broker-myp-bor cursor-pointer">
                                <p>Personal Details</p>
                                <div className="broker-10-alert text-sm">
                                    Edit
                                </div>
                            </div>
                            <div className="broker-my10 broker-myp13 broker-myp-bor cursor-pointer">
                                <p>Payment Status</p>
                            </div>
                            <div className="broker-my10 broker-myp14 broker-myp-bor cursor-pointer">
                                <p>Claim Brokerage (Payment)</p>
                                <div className="broker-10-alert text-sm">
                                    Claim
                                </div>
                            </div>
                            <div className="broker-my10 broker-myp15 broker-myp-bor cursor-pointer">
                                <p>Download Legal Documents</p>
                            </div>
                            <div className="broker-my10 broker-myp16 broker-myp-bor cursor-pointer">
                                <p>Raise Query</p>
                            </div>
                            <div className="broker-my10 broker-myp17 py-5 cursor-pointer">
                                <p>Nesto Support</p>
                            </div>
                            <div className="broker-my18 cursor-pointer mt-12 flex items-center">
                                <img className='mr-2' src="/static/images/logout.png" alt="" />
                                <p>Sign Out</p>
                            </div>
                        </div>
                        <div className="broker-myp2 ml-2">
                            <div className="broker-myp21 broker-myp20 p-3 mb-3 bg-white">
                                <div className="upper-b flex justify-between pb-2 mb-9">
                                    <p>Personal Details</p>
                                    <div>
                                        !
                                    </div>
                                </div>
                                <div className="lower-b flex flex-wrap">
                                    <div className='broker-myp-input'>
                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name of the firm" required />
                                    </div>
                                    <div className='broker-myp-input'>
                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name of the Authorised Person" required />
                                    </div>
                                    <div className='broker-myp-input'>
                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City" required />
                                    </div>
                                    <div className='broker-myp-input'>
                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile No." required />
                                    </div>
                                    <div className='broker-myp-input'>
                                        <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Date of birth" required />
                                    </div>
                                    <button type="button" className="text-white h-fit bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
                                </div>
                            </div>
                            <div className="broker-myp22 broker-myp20 p-3 mb-3 bg-white">
                                <div className="flex justify-between">
                                    <p className="font-bold">Bank Details</p>
                                    <p className="cursor-pointer text-blue-600">Add</p>
                                </div>
                            </div>
                            <div className="broker-myp23 broker-myp20 p-3 bg-white">
                                <div className="upper-b flex justify-between pb-2 mb-9">
                                    <p>Change Password</p>
                                    <div>
                                        !
                                    </div>
                                </div>
                                <div className="lower-b flex flex-wrap">
                                    <div className='broker-myp-input'>
                                        <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Old Password" required />
                                    </div>
                                    <div className='broker-myp-input'>
                                        <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New Password" required />
                                    </div>
                                    <button type="button" className="text-white h-fit bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyProfile;
