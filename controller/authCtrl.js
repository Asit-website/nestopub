const Users = require('../models/userModel');
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const fs = require("fs");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;

if (!fs.existsSync("./uploads")) {
   fs.mkdirSync("./uploads");
}

cloudinary.config({
   cloud_name: process.env.CLOUD_NAME,
   api_key: process.env.CLOUD_API_KEY,
   api_secret: process.env.CLOUD_API_SECRET
});

async function uploadToCloudinary(locaFilePath) {
   // console.log("hi");
   // console.log(locaFilePath);
   locaFilePath = locaFilePath.replace("\\", "/");
   // console.log(locaFilePath);
   var mainFolderName = "main";
   var filePathOnCloudinary =
      mainFolderName + "/" + locaFilePath;

   console.log(filePathOnCloudinary);

   return cloudinary.uploader
      .upload(locaFilePath, { public_id: filePathOnCloudinary })
      .then((result) => {

         fs.unlinkSync(locaFilePath);
         console.log(result);
         return {
            message: "Success",
            url: result.url,
         };
      })
      .catch((error) => {  
         console.log(error);
         fs.unlinkSync(locaFilePath);
         return { message: "Fail" };
      });
};

const authCtrl = {
   resgisterBroker: async (req, res) => {
      try {
         const { firmName, authorizedName, city, mobile, individualName, city1, mobile1, mobileOtp1, mobileOtp2, mobileOtp3, mobileOtp4, name, phone } = req.body

         //   if(!images){
         //    return res.status(400).json({msg:"plz upload a Professional Image"});
         //   }

         const { images } = req.files;

         var imageUrlList = [];

         for (var i = 0; i < images.length; i++) {
            console.log(images[i].path);
            var locaFilePath = images[i].path;

            var result = await uploadToCloudinary(locaFilePath);
            imageUrlList.push(result.url);
         }

         console.log(imageUrlList);

         const newBroker = new Users({
            firmName, authorizedName, city, mobile, individualName, city1, mobile1, mobileOtp1, mobileOtp2, mobileOtp3, mobileOtp4, name, phone, images: imageUrlList
         });

         const data = await newBroker.save();

         const accesstoken = createAccessToken({ id: newBroker._id });
         const refreshtoken = createRefreshToken({ id: newBroker._id });

         res.cookie("refreshtoken", refreshtoken, {
            httpOnly: true,
            path: '/api/refresh_token', // user ka token login krne pr milega
            maxAge: 7 * 24 * 60 * 60 * 1000 //7d
         })

         res.json({ msg: "Registeration Successfully", accesstoken, user: data });
      }

      catch (error) {
         return res.status(500).json({ msg: error.message })
      }
   },

   loginBroker: async (req, res) => {
      try {
         const { firmName, mobile } = req.body;
         const user = await Users.findOne({ firmName: firmName });
         const brokerMobile = await Users.findOne({ mobile: mobile });
         if (!user) {
            return res.status(400).json({ msg: "Broker Does Not Exist" });
         }
         if (!brokerMobile) {
            return res.status(400).json({ msg: "Brokers Mobile does not exist" });
         }
         const accesstoken = createAccessToken({ id: user._id });
         const refreshtoken = createRefreshToken({ id: user._id });

         // set the cookie 
         res.cookie("refreshtoken", refreshtoken, {
            httpOnly: true,
            path: '/api/refresh_token',
            maxAge: 7 * 24 * 60 * 60 * 1000 //7d
         })

         res.json({ msg: "You are Login as an Broking Firm", accesstoken, user });
      }

      catch (error) {
         return res.status(500).json({ msg: error.message })
      }

   },

   brokerIndividual: async (req, res) => {
      try {
         const { individualName, mobile1 } = req.body;
         const individual = await Users.findOne({ individualName: individualName });
         const individualMobile = await Users.findOne({ mobile1: mobile1 });
         if (!individual) {
            return res.status(400).json({ msg: "Broker Does Not Exist" });
         }
         if (!individualMobile) {
            return res.status(400).json({ msg: "Brokers Mobile does not exist" });
         }


         const accesstoken = createAccessToken({ id: individual._id });
         const refreshtoken = createRefreshToken({ id: individual._id });

         // set the cookie 
         res.cookie("refreshtoken", refreshtoken, {
            httpOnly: true,
            path: '/api/refresh_token',
            maxAge: 7 * 24 * 60 * 60 * 1000 //7d
         })

         res.json({ msg: "You are Login as an Individual Broker", accesstoken });
      }

      catch (error) {
         return res.status(500).json({ msg: error.message })
      }
   },

   adminLogin: async (req, res) => {
      try {
         const { name, phone } = req.body;

         const admin = await Users.findOne({ name: name });
         const mobile4 = await Users.findOne({ phone: phone });
         if (!admin) {
            return res.status(400).json({ msg: "you are not an admin" });
         }

         if (!mobile4) {
            return res.status(400).json({ msg: "you are not an admin" });
         }

         const accesstoken = createAccessToken({ id: admin._id });
         const refreshtoken = createRefreshToken({ id: admin._id });

         // set the cookie 
         res.cookie("refreshtoken", refreshtoken, {
            httpOnly: true,
            path: '/api/refresh_token',
            maxAge: 7 * 24 * 60 * 60 * 1000 //7d
         })

         res.json({ msg: "You are Login as an Admin", accesstoken });
      }

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

   getUser: async (req, res) => {
      try {
         // user ko apan lenge uske id se _id
         const user = await Users.findById(req.user.id);
         // console.log(user)
         if (!user) return res.status(400).json({ msg: "user does not exist" })
         res.json(user);
      }

      catch (error) {
         return res.status(500).json({ msg: error.message })
      }
   },

   saved: async (req, res) => {
      try {
         const user = await Users.findById(req.user.id);
         if (!user) return res.status(400).json({ msg: "Users does Not exist." });

         await Users.findOneAndUpdate({ _id: req.user.id }, {
            cart: req.body.cart,
         })

         return res.json({ msg: "Added to cart" })
      }

      catch (error) {
         return res.status(500).json({ msg: error.message });
      }
   }
}

const createAccessToken = (user) => {
   return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '11m' })
}

const createRefreshToken = (user) => {
   return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' })
}

module.exports = authCtrl;