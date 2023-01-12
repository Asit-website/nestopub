const router = require('express').Router();
const authCtrl = require('../controller/authCtrl');
const auth = require("../middleware/auth");
// const authBroker = require('../middleware/authBroker');
const authAdmin = require("../middleware/authAdmin");

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
        cb(null, file.originalname + new Date().getTime());
    },
});

// const upload = multer({ storage }).single('image');
const multiUpload = multer({ storage }).fields([
    {
        name: 'images',
        maxCount: 10
    }
])

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

router.post('/registerBroker', multiUpload, authCtrl.resgisterBroker);
router.post('/loginBroker', authCtrl.loginBroker);
router.post('/loginAdmin', authCtrl.adminLogin);
router.post('/individual', authCtrl.brokerIndividual);
router.get('/logout', authCtrl.logout);
router.get('/refresh_token', authCtrl.refreshToken);
router.get('/infor', auth, authCtrl.getUser);

module.exports = router;