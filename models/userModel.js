const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    firmName: {
      type: String,
      required: true,
    },

    authorizedName: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    mobile: {
      type:String,
      required: true,
    },
    mobileOtp1: {
      type:String,
      required: true,
    },
    mobileOtp2: {
      type:String,
      required: true,
    },
    mobileOtp3: {
      type:String,
      required: true,
    },
    mobileOtp4: {
      type:String,
      required: true,
    },
    individualName: {
      type: String,
    },
    city1: {
      type: String,
    },
    mobile1: {
      type: String,
    },
    // role: {
    //   type: String,
    //   default: "user",
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);
