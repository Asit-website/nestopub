const Contacts = require('../models/ContactModel');

const contactCtrl = {
  contactUser: async (req,res) =>{
      try {
         const {name1,email1,message1} = req.body;
         if(!name1 || !email1 || !message1)
         return res.status(400).json({msg:"plz fill all the required field"});

         if(message1.length<5)
         return res.status(400).json({msg:"message must be greater than 5 character"});

         const contactNew = new Contacts({
            name1,email1,message1
         });

         contactNew.save();
         res.json({ msg: "we will get back you soon"});
      } 
      
      catch (error) {
          return res.status(500).json({msg:error.message});
      }
  },

  getContact: async (req,res) =>{
    try {
       const contact = await Contacts.find();
       res.json({msg:"good"});
    } 
    
    catch (error) {
       return res.status(500).json({msg:error.message});
    }
  }
}

module.exports = contactCtrl;