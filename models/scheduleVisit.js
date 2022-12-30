const mongoose=require('mongoose');

const mySchema=mongoose.Schema({
    user:{
        type:String
    },
    client:{
        type:String
    },
    date:{
        type:String
    }
});

const ScheduleVisit=mongoose.model('ScheduleVisit', mySchema);

module.exports=ScheduleVisit;
