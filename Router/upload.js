const router = require('express').Router()
const cloudinary = require("cloudinary").v2;
const fs = require('fs');
const multer = require("multer");
// const fileUpload = require('express-fileupload');
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

// Multer setup
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname+new Date().getTime());
    },
});

const upload = multer({ storage }).single('file');

async function uploadToCloudinary(locaFilePath) {
    var mainFolderName = "main";
    var filePathOnCloudinary =
        mainFolderName + "/" + locaFilePath;

    return cloudinary.uploader
        .upload(locaFilePath, { public_id: filePathOnCloudinary })
        .then((result) => {

            // console.log(result);
            fs.unlinkSync(locaFilePath);

            return {
                message: "Success",
                url: result.url,
                public_id: result.public_id
            };
        })
        .catch((error) => {

            fs.unlinkSync(locaFilePath);
            return { message: "Fail" };
        });
};

router.post('/upload', upload, async(req, res) =>{
    try {
        
        // if(!req.files || Object.keys(req.files).length === 0)

        //    return res.status(400).json({msg: 'No files were uploaded.'});
         
        // const file = req.files.file;
        // if(file.size > 1024*1024) {
        //     removeTmp(file.tempFilePath)
        //     return res.status(400).json({msg:"Size too large"})
        // }

        // if(file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png'){
        //     removeTmp(file.tempFilePath)
        //     return res.status(400).json({msg: "File format is incorrect."})
        // }
/* 
        cloudinary.v2.uploader.upload(file.tempFilePath, {folder: "test"}, async(err, result)=>{
            if(err) throw err;
            removeTmp(file.tempFilePath);

            res.json({public_id: result.public_id, url: result.secure_url});
        }) */

        // console.log(req.file);
        var locaFilePath = req.file.path;
        var result = await uploadToCloudinary(locaFilePath);
        // console.log(result);

        res.json({url: result.url, public_id: result.public_id});
    } 
    
    catch (err) {
        return res.status(500).json({msg: err.message})
    }
});

router.post('/destroy', (req, res) =>{
    try {
        const {public_id} = req.body;
        if(!public_id) return res.status(400).json({msg: 'No images Selected'})

        cloudinary.uploader.destroy(public_id, async(err, result) =>{
            if(err) throw err;

            res.json({msg: "Deleted Image"});
        })

    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
    
});


const removeTmp = (path) =>{
    fs.unlink(path, err=>{
        if(err) throw err;
    })
};

module.exports = router;