const webSocketServer = require('websocket').server;
const express=require('express');
const Chat = require('../models/chatModel');

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
        // console.log(urls);
        let slug = urls[3];
        let userID=urls[2]+slug;
        // console.log(userID);
        const connection = request.accept(null, request.origin);
        clients[userID] = connection;

        connection.on('message',async (message)=>{
            if(message.type==='utf8')
            {
                const dataFromClient = JSON.parse(message.utf8Data);
                const json = { type: dataFromClient.type, type1: dataFromClient.type1 };

                if(dataFromClient.type==='CHAT')
                {
                    if(dataFromClient.type1==='GET_USER_CHATS')
                    {
                        // console.log('yes');
                        const chats=await Chat.find({user: slug});
                        json.data = { data: chats };
                        sendMessage(JSON.stringify(json), userID);
                    }

                    if(dataFromClient.type1==='GET_CHAT')
                    {
                        const data = await Chat.findById(dataFromClient.data);
                        json.data = { data };
                        sendMessage(JSON.stringify(json), userID);
                    }

                    if(dataFromClient.type1==='POST_CHAT_BROKER')
                    {
                        // console.log(dataFromClient.data);
                        if(dataFromClient.data.isNewChat)
                        {
                            const newChat=new Chat({
                                user: slug,
                                broker:{
                                    id: slug,
                                    name: dataFromClient.data.brokerName,
                                    image:dataFromClient.data.brokerImage
                                },
                                client:{
                                    id: dataFromClient.data.clientId,
                                    name: dataFromClient.data.clientName,
                                    image:dataFromClient.data.clientImage
                                },
                                messages:[{
                                    user:'broker',
                                    message:dataFromClient.data.messageText,
                                    ts:new Date().getTime(),
                                    newDayFlag:"true"
                                }]
                            });
                            const saveChat=await newChat.save();
                            json.data = { data: saveChat };
                        }
                        else
                        {
                            let newDayFlag='false';
                            const chat=await Chat.findById(dataFromClient.data.id);
                            let prevMessages=chat.messages;

                            if(new Date(Number(prevMessages[prevMessages.length-1].ts)).getDate()<new Date().getDate())
                            {
                                newDayFlag='true';
                            }

                            prevMessages.push({
                                user:'broker',
                                message: dataFromClient.data.messageText,
                                ts: new Date().getTime(),
                                newDayFlag
                            });
                            console.log(prevMessages);
                            const data=await Chat.findByIdAndUpdate(dataFromClient.data.id, {$set:{messages:prevMessages}},{new:true});
                            json.data = { data };
                        }
                        
                        sendMessage(JSON.stringify(json), userID);
                    }

                    if(dataFromClient.type1==='POST_CHAT_CLIENT')
                    {
                        // todo 
                    }
                }
            }
        });
    });

    return router;
};

module.exports=init;