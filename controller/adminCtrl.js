const Users = require("../models/userModel");

const adminCtrl = {
   editAdmin: async (req,res) =>{
      try {
          const {name,phone,images,email} =req.body;

          const updateObj = {name,phone,email};

          if(images){
            updateObj.images = images;
          }

          const data = await Users.findOneAndUpdate({_id:req.params.id},updateObj,{new:true});
          res.json({ msg: "update profile successfully", data });
      } 
      
      catch (error) {
        return res.status(500).json({msg:error.message});
      }
   },
   deleteAdmin: async (req,res) =>{
      try {
           Users.findByIdAndDelete(req.params.id).where({role:1});
           res.json({msg:"delete account successfully"});
      } 
      
      catch (error) {
          return res.status(500).json({msg:error.message});
      }
   }
}


module.exports = adminCtrl;