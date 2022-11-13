const Users = require('../models/userModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authCtrl = {
   resgisterBroker: async(req,res)=>{
      try {
               
      } 
      
      catch (error) {
        return res.status(500).json({msg:error.message})
      }
   }
}

module.exports = authCtrl;