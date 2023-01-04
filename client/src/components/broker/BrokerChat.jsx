import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalState } from '../../GlobalState';
import logo from "../../images/logo.png";

const BrokerChat = () => {
    const state = useContext(GlobalState);
    const [user] = state.BrokerApi.user;

    useEffect(() => {
        document.querySelector('.header').style.display = 'none';
    }, [])

    return (
        <div className="chat-main">
            <div className="chat-main1 flex">
                <div className="chat-nav">
                    <div className="chat-logo flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="cursor-pointer mr-2 bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                        <NavLink to="/" className="logo head2-logo">
                            <img src={logo} alt="logo" />
                        </NavLink>
                    </div>
                    <div className="chat-nav1">
                        <h5 className="text-lg mb-3">
                            Chats
                        </h5>
                        <div className="relative w-full">
                            <input type="search" className="block text-xs p-2.5 w-full z-20 h-full text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Account ID, Title, Transaction Type, Method" required />
                            <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                        <div className="chat-list">
                            <div className="chat-list-card chat-list-card-active px-3 mb-3 py-2 flex justify-between items-center">
                                <div className="chat-list-card1 mr-2">
                                    <img src="" alt="" />
                                </div>
                                <div className="chat-list-card2 mr-2">
                                    <p>Sudeep</p>
                                    <p className="text-sm mt-2">Okay</p>
                                </div>
                                <div className="chat-list-card3">
                                    <p className="text-gray-800">11-10</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chat-body">
                    <div className="chat-body1 px-4 py-4 flex justify-between items-end">
                        <div className="chat-body11">
                            {/* demo photo */}
                            <img className="mr-3 w-8 h-8 rounded-full" src={user.images.url} alt="user photo" />
                            <div>
                                <h5 className="text-lg font-semibold mb-2">Sudeep</h5>
                                <p className="text-sm">Online</p>
                            </div>
                        </div>
                        <div className="chat-body12 flex">
                            <div className="flex chat-body121">
                                <img className='mr-2' src="/static/images/b1.png" alt="" />
                                <img className='ml-2' src="/static/images/b2.png" alt="" />
                            </div>
                            <div className='chat-body122'>
                                <img src="/static/images/b3.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="chat-body2">
                        <div className="chat-body21">
                            <div className="chat-text chat-left">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, voluptatem.</p>
                                <b>10:51</b>
                            </div>
                            <div className="chat-text chat-left">
                                <p>Lorem ipsum, dolor sit amet consectetu.</p>
                                <b>10:51</b>
                            </div>
                            <div className="chat-date">
                                <p className='text-sm text-gray-800'>12-10-2022</p>
                            </div>
                            <div className="chat-text chat-right">
                                <p>Lorem ipsum, dolor sit amet consectetu. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, distinctio.</p>
                                <b>10:51</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BrokerChat;
