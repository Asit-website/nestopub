const Users = require("../models/userModel");
const brokerCtrl = {
    editBroker: async (req,res) =>{
        try {
            const {firmName,authorizedName,city,mobile,individualName,city1, mobile1} = req.body;
            await Users.findOneAndUpdate({_id:req.user.id},{
                firmName,authorizedName,city,mobile,individualName,city1, mobile1
            })
            
            res.json({msg:"update profile successfully"});

        } 
        
        catch (error) {
            return res.status(500).json({ msg: error.message })
        } 
    },
    deleteBroker: async (req,res) =>{
        try {
             await Users.findByIdAndDelete({_id:req.user.id});
             res.json({msg:"Delete Account Successfully"});
        } 
        
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }
}


module.exports = brokerCtrl;