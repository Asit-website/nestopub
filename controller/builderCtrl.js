const Users = require("../models/userModel");
class APIfeature {
   constructor(query, queryString) {
       this.query = query;
       this.queryString = queryString;
   }
   pagination() {
       const page = this.queryString.page * 1 || 1;
       const limit = this.queryString.limit * 1 || 5;
       const skip = (page - 1) * limit;
       this.query = this.query.skip(skip).limit(limit);
       return this;
   }
}
const builderCtrl = {
    getBuilder: async (req,res)=>{
      try {
         const features = new APIfeature(Users.find().where({ role: 2 }), req.query)
             .pagination();
         const builder = await features.query;
         res.json({
             status: "success",
             result: builder.length,
             builder: builder,
         });
     }

     catch (error) {
         return res.status(500).json({ msg: error.message });
     }
    },

    deleteBuilder: async (req,res)=>{
      try {
         await Users.findByIdAndDelete({ _id: req.params.id });
         res.json({ msg: "Delete Account Successfully" });
     }
     catch (error) {
         return res.status(500).json({ msg: error.message });
     }
    },

    editBuilder: async (req,res) =>{
        try {
            const {builderName,builderPhone,builderEmail,images} = req.body;
            let updateObj = {builderName,builderPhone,builderEmail};
            if(images){
                updateObj.images = images;
            }

            const builderData = await Users.findOneAndUpdate({_id:req.params.id},updateObj,{new:true});

            res.json({ msg: "update profile successfully", builderData });
        } 
        
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    
    deleteAllBuilder: async (req,res) =>{
        try {
            await Users.deleteMany().where({role:2});
            res.json({ msg: "Deleted all" });
        } 
        
        catch (error) {
            return res.status(500).json({msg:error.message})
        }
    }
}
module.exports = builderCtrl;