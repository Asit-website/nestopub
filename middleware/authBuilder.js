const Users = require("../models/userModel");

const authBuilder = async(req,res,next) =>{
   try {
    const user = await Users.findOne({ _id:req.user._id  }) 
    if(user.role===0){
      return res.status(400).json({msg:"Builder resources access denied"});
    }

    next();
   }
    catch (error) {
        return res.status(500).json({msg:error.message})
   }
}

module.exports = authBuilder;