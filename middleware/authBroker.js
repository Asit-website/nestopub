const Users = require("../models/userModel");

const authBroker = async(req,res,next) =>{
   try {
    const user = await Users.findOne({ _id:req.user.id  }) 
    if(user.role===0){
      return res.status(400).json({msg:"user resources access denied"});
    }

    next();
   }
    catch (error) {
        return res.status(500).json({msg:error.message})
   }
}

module.exports = authBroker;