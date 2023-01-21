const mongoose = require("mongoose");
const propertySchema = new mongoose.Schema({
  propertyContent: {
    type: String,
  },
  propertyPrice: {
    type: String,
  },
  category: {
    type: String,
  },
  location: {
    type: String,
  },
  propertyArea: {
    type: String,
  },
  propertyDescription: {
    type: String,
  },
  parking: {
    type: Number,
  },
  venue: {
    type: String,
    default:"abc",
  },
  images: {
    type: Array,
  },
  bedroom: {
    type: Number,
  },
  Guest: {
    type: Number,
  },
  bathRoom: {
    type: Number,
  },
  sold: {
    type: Number,
    default: 0
  },
  checks: {
    type: Boolean,
    default: false
  },
  likes: {
    type: Array,
    default: []
  },
  bhk:{
    type:String
  },
  user: {
    type: String
  }
}, {
  timestamps: true
});


module.exports = mongoose.model("property", propertySchema);
