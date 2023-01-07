import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ReconnectingWebSocket from 'reconnecting-websocket';
import { GlobalState } from '../GlobalState';

var client;
const WebSocketHandler = (props) => {
    const navigate = useNavigate();
    const context = useContext(GlobalState);

    // Constantly check for web socket connection
    useEffect(() => {
        let url = window.location.pathname.replace(/\//g, '-');

        const options = {
            connectionTimeout: 2500,
            maxRetries: 10,
        };

        // context.client = new ReconnectingWebSocket(`ws://127.0.0.1:5000/socketServer/${token}/${url}`, [], options);
        client = new ReconnectingWebSocket(`ws://localhost:5000/socketServer/${url}/${context.token[0]}`, [], options);
        // console.log(client);
        props.setCli(client);
        // console.log(context);
        // context.client = new ReconnectingWebSocket(`wss://${baseUrl}/socketServer/${token}/${url}`, [], options);
        context.client=client;

        window.addEventListener('offline', () => {
            console.log('offline');
            client.close();
        });
        client.addEventListener('close', () => {
            console.log('close');
            // document.getElementById('dis_modal').style.display = 'block';
        });
        client.addEventListener('open', () => {
            console.log('open');
            // document.getElementById('dis_modal').style.display = 'none';
        });

    }, []);

    // Reconnection of web socket 
    function reconnect() {
        // console.log(client);
        client.close();
        client.reconnect();
        // document.getElementById('dis_modal').style.display = 'none';
    }

    return (
        <>
        </>
    )
}

export default WebSocketHandler;
