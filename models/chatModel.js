const mongoose=require('mongoose');

const MySchema=mongoose.Schema({
    broker:{
        id:String,
        name:String
    },
    client:{
        id:String,
        name:String
    },
    messages:[{
        user:String,
        message:String
    }]
});

const Chat=mongoose.model('Chat',MySchema);

module.exports=Chat;
