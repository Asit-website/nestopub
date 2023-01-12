const mongoose = require("mongoose");

const BuilderSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    role:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'user',
    }
},{
    timestamps:true
});

module.exports = mongoose.model("Builder",BuilderSchema);

