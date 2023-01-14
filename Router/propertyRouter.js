const router = require("express").Router();
const propertyCtrl = require("../controller/propertyCtrl");
const auth = require("../middleware/auth");
const Property = require("../models/propertyModel");
const { multiUpload, uploadToCloudinary } = require("../utils/uploadUtil");

// router.post('/registerProperty', multiUpload, auth, async (req, res) => {
//     try {
//         const { propertyContent, propertyPrice, category, location, propertyArea, parking, bedroom, Guest, bathRoom, propertyDescription } = req.body;

//         const { images } = req.files;

//         var imageUrlList = [];

//         for (var i = 0; i < images.length; i++) {
//             // console.log(images[i].path);
//             var locaFilePath = images[i].path;

//             var result = await uploadToCloudinary(locaFilePath);
//             imageUrlList.push(result.url);
//         }

//         // console.log(imageUrlList);

//         const newProperty = new Property({
//           propertyContent, propertyPrice, category, location, propertyArea, parking, images: imageUrlList, bedroom, Guest, bathRoom, propertyDescription, user: JSON.stringify(req.user)
//         });

//         const saveProp=await newProperty.save();
//         res.json({ msg: "Created a new Property", data: saveProp });
//     }
//     catch (error) {
//         return res.status(500).json({ msg: error.message });
//     }
// });

router.post('/registerProperty', multiUpload, auth, propertyCtrl.createProperty);
router.get('/getProperty', propertyCtrl.getProperty);
router.delete('/deleteProperty/:id', propertyCtrl.deleteProperty);
router.delete('/deleteProperty', propertyCtrl.deletePropertyAll);
router.patch('/editProperty/:id', propertyCtrl.editProperty);


module.exports = router;
