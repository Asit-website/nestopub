const mongoose = require("mongoose");
const brokerSchema = new mongoose.Schema({
    // firstName:{
    //     type:String,
    //     required:true,
    // },
    // lastName:{
    //     type:String,
    //     required:true
    // },
    // mobile:{
    //     type:Number,
    //     required:true
    // },
    // email:{
    //     type:String,
    //     required:true
    // },
    // mobileOtp:{
    //     type:Number,
    //     required:true
    // },
    // mobileOtp2:{
    //     type:Number,
    //     required:true
    // },
    // mobileOtp3:{
    //     type:Number,
    //     required:true
    // },
    // mobileOtp4:{
    //     type:Number,
    //     required:true
    // },
    // emailOtp:{
    //     type:String,
    //     required:true
    // },
    // emailOtp2:{
    //     type:String,
    //     required:true
    // },
    // emailOtp3:{
    //     type:String,
    //     required:true
    // },
    // emailOtp4:{
    //     type:String,
    //     required:true
    // },
    // experience:{
    //     type:String,
    //     required:true
    // },
    // builderList:{
    //     type:String,
    //     required:true
    // },
    // registrationNumber:{
    //     type:String,
    //     required:true
    // },
    // certificationCopy:{
    //     type:String,
    // },
    // address:{
    //     type:String,
    //     required:true,
    // },
    // state:{
    //     type:String,
    //     required:true,
    // },
    // pinCode:{
    //     type:String,
    //     requird:true
    // },
    // city:{
    //     type:String,
    //     requird:true
    // },
    // area:{
    //     type:String,
    //     requird:true 
    // },
    // whatsapp:{
    //     type:String,
    // },
    // images:{
    //     type:Object,
    //     required:true
    // },
    // images1:{
    //     type:Object,
    //     required:true
    // },
    // images2:{
    //     type:Object,
    //     required:true
    // },
    // images3:{
    //     type:Object,
    //     required:true
    // },
    
},{
    timestamps:true
});

module.exports = mongoose.model('Brokers',brokerSchema);