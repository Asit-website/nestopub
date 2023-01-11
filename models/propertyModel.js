const mongoose = require("mongoose");
const propertySchema = new mongoose.Schema({
  propertyContent: {
    type: String,
  },
  propertyPrice: {
    type: Number,
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
  propertyOwners: {
    type: String,
    default:"abc",
  },
  ownerImages: {
    type: Object,
    default:{},
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
  user: {
    type: String,
    default: "user1"
  }
}, {
  timestamps: true
});


module.exports = mongoose.model("property", propertySchema);
