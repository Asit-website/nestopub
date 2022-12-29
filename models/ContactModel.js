const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name1:{
        type:String,
        required:true
    },
    email1:{
      type:String,
      required:true
    },
    message1:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

module.exports = mongoose.model("contact",contactSchema);