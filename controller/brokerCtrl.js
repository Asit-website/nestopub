const Brokers = require('../models/brokerModel');
const brokerCtrl = {
    getBroker:async (req,res)=>{
        try {
            const broker = await Brokers.find();
            res.json(broker);
        }

        catch (error) {
            return res.status(500).json({ msg: error.message })
        }
        
    },

    createBroker:async (req,res) =>{
        try {
            const { firstName,lastName, mobile, email, mobileOtp, mobileOtp2, mobileOtp3, mobileOtp4, emailOtp, emailOtp2, emailOtp3, emailOtp4, experience, builderList,registrationNumber, certificationCopy, address, state, pinCode, city, area,whatsapp,images,images1,images2,images3} = req.body;

            if(!images || !images1 || !images2 || !images3) return res.status(400).json({ msg: "no image is upload" });

            const emailUser = await Brokers.findOne({email:email});
            if (emailUser) return res.status(400).json({ msg: "This brokerEmail is already exist" });
    
            const newBroker = new Brokers({
                firstName,lastName, mobile, email, mobileOtp, mobileOtp2, mobileOtp3, mobileOtp4, emailOtp, emailOtp2, emailOtp3, emailOtp4, experience, builderList,registrationNumber, certificationCopy, address, state, pinCode, city, area,whatsapp,images,images1,images2,images3
            })
    
            await newBroker.save();
    
            res.json({ msg: "created a new Broker Successfully" });
        } 
        
        catch (error) {
            return res.status(500).json({ msg: error.message })
        }
       
    }
}

module.exports = brokerCtrl;