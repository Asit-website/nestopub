const Users = require('../models/userModel');
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authCtrl = {
   resgisterBroker: async(req,res)=>{
      try {
        const {firmName,authorizedName,city,mobile,individualName,city1, mobile1, mobileOtp1, mobileOtp2, mobileOtp3, mobileOtp4} = req.body      

      //   const firmUser = await Users.findOne({firmName:firmName});
      //   if(firmUser){
      //    res.status(400).json({msg:"This FirmName is Already Exists"});
      //   }  
        const newBroker = new Users({
         firmName,authorizedName,city,mobile,individualName,city1, mobile1,mobileOtp1, mobileOtp2, mobileOtp3, mobileOtp4
        })

        await newBroker.save();

        const accesstoken =  createAccessToken({id:newBroker._id});
        const refreshtoken = createRefreshToken({id:newBroker._id});

        res.cookie("refreshtoken",refreshtoken,{
         httpOnly:true,
         path:'/api/refresh_token', // user ka token login krne pr milega
         maxAge:7*24*60*60*1000 //7d
     })

         res.json({msg:"Registeration Successfully", accesstoken});
      } 
      
      catch (error) {
        return res.status(500).json({msg:error.message})
      }
   },

   loginBroker: async(req,res) =>{
      try {
         const {firmName,mobile} = req.body;
         const user = await Users.findOne({firmName:firmName});
         const brokerMobile = await Users.findOne({mobile:mobile});

         if(!user)
         {
           return res.status(400).json({msg:"Broker Does Not Exist"});
         }
         if(!brokerMobile){
            return res.status(400).json({msg:"Brokers Mobile does not exist"});
         }

         // if(!brokerMobile){
         //    return res.status(400).json({msg:"mobile Number Does Not Exist"});
         // }

         const accesstoken =  createAccessToken({id:user._id});
         const refreshtoken = createRefreshToken({id:user._id});
   
         // set the cookie 
         res.cookie("refreshtoken",refreshtoken,{
             httpOnly:true,
             path:'/api/refresh_token',
             maxAge:7*24*60*60*1000 //7d
         })
   
         res.json({msg:"login",accesstoken}); 
      } 
      
      catch (error) {
         return res.status(500).json({msg:error.message})
      }
      
   },

   brokerIndividual: async (req,res) =>{
      try {
         const {individualName,mobile1} = req.body;
         const individual = await Users.findOne({individualName:individualName});
         const individualMobile = await Users.findOne({mobile1:mobile1});

         if(!individual)
         {
           return res.status(400).json({msg:"Broker Does Not Exist"});
         }
         if(!individualMobile){
            return res.status(400).json({msg:"Brokers Mobile does not exist"});
         }


         const accesstoken =  createAccessToken({id:individual._id});
         const refreshtoken = createRefreshToken({id:individual._id});
   
         // set the cookie 
         res.cookie("refreshtoken",refreshtoken,{
             httpOnly:true,
             path:'/api/refresh_token',
             maxAge:7*24*60*60*1000 //7d
         })
   
         res.json({msg:"login",accesstoken}); 
      } 
      
      catch (error) {
         return res.status(500).json({msg:error.message})
      }
   },


   logout:async (req,res)=>{
      try {
         res.clearCookie("refreshtoken",{path:'/api/refresh_token'}) 
         return res.json({msg:"logout success"});
      } 
      
      catch (error) {
        return res.status(500).json({msg:error.message});
      }
    },

    refreshToken: (req,res)=>{
      try {
          const rf_token =  req.cookies.refreshtoken;
  
          if(!rf_token){
              return res.status(400).json({msg:"Please Login aur Register"});
          }
  
          // verify the token of user
          jwt.verify(rf_token,process.env.REFRESH_TOKEN_SECRET,(err,user)=>{
              if(err) {return res.status(400).json({msg:"Please Login aur Register"})}
              const accesstoken = createAccessToken({id:user.id}) 
              res.json({accesstoken});
          })
          
      } 
      // accesstokrn ko bhejna hi hoga res.json mai yr 
      catch (error) {
         return res.status(500).json({msg:error.message})
      }
      
  
   },

   getUser:async (req,res)=>{
      try {
          // user ko apan lenge uske id se
          const user = await Users.findById(req.user.id).select('-password')
         // console.log(user)
          if(!user) return res.status(400).json({msg:"user does not exist"})
          res.json(user);
      } 
      
      catch (error) {
         return res.status(500).json({msg:error.message}) 
      }
  },
   
}

const createAccessToken = (user) =>{
   return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'11m'})
}

const createRefreshToken = (user) =>{
   return jwt.sign(user,process.env.REFRESH_TOKEN_SECRET,{expiresIn:'7d'})
}

module.exports = authCtrl;