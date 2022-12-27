const Clients = require("../models/ClientModel");
const Users = require("../models/userModel")
const clientCtrl = {
   addClient: async (req,res) =>{
      try {
         const {BuyId,BuyName,BuyerMobile,BuyerLocation,BuyerBudget,BuyerBhk,BuyerImages} = req.body;

        // if(!BuyerImages) return res.status(400).json({ msg: "no image is upload" });

        //  const Client = await Clients.findOne({BuyId:BuyId});

        //  if(Client)  
        //  return res.status(400).json({ msg: "This Client is already exist" });
         const newClient = new Clients({
            BuyId,BuyName,BuyerMobile,BuyerLocation,BuyerBudget,BuyerBhk,BuyerImages,user:req.user.id
         });

         await newClient.save();
         res.json({ msg: "add a new client" })

      } 
      
      catch (error) {
         return res.status(500).json({msg:error.message})
      }
   },
   getClients: async (req,res) =>{
     try {
        const clients = await Clients.find({user:req.user.id});
        res.json(clients);
     } 
     
     catch (error) {
         return res.status(500).json({msg:error.message});
     }
   }
}

module.exports = clientCtrl;