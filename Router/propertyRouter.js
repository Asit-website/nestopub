const router = require("express").Router();
const propertyCtrl = require("../controller/propertyCtrl");
const auth = require("../middleware/auth");
const Property = require("../models/propertyModel");

const fs = require("fs");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;

if (!fs.existsSync("./uploads")) {
    fs.mkdirSync("./uploads");
}

// Multer setup
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname+new Date().getTime());
    },
});

// const upload = multer({ storage }).single('image');
const multiUpload = multer({ storage }).fields([
    {
        name: 'images',
        maxCount: 10
    }
]);

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

async function uploadToCloudinary(locaFilePath) {
    var mainFolderName = "main";
    var filePathOnCloudinary =
        mainFolderName + "/" + locaFilePath;

    return cloudinary.uploader
        .upload(locaFilePath, { public_id: filePathOnCloudinary })
        .then((result) => {

            fs.unlinkSync(locaFilePath);

            return {
                message: "Success",
                url: result.url,
            };
        })
        .catch((error) => {

            fs.unlinkSync(locaFilePath);
            return { message: "Fail" };
        });
};

/* router.post(
    "/profile-upload-single",
    upload.single("profile-file"),
    async (req, res, next) => {

        // req.file is the `profile-file` file
        // req.body will hold the text fields,
        // if there were any

        // req.file.path will have path of image
        // stored in uploads folder
        var locaFilePath = req.file.path;

        // Upload the local image to Cloudinary 
        // and get image url as response
        var result = await uploadToCloudinary(locaFilePath);

        // Generate html to display images on web page.
        var response = buildSuccessMsg([result.url]);

        return res.send(response);
    }
); */

/* router.post(
    "/profile-upload-multiple",
    upload.array("profile-files", 12),
    async (req, res, next) => {

        // req.files is array of `profile-files` files
        // req.body will contain the text fields,
        // if there were any
        var imageUrlList = [];

        for (var i = 0; i < req.files.length; i++) {
            var locaFilePath = req.files[i].path;

            // Upload the local image to Cloudinary
            // and get image url as response
            var result = await uploadToCloudinary(locaFilePath);
            imageUrlList.push(result.url);
        }

        var response = buildSuccessMsg(imageUrlList);

        return res.send(response);
    }
); */

// router.post('/registerProperty', upload.array("images", 12), propertyCtrl.createProperty);
// router.post('/registerProperty', upload.array("images", 12), async (req, res) => {
router.post('/registerProperty', multiUpload, auth, async (req, res) => {
    try {
        console.log('try');
        const { propertyContent, propertyPrice, category, location, propertyArea, parking, bedroom, Guest, bathRoom, propertyDescription } = req.body;

        const { images } = req.files;

        var imageUrlList = [];

        for (var i = 0; i < images.length; i++) {
            console.log(images[i].path);
            var locaFilePath = images[i].path;

            var result = await uploadToCloudinary(locaFilePath);
            imageUrlList.push(result.url);
        }

        console.log(imageUrlList);

        const newProperty = new Property({
          propertyContent, propertyPrice, category, location, propertyArea, parking, images: imageUrlList, bedroom, Guest, bathRoom, propertyDescription, user: JSON.stringify(req.user)
        });

        const saveProp=await newProperty.save();
        res.json({ msg: "Created a new Property", data: saveProp });
    }

    catch (error) {
        console.log('yes');
        return res.status(500).json({ msg: error.message });
    }
});
router.get('/getProperty', propertyCtrl.getProperty);
router.delete('/deleteProperty/:id', propertyCtrl.deleteProperty);
router.delete('/deleteProperty', propertyCtrl.deletePropertyAll);
router.patch('/editProperty/:id', propertyCtrl.editProperty);


module.exports = router;