const mongoose=require('mongoose');

const MySchema=mongoose.Schema({
    user:{
        type:String
    },
    broker:{
        id:String,
        name:String,
        image:String
    },
    client:{
        id:String,
        name:String,
        image:String
    },
    messages:[{
        user:String,
        message:String,
        ts:String,
        newDayFlag:String
    }]
});

const Chat=mongoose.model('Chat',MySchema);

module.exports=Chat;
