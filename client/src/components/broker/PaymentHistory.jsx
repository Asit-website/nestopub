import React, { useEffect } from 'react';
import Sidebar from '../common/Sidebar';

const PaymentHistory = ({setAuthFlag}) => {
    useEffect(()=>{
        setAuthFlag(true);
      },[]);
    return (
        <>
            <div className='broker-home'>
                <div className="broker-home1 flex">
                    <Sidebar />
                    <div className="broker-home12 payment-history">
                        <div className="payment-history1">
                            <div className="pay1 flex justify-between items-center">
                                <div className="pay11">
                                    <form>
                                        <div className="flex">
                                            <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">Smart Search</button>

                                            <div className="relative w-full">
                                                <input type="search" className="block text-xs p-2.5 w-full z-20 h-full text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Account ID, Title, Transaction Type, Method" required />
                                                <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                                    <span className="sr-only">Search</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                                <div className="pay12 flex">
                                    <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Print</button>
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Export</button>
                                </div>
                            </div>
                            <div className="pay2 mt-7">
                                <div className="pay2-table flex justify-between">
                                    <div className="pay21 text-center">
                                        <p className="font-semibold mb-4 pay2h">Property Name</p>
                                        <p className="font-normal mb-4">Lorem Ipsum</p>
                                        <p className="font-normal mb-4">Lorem Ipsum</p>
                                        <p className="font-normal mb-4">Lorem Ipsum</p>
                                        <p className="font-normal mb-4">Lorem Ipsum</p>
                                        <p className="font-normal mb-4">Lorem Ipsum</p>
                                        <p className="font-normal mb-4">Lorem Ipsum</p>
                                        <p className="font-normal mb-4">Lorem Ipsum</p>
                                        <p className="font-normal mb-4">Lorem Ipsum</p>
                                        <p className="font-normal mb-4">Lorem Ipsum</p>
                                        <p className="font-normal mb-4">Lorem Ipsum</p>
                                        <p className="font-normal mb-4">Lorem Ipsum</p>
                                        <p className="font-normal mb-4">Lorem Ipsum</p>
                                    </div>
                                    <div className="pay22 text-center">
                                        <p className="font-semibold pay2h mb-4">Client Name</p>
                                        <p className="font-normal mb-4">Sudeep</p>
                                        <p className="font-normal mb-4">Sudeep</p>
                                        <p className="font-normal mb-4">Sudeep</p>
                                        <p className="font-normal mb-4">Sudeep</p>
                                        <p className="font-normal mb-4">Sudeep</p>
                                        <p className="font-normal mb-4">Sudeep</p>
                                        <p className="font-normal mb-4">Sudeep</p>
                                        <p className="font-normal mb-4">Sudeep</p>
                                        <p className="font-normal mb-4">Sudeep</p>
                                        <p className="font-normal mb-4">Sudeep</p>
                                        <p className="font-normal mb-4">Sudeep</p>
                                        <p className="font-normal mb-4">Sudeep</p>
                                    </div>
                                    <div className="pay23 text-center">
                                        <p className="font-semibold pay2h mb-4">Property Value</p>
                                        <p className="font-normal mb-4">4 BHK Flat purchase (Noida)</p>
                                        <p className="font-normal mb-4">4 BHK Flat purchase (Noida)</p>
                                        <p className="font-normal mb-4">4 BHK Flat purchase (Noida)</p>
                                        <p className="font-normal mb-4">4 BHK Flat purchase (Noida)</p>
                                        <p className="font-normal mb-4">4 BHK Flat purchase (Noida)</p>
                                        <p className="font-normal mb-4">4 BHK Flat purchase (Noida)</p>
                                        <p className="font-normal mb-4">4 BHK Flat purchase (Noida)</p>
                                        <p className="font-normal mb-4">4 BHK Flat purchase (Noida)</p>
                                        <p className="font-normal mb-4">4 BHK Flat purchase (Noida)</p>
                                        <p className="font-normal mb-4">4 BHK Flat purchase (Noida)</p>
                                        <p className="font-normal mb-4">4 BHK Flat purchase (Noida)</p>
                                        <p className="font-normal mb-4">4 BHK Flat purchase (Noida)</p>
                                    </div>
                                    <div className="pay24 text-center">
                                        <p className="font-semibold pay2h mb-4">Brokerage %</p>
                                        <p className="font-normal mb-4">15%</p>
                                        <p className="font-normal mb-4">15%</p>
                                        <p className="font-normal mb-4">15%</p>
                                        <p className="font-normal mb-4">15%</p>
                                        <p className="font-normal mb-4">15%</p>
                                        <p className="font-normal mb-4">15%</p>
                                        <p className="font-normal mb-4">15%</p>
                                        <p className="font-normal mb-4">15%</p>
                                        <p className="font-normal mb-4">15%</p>
                                        <p className="font-normal mb-4">15%</p>
                                        <p className="font-normal mb-4">15%</p>
                                        <p className="font-normal mb-4">15%</p>
                                    </div>
                                    <div className="pay25 text-center">
                                        <p className="font-semibold pay2h mb-4">Brokerage Value</p>
                                        <p className="font-normal mb-4">Lorem Ipsum</p>
                                        <p className="font-normal mb-4">Lorem Ipsum</p>
                                        <p className="font-normal mb-4">Lorem Ipsum</p>
                                        <p className="font-normal mb-4">Lorem Ipsum</p>
                                        <p className="font-normal mb-4">Lorem Ipsum</p>
                                        <p className="font-normal mb-4">Lorem Ipsum</p>
                                        <p className="font-normal mb-4">Lorem Ipsum</p>
                                        <p className="font-normal mb-4">Lorem Ipsum</p>
                                        <p className="font-normal mb-4">Lorem Ipsum</p>
                                        <p className="font-normal mb-4">Lorem Ipsum</p>
                                        <p className="font-normal mb-4">Lorem Ipsum</p>
                                        <p className="font-normal mb-4">Lorem Ipsum</p>
                                    </div>
                                    <div className="pay25 text-center">
                                        <p className="font-semibold pay2h mb-4">Payment Date</p>
                                        <p className="font-normal mb-4">22/07/2022</p>
                                        <p className="font-normal mb-4">22/07/2022</p>
                                        <p className="font-normal mb-4">22/07/2022</p>
                                        <p className="font-normal mb-4">22/07/2022</p>
                                        <p className="font-normal mb-4">22/07/2022</p>
                                        <p className="font-normal mb-4">22/07/2022</p>
                                        <p className="font-normal mb-4">22/07/2022</p>
                                        <p className="font-normal mb-4">22/07/2022</p>
                                        <p className="font-normal mb-4">22/07/2022</p>
                                        <p className="font-normal mb-4">22/07/2022</p>
                                        <p className="font-normal mb-4">22/07/2022</p>
                                        <p className="font-normal mb-4">22/07/2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentHistory;
