
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    firmName: {
      type: String,
      required: false,
      set: a => a === '' ? undefined : a
    },
    name: {
      type: String,
      required: false,
      set: xa => xa === '' ? undefined : xa
    },
    phone: {
      type: String,
      required: false,
      set: xb => xb === '' ? undefined : xb
    },
    authorizedName: {
      type: String,
      required: false,
      set: b => b === '' ? undefined : b
    },
    city: {
      type: String,
      required: false,
      set: c => c === '' ? undefined : c
    },
    mobile: {
      type: String,
      required: false,
      set: d => d === '' ? undefined : d
    },
    email: {
      type: String,
      required: false,
      set: z => z === '' ? undefined : z
    },
    mobileOtp1: {
      type: String,
      required: false,
      set: e => e === '' ? undefined : e
    },
    mobileOtp2: {
      type: String,
      required: false,
      set: f => f === '' ? undefined : f
    },
    mobileOtp3: {
      type: String,
      required: false,
      set: g => g === '' ? undefined : g
    },
    mobileOtp4: {
      type: String,
      required: false,
      set: h => h === '' ? undefined : h
    },
    individualName: {
      type: String,
      required: false,
      set: i => i === '' ? undefined : i
    },
    city1: {
      type: String,
      required: false,
      set: j => j === '' ? undefined : j
    },
    mobile1: {
      type: String,
      required: false,
      set: k => k === '' ? undefined : k
    },
    email1: {
      type: String,
      required: false,
      set: x => x === '' ? undefined : x
    },
    images: {
      type: Array,
      // required: false,
      // set: xy => xy === '' ? undefined : xy
    },
    role: {
      type: Number,
      default: 0,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    date1:{
      type:String,
      set: xxx => xxx === '' ? undefined : xxx
    },
    date2:{
      type:String,
      set: yyy => yyy === '' ? undefined : yyy
    },
    bankAcountName:{
      type:String,
      required:false,
      set: a => a === '' ?  undefined : a
    },
    bankName:{
      type:String,
      required:false,
      set: a => a === '' ?  undefined : a
    },
    acountNumber:{
      type:String,
      required:false,
      set: a => a === '' ?  undefined : a
    },
    ifsc:{
      type:String,
      required:false,
      set: a => a === '' ?  undefined : a
    },
    branchAddress:{
      type:String,
      required:false,
      set: a => a === '' ?  undefined : a
    },
    cancelCheque:{
      type: Object,
      required: false,
      set: xy => xy === '' ? undefined : xy
    },
    vpaId:{
      type:String,
      required:false,
      set: xa => xa === '' ? undefined : xa
    },
    saved:{
      type:Array,
      default:[]
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
