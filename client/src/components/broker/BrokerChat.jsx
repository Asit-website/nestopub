import React, { useContext, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { GlobalState } from '../../GlobalState';
import logo from "../../images/logo.png";

const BrokerChat = () => {
    const state = useContext(GlobalState);
    const [user] = state.BrokerApi.user;

    const navigate = useNavigate();
    const [clientLog] = state.ClientApi.clientLog;
    console.log(clientLog);

    useEffect(() => {
        document.querySelector('.header').style.display = 'none';
    }, [])

    return (
        <div className="chat-main">
            <div className="chat-main1 h-full flex">
                <div className="chat-nav pt-8 px-3">
                    <div className="chat-logo mb-5 justify-center flex items-center">
                        <svg onClick={() => {
                            navigate(-1);
                        }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="cursor-pointer mr-2 bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                        <NavLink to="/" className="logo head2-logo">
                            <img src={logo} alt="logo" />
                        </NavLink>
                    </div>
                    <div className="chat-nav1">
                        <h5 className="text-lg font-semibold mb-3">
                            Chats
                        </h5>
                        <div className="relative px-5 w-full">
                            <input type="search" className="block border-none text-sm p-2.5 w-full z-20 h-full text-gray-900 bg-gray-50 rounded-r-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search or start a new chat" required />
                            <button style={{ padding: '7px 8px' }} type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                        <div className="chat-list mt-4">

                            {/* Demo api- Chat Api will be here */}
                            {clientLog.map((e, index) => {
                                return (
                                    <div className="chat-list-card cursor-pointer chat-list-card-active px-3 mb-3 py-2 flex justify-between items-center">
                                        <div className="chat-list-card1 mr-2">
                                            <img src={e.BuyerImages.url} alt="" />
                                        </div>
                                        <div className="chat-list-card2 mr-2">
                                            <p>{e.BuyName}</p>
                                            <p className="text-sm">Okay</p>
                                        </div>
                                        <div className="chat-list-card3">
                                            <p className="text-gray-600">11-10</p>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
                <div className="chat-body">
                    <div className="chat-body1 px-4 py-4 mb-5 flex justify-between bg-gray-100 items-center">
                        <div className="chat-body11 flex items-center">
                            {/* demo photo */}
                            <img className="mr-3 w-8 h-8 rounded-full" src={user.images.url} alt="user photo" />
                            <div>
                                <h5 className="text-lg font-semibold">Sudeep</h5>
                                <p className="text-sm">Online</p>
                            </div>
                        </div>
                        <div className="chat-body12 flex">
                            <div className="flex chat-body121">
                                <img className='mr-3 img1 cursor-pointer' src="/static/images/b1.png" alt="" />
                                <img className='ml-3 mt-1 cursor-pointer' src="/static/images/b2.png" alt="" />
                            </div>
                            <div className='chat-body122'>
                                <img className='mt-0.5 cursor-pointer' src="/static/images/b3.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="chat-body2 p-8">
                        <div className="chat-body21">
                            <div className="chat-text chat-left">
                                <div className="chat-text1">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, voluptatem.</p>
                                    <b className='text-xs'>10:51</b>
                                </div>
                            </div>
                            <div className="chat-text chat-left">
                                <div className="chat-text1">
                                    <p>Lorem ipsum, dolor sit amet consectetu.</p>
                                    <b className='text-xs'>10:51</b>
                                </div>
                            </div>
                            <div className="chat-date">
                                <p className='text-sm text-gray-800'>12-10-2022</p>
                            </div>
                            <div className="chat-text chat-right">
                                <div className="chat-text1">
                                    <p>Lorem ipsum, dolor sit amet consectetu. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, distinctio.</p>
                                    <b className='text-xs'>10:51</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chat-input">
                        <form>
                            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <input type="search" id="default-search" className="block w-full p-4 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type here .." required />
                                <button type="submit" className="text-white bg-transparent absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "><svg style={{filter:"invert(1)"}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                </svg></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BrokerChat;
