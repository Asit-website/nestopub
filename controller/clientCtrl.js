const Clients = require("../models/ClientModel");
class APIfeature{
   constructor(query, queryString ) {
       this.query = query;
       this.queryString = queryString;
     }
     pagination() { 
       const page = this.queryString.page * 1 || 1;
       const limit = this.queryString.limit *1 || 5;
       const skip = (page-1) * limit;
       this.query = this.query.skip(skip).limit(limit);
       return this;
     } 
}
const clientCtrl = {
   addClient: async (req,res) =>{
      try {
         const {BuyId,BuyName,BuyerMobile,BuyerLocation,BuyerBudget,BuyerBhk,BuyerImages} = req.body;

        if(!BuyerImages) return res.status(400).json({ msg: "Plz Uplaod a Proffessional Image" });

         const newClient = new Clients({
            BuyId,BuyName,BuyerMobile,BuyerLocation,BuyerBudget,BuyerBhk,BuyerImages,user:req.user.id
         });

         await newClient.save();
         res.json({ msg: "add a new client" });

      } 
      
      catch (error) {
         return res.status(500).json({msg:error.message});
      }
   },
   getClients: async (req,res) =>{
     try {
      const features = new APIfeature(Clients.find({user:req.user.id}),req.query).
      pagination();
      const clients = await features.query;
      res.json({
         status:"success",
         result:clients.length,
         clients:clients
      })
      
     } 
     
     catch (error) {
         return res.status(500).json({msg:error.message});
     }
   },
   deleteClients: async (req,res) =>{
      try {
          const client = await Clients.findById
      } 
      
      catch (error) {
         return res.status(500).json({msg:error.message});
      }
   }
}

module.exports = clientCtrl;