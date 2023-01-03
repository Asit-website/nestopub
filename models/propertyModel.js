const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  property_id: String,
},{
    timestamps:true
});


module.exports = mongoose.model("property",propertySchema);