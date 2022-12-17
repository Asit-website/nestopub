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
        type:Number,
        default:2
    }
},{
    timestamps:true
});

module.exports = mongoose.model("Builder",BuilderSchema);

