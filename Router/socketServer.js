const webSocketServer = require('websocket').server;
const express=require('express');

const sendMessage = (json, userId) => {
    clients[userId].sendUTF(json);
};

const clients = {};

const init=(data)=>{
    const router=express.Router();

    const wsServer = new webSocketServer({
        httpServer: data.server
    });

    wsServer.on('request', async(request)=>{
        let urls = request.resource.split('/');
        let slug = urls[3];
        let userID=urls[2]+slug;
        const connection = request.accept(null, request.origin);
        clients[userID] = connection;

        connection.on('message',async (message)=>{
            if(message.type==='utf8')
            {
                const dataFromClient = JSON.parse(message.utf8Data);
                const json = { type: dataFromClient.type, type1: dataFromClient.type1 };

                if(dataFromClient.type==='CHAT')
                {
                    let data = dataFromClient.data;

                    if(dataFromClient.type1==='GET_BROKER_ALL')
                    {

                    }

                    if(dataFromClient.type1==='GET_CLIENT_ALL')
                    {

                    }

                    if(dataFromClient.type1==='GET_CHAT')
                    {

                    }
                }
            }
        });
    });

    return router;
};

module.exports=init;