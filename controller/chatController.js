const Chat = require("../models/chatModel");

const getAllChats=async()=>{
    const data = await Chat.find();
    return {data};
}

const getUserChats=async ({user})=>{
    const chats=await Chat.find({user: user._id});
    return {data: chats};
};

const getChat=async ({user, id})=>{
    const data = await Chat.findById(id);
    return {data};
};

const postChatBroker=async ({user, id, client, message})=>{
    // console.log(user);
    // const isAvailable=await Chat.findById(id);
    // if(isAvailable)
    // {

    // }
    // else
    // {
    //     const newChat=new Chat({
    //         broker: user._id
    //     });
    // }
};

const postChatClient=async ({user, id, broker, message})=>{

};

const deleteChats=async ()=>{
    const data = await Chat.deleteMany();
    return {data};
};

module.exports={
    getUserChats,
    getChat,
    postChatBroker,
    postChatClient,
    getAllChats,
    deleteChats
};
