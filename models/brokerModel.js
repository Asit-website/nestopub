const mongoose = require("mongoose");
const brokerSchema = new mongoose.Schema({
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
  scheduledClients:{
    type:Array,
    default:[]
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Brokers', brokerSchema);