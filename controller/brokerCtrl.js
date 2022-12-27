const Users = require("../models/userModel");
class APIfeature{
    constructor(query, queryString ) {
        this.query = query;
        this.queryString = queryString;
      }
      pagination() { 
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit *1 || 4;
        const skip = (page-1) * limit;
        this.query = this.query.skip(skip).limit(limit);
        return this;
      } 
}
const brokerCtrl = {
    editBroker: async (req,res) =>{
        try {
            const {firmName,authorizedName,city,mobile,individualName,city1, mobile1,images} = req.body;
            await Users.findOneAndUpdate({_id:req.params.id},{
                firmName,authorizedName,city,mobile,individualName,city1, mobile1,images
            })
            
            res.json({msg:"update profile successfully"});

        } 
        
        catch (error) {
            return res.status(500).json({ msg: error.message })
        } 
    },
    deleteBroker: async (req,res) =>{
        try {
             await Users.findByIdAndDelete({_id:req.params.id});
             res.json({msg:"Delete Account Successfully"});
        } 
        
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },

    getBroker: async (req,res) =>{
        try {
        const features = new APIfeature(Users.find().where({role:0}),req.query)
        .pagination();

        const broker = await features.query;

        res.json({
            status: "success",
            result: broker.length,
            broker: broker,
        });
        } 
        
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }
}


module.exports = brokerCtrl;