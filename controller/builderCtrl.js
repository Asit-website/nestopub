const Builders = require("../models/BuilderModel");
const Users = require("../models/userModel");
const jwt = require("jsonwebtoken");

const builderCtrl = {
    builderRegister: async (req,res) =>{
       
            try {
                const {builderName,builderPhone,builderEmail} = req.body;
     
                const newBuilder = new Builders({
                   builderName,builderPhone,builderEmail
                })
     
                const data = await newBuilder.save();
     
                const accesstoken = createAccessToken({ id: data._id });
                const refreshtoken = createRefreshToken({ id: data._id });
     
                res.cookie("refreshtoken", refreshtoken, {
                 httpOnly: true,
                 path: '/api/refresh_token', // user ka token login krne pr milega
                 maxAge: 7 * 24 * 60 * 60 * 1000 //7d
              });
     
              res.json({ msg: "Registeration Successfully", accesstoken, user: data });
     
            } 
            
            catch (error) {
               return res.status(500).json({msg:error.message});
            }
        
       
    },

    refreshToken: (req, res) => {
        try {
           const rf_token = req.cookies.refreshtoken;
  
           if (!rf_token) {
              return res.status(400).json({ msg: "Please Login aur Register" });
           }
  
           // verify the token of user
           jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
              if (err) { return res.status(400).json({ msg: "Please Login aur Register" }) }
              const accesstoken = createAccessToken({ id: user.id })
              res.json({ accesstoken });
           })
  
        }
        // accesstokrn ko bhejna hi hoga res.json mai yr 
        catch (error) {
           return res.status(500).json({ msg: error.message })
        }
     },

     logout: async (req, res) => {
        try {
           res.clearCookie("refreshtoken", { path: '/api/refresh_token' })
           return res.json({ msg: "logout success" });
        }
  
        catch (error) {
           return res.status(500).json({ msg: error.message });
        }
     },

     getBuilder: async (req,res) =>{
        try {
            // user ko apan lenge uske id se _id
            const user = await Builders.findById(req.Builder.id);

            // console.log(user)
            if (!user) return res.status(400).json({ msg: "user does not exist" })
            res.json(user);
         }
         catch (error) {
            return res.status(500).json({ msg: error.message })
         }
     }
}



const createAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '11m' })
 };
 
 const createRefreshToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' })
 };

module.exports = builderCtrl;