const mongoose = require("mongoose");
const propertySchema = new mongoose.Schema({
  property_id:{
    type:String,
    unique:true,
    trim:true,
    required:false,
    set: b => b === '' ? undefined : b
  },
  propertyContent:{
    type:String,
    required:false,
    set: b => b === '' ? undefined : b
  },
  propertyPrice:{
    type:Number,
    required:false,
    set: b => b === '' ? undefined : b
  },
  category:{
    type:String,
    required:false,
    set: b => b === '' ? undefined : b
  },
  location:{
    type:String,
    required:false,
    set: b => b === '' ? undefined : b
  },
  propertyArea:{
    type:String,
    required:false,
    set: b => b === '' ? undefined : b
  },
  propertyDescription:{
    type:String,
    required:false,
    set: b => b === '' ? undefined : b
  },
  parking:{
    type:Number,
    required:false,
    set: b => b === '' ? undefined : b
  },
  venue:{
    type:String,
    required:false,
    set: b => b === '' ? undefined : b
  },
  propertyOwners:{
    type:String,
    required:false,
    set: b => b === '' ? undefined : b
  },
  ownerImages:{
    type:Object,
      required: false,
    set: xy => xy === '' ? undefined : xy
  },
  images:{
    type:Array,
    required:false,
    set: b => b === '' ? undefined : b
  },
  bedroom:{
    type:Number,
    required:false,
    set: b => b === '' ? undefined : b
  },
  Guest:{
    type:Number,
    required:false,
    set: b => b === '' ? undefined : b
  },
  bathRoom:{
    type:Number,
    required:false,
    set: b => b === '' ? undefined : b
  },
  sold:{
    type:Number,
    default:0
  },
  checks:{
    type:Boolean,
    default:false
  },
  likes:[{type:mongoose.Types.ObjectId, ref:'user'}],
  user:{
    type:mongoose.Types.ObjectId,
    ref:'user'
  }
},{
    timestamps:true
});


module.exports = mongoose.model("property",propertySchema);