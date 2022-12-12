
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    firmName: {
      type: String,
      required:false,
      set: a => a === '' ? undefined : a
    },

    authorizedName: {
      type: String,
      required:false,
      set: b => b === '' ? undefined : b
    },
    city: {
      type: String,
      required:false,
      set: c => c === '' ? undefined : c
    },
    mobile: {
      type:String,
      required:false,
      set: d => d === '' ? undefined : d
    },
    mobileOtp1: {
      type:String,
      required:false,
      set: e => e === '' ? undefined : e
    },
    mobileOtp2: {
      type:String,
      required:false,
      set: f => f === '' ? undefined : f
    },
    mobileOtp3: {
      type:String,
      required:false,
      set: g => g === '' ? undefined : g
    },
    mobileOtp4: {
      type:String,
      required:false,
      set: h => h === '' ? undefined : h
    },
    individualName: {
      type: String,
      required:false,
      set: i => i === '' ? undefined : i
    },
    city1: {
      type: String,
      required:false,
      set: j => j === '' ? undefined : j
    },
    mobile1: {
      type: String,
      required:false,
      set: k => k === '' ? undefined : k
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);
