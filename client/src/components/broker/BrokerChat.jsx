import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { GlobalState } from '../../GlobalState';
import logo from "../../images/logo.png";

var client1;
var tc;
// var initialDate = new Date().getTime() - (Number(new Date().getHours() * 60 * 60 * 1000) + Number(new Date().getMinutes() * 60 * 1000) + Number(new Date().getSeconds() * 1000));

const BrokerChat = (props) => {
    const state = useContext(GlobalState);
    // const {client}=state;
    // console.log(client);
    const [user] = state.BrokerApi.user;

    const navigate = useNavigate();
    const [clientLog] = state.ClientApi.clientLog;
    // console.log(clientLog);

    const [value, setValue] = useState({
        message: ''
    });
    const [chatList, setChatList] = useState([]);
    const [chatList1, setChatList1] = useState([]);
    const [currentChat, setCurrentChat] = useState({});
    const [isNewChat, setIsNewChat] = useState(false);
    const [refreshFlag, setRefreshFlag] = useState(false);
    const [activeChat, setActiveChat] = useState(-1);

    useEffect(() => {
        document.querySelector('.header').style.display = 'none';
        handleWebSocketData();
        getAllChats();
    }, [props.cli, refreshFlag]);

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    }

    const getAllChats = () => {
        client1.send(JSON.stringify({
            type: "CHAT",
            type1: "GET_USER_CHATS",
        }));
    };

    const getChat = (id) => {
        client1.send(JSON.stringify({
            type: "CHAT",
            type1: "GET_CHAT",
            data: id
        }));
    };

    const postChatBroker = (e) => {
        e.preventDefault();
        let data;
        if (isNewChat) {
            data = {
                isNewChat,
                clientId: currentChat.clientId,
                clientName: currentChat.clientName,
                clientImage: currentChat.clientImage,
                messageUser: 'broker',
                messageText: value.message,
                brokerId: JSON.parse(localStorage.getItem('nestoBroker'))._id,
                brokerName: JSON.parse(localStorage.getItem('nestoBroker')).firmName,
                brokerImage: JSON.parse(localStorage.getItem('nestoBroker')).images.url
            };
        }
        else {
            data = {
                isNewChat,
                id: currentChat.id,
                messageText: value.message
            };
        }

        // console.log(data);
        client1.send(JSON.stringify({
            type: "CHAT",
            type1: "POST_CHAT_BROKER",
            data
        }));

        setValue({
            message: ''
        });
    };

    const handleWebSocketData = () => {
        // console.log(props.cli);
        if (props.cli) {
            client1 = props.cli;

            // console.log(client1);

            client1.onopen = async () => {
                console.log('yeah');
                // getAllChats();
            };

            client1.onmessage = async (message) => {
                const dataFromServer = JSON.parse(message.data);
                // console.log(dataFromServer);

                if (dataFromServer.type === 'CHAT') {
                    if (dataFromServer.type1 === "GET_USER_CHATS") {
                        let tempArr = dataFromServer.data.data;
                        // console.log(clientLog);
                        // console.log(tempArr);
                        if (tempArr.length > 0) {
                            for (let i of clientLog) {
                                if (!tempArr.find(x => x.client.id === i._id)) {
                                    tempArr.push(i);
                                }
                            }
                        }
                        else {
                            tempArr = clientLog;
                        }
                        // console.log(tempArr);
                        setChatList(tempArr);
                        setChatList1(tempArr);
                    }
                    if (dataFromServer.type1 === "GET_CHAT") {
                        getChatData(dataFromServer.data.data, activeChat);
                    }
                    if (dataFromServer.type1 === "POST_CHAT_BROKER") {
                        setRefreshFlag(!refreshFlag);
                        getChatData(dataFromServer.data.data, activeChat);
                    }
                    if (dataFromServer.type1 === "POST_CHAT_CLIENT") {
                        // For client side - no use here
                    }
                }
            };
        }
    };

    const handleSearch = (e) => {
        if(e.target.value!=='')
        {
            setChatList(()=>{
                return chatList1.filter((f)=>{
                    return f?.client?.name?.includes(e.target.value) || f?.BuyName?.includes(e.target.value);
                });
            });
        }
        else
        {
            console.log(chatList1);
            setChatList(chatList1);
        }
    };

    const getChatData = (data, index) => {
        // console.log(data);
        if (data.BuyName) {
            console.log('yes');
            setIsNewChat(true);
            setCurrentChat({
                clientId: data._id,
                clientName: data.BuyName,
                clientImage: data.BuyerImages.url
            });
        }
        else {
            setCurrentChat({
                id: data._id,
                messages: data.messages
            });
            setIsNewChat(false);
            clearInterval(tc);
            tc=setInterval(() => {
                getChat(data._id);
            }, 3000);
        }
        // getChat(id);
        setActiveChat(index);
    };

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
                            <input type="search" onInput={handleSearch} className="block border-none text-sm p-2.5 w-full z-20 h-full text-gray-900 bg-gray-50 rounded-r-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search or start a new chat" required />
                            <button style={{ padding: '7px 8px' }} type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                        <div className="chat-list mt-4">
                            {chatList.map((e, index) => {
                                return (
                                    <div key={index} onClick={() => {
                                        getChatData(e, index);
                                    }} className={`chat-list-card cursor-pointer ${activeChat === index ? 'chat-list-card-active' : null} px-3 mb-3 py-2 flex justify-between items-center`}>
                                        <div className="chat-list-card1 mr-2">
                                            <img src={e.client ? e.client?.image : e?.BuyerImages?.url} alt="" />
                                        </div>
                                        <div className="chat-list-card2 mr-2">
                                            <p>{e.client ? e.client?.name : e?.BuyName}</p>
                                            {e.messages ? <p className="text-sm">{e.messages[e.messages.length - 1].message}</p> : null}
                                        </div>
                                        <div className="chat-list-card3">
                                            {/* <p className="text-gray-600">11-10</p> */}
                                            {e.messages ? <p className="text-gray-600">{new Date(Number(e.messages[e.messages.length - 1].ts)).toLocaleTimeString().slice(0,-3)}</p> : null}
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
                            {isNewChat ? <>
                                <p>Start a new chat</p>
                            </> : <>
                                {currentChat?.messages?.map((e, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            {e.newDayFlag==='true' ? <div className="chat-date">
                                                {/* <p className='text-sm text-gray-800'>12-10-2022</p> */}
                                                <p className='text-sm text-gray-800'>{new Date(Number(e.ts)).toLocaleDateString()}</p>
                                            </div> : null}
                                            <div className={`chat-text ${e.user === 'broker' ? 'chat-right' : 'chat-left'}`}>
                                                <div className="chat-text1">
                                                    <p>{e.message}</p>
                                                    {/* <b className='text-xs'>10:51</b> */}
                                                    <b className='text-xs'>{new Date(Number(e.ts)).toLocaleTimeString().slice(0,-3)}</b>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    );
                                })}
                                {/* <div className="chat-text chat-left">
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
                                </div> */}
                            </>}
                        </div>
                    </div>
                    <div className="chat-input">
                        <form onSubmit={(e) => {
                            postChatBroker(e);
                        }}>
                            <label htmlFor="broker-chat" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <input type="text" id="broker-chat" name="message" onChange={handleChange} value={value.message} className="block w-full p-4 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type here .." required />
                                <button type="submit" className="text-white bg-transparent absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "><svg style={{ filter: "invert(1)" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                </svg></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrokerChat;

/* 

    if (new Date(e.ts).getTime() < initialDate) {
        // initialDate=initialDate-(24*60*60*1000);
        initialDate = new Date(e.ts).getTime();
        return (
            <>
                <div className="chat-date">
                   
<p className='text-sm text-gray-800'>{new Date(e.ts).toLocaleDateString()}</p>
                </div >
    <div className={`chat-text ${e.user === 'broker' ? 'chat-right' : 'chat-left'}`}>
        <div className="chat-text1">
            <p>{e.message}</p>
            <b className='text-xs'>{new Date(Number(e.ts)).toLocaleTimeString()}</b>
        </div>
    </div>
            </>
        );
    }
    else {
    let nextDay = new Date(initialDate).toLocaleDateString();
    nextDay = new Date(nextDay.split('/')[2], Number(nextDay.split('/')[1]) - 1, Number(nextDay.split('/')[2]) + 1, 0, 0, 0).getTime();
    console.log(nextDay);
    if (new Date(e.ts).getTime() > nextDay) {
        initialDate = new Date(e.ts).getTime();
        return (
            <>
                <div className="chat-date">
<p className='text-sm text-gray-800'>{new Date(e.ts).toLocaleDateString()}</p>
                </div >
    <div className={`chat-text ${e.user === 'broker' ? 'chat-right' : 'chat-left'}`}>
        <div className="chat-text1">
            <p>{e.message}</p>
            <b className='text-xs'>{new Date(Number(e.ts)).toLocaleTimeString()}</b>
        </div>
    </div>
            </>
        );
    }
    else {
    return (
        <>
            <div className={`chat-text ${e.user === 'broker' ? 'chat-right' : 'chat-left'}`}>
                <div className="chat-text1">
                    <p>{e.message}</p>
                    <b className='text-xs'>{new Date(Number(e.ts)).toLocaleTimeString()}</b>
                </div>
            </div>
        </>
    );
}
}

*/