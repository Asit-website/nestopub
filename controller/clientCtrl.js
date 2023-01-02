const Clients = require("../models/ClientModel");
const Users = require("../models/userModel");
class APIfeature {
   constructor(query, queryString) {
      this.query = query;
      this.queryString = queryString;
   }
   filtering() {
      const queryObj = { ...this.queryString }
      const excludedFields = ['page', 'sort', 'limit'];
      excludedFields.forEach(e1 => delete (queryObj[e1]));
      let queryStr = JSON.stringify(queryObj);
      queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match);
      this.query.find(JSON.parse(queryStr))
      return this;
   }
   pagination() {
      const page = this.queryString.page * 1 || 1;
      const limit = this.queryString.limit * 1 || 5;
      const skip = (page - 1) * limit;
      this.query = this.query.skip(skip).limit(limit);
      return this;
   }
}
const clientCtrl = {
   addClient: async (req, res) => {
      try {
         const { BuyId, BuyName, BuyerMobile, BuyerLocation, BuyerBudget, BuyerBhk, BuyerImages } = req.body;

         if (!BuyerImages) return res.status(400).json({ msg: "Plz Uplaod a Proffessional Image" });

         const mobilebuy = await Clients.findOne({ BuyerMobile: BuyerMobile });
         if (mobilebuy) return res.status(400).json({ msg: "a client added with a same phone Number" });

         const newClient = new Clients({
            BuyId, BuyName, BuyerMobile, BuyerLocation, BuyerBudget, BuyerBhk, BuyerImages, user: req.user.id
         });

         await newClient.save();
         res.json({ msg: "add a new client" });

      }

      catch (error) {
         return res.status(500).json({ msg: error.message });
      }
   },
   getClients: async (req, res) => {
      try {
         const features = new APIfeature(Clients.find({ user: req.user.id }), req.query).
            pagination();
         const clients = await features.query;
         res.json({
            status: "success",
            result: clients.length,
            clients: clients
         })

      }

      catch (error) {
         return res.status(500).json({ msg: error.message });
      }
   },
   deleteClients: async (req, res) => {
      try {
         let client = await Clients.findById(req.params.id);
         if (!client) return res.status(400).json({ msg: "not allowed" });

         if (client.user.toString() !== req.user.id) {
            return res.status(400).json({ msg: "not allowed" })
         };

      const client2 =   await Clients.findByIdAndDelete(req.params.id);
         res.json({ msg: "deleted Successfully", result:client2.length});
      }

      catch (error) {
         return res.status(500).json({ msg: error.message });
      }
   },

   clientEdit: async (req, res) => {
      try {
         const { BuyId, BuyName, BuyerMobile, BuyerLocation, BuyerBudget, BuyerBhk, BuyerImages } = req.body;

         // if(!BuyerImages) return res.status(400).json({ msg: "Plz Uplaod a Proffessional Image"});
         let updateObj = { BuyId, BuyName, BuyerMobile, BuyerLocation, BuyerBudget, BuyerBhk };

         if (BuyerImages) {
            updateObj.BuyerImages = BuyerImages;
         }

         let client = await Clients.findById(req.params.id);
         if (!client) return res.status(400).json({ msg: "not allowed" });

         if (client.user.toString() !== req.user.id)
            return res.status(400).json({ msg: "not allowed" });

         // await Clients.findOneAndUpdate({ _id: req.params.id }, {
         //    BuyId,BuyName,BuyerMobile,BuyerLocation,BuyerBudget,BuyerBhk,BuyerImages
         //  })
         const data =await Clients.findOneAndUpdate({ _id: req.params.id }, updateObj);
         res.json({
            status:true,
            data,
            message: "Client updated successfully"
         });
      }

      catch (error) {
         return res.status(500).json({ msg: error.message });
      }
   },

   serachClient: async (req, res) => {
      try {
         const client1 = await Clients.find({ BuyName: { $regex: req.query.BuyName } }).
            limit(5).select("BuyName BuyerMobile BuyerLocation BuyerImages").where({user:req.user.id});
            res.json({ client1 });
      }

      catch (error) {
         return res.status(500).json({ msg: error.message });
      }
   }
}

module.exports = clientCtrl;