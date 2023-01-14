const fs = require("fs");
const multer = require("multer");

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

const upload = multer({ storage }).single('image');

const multiUpload = multer({ storage }).fields([
    {
        name: 'images',
        maxCount: 10
    }
]);

const uploadToCloudinary = async (locaFilePath) => {
    var mainFolderName = "main";
    var filePathOnCloudinary =
        mainFolderName + "/" + locaFilePath;

    // console.log(filePathOnCloudinary);

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
            //   console.log(error);
            fs.unlinkSync(locaFilePath);
            return { message: "Fail" };
        });
};