const router = require("express").Router();
const propertyCtrl = require("../controller/propertyCtrl");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");
const authBuilder = require("../middleware/authBuilder");
const Property = require("../models/propertyModel");
const { multiUpload, uploadToCloudinary } = require("../utils/uploadUtil");

router.post('/registerProperty', multiUpload,auth,authAdmin,authBuilder,propertyCtrl.createProperty);
router.get('/getProperty', propertyCtrl.getProperty);
router.get('/getProperty/:id', propertyCtrl.getPropertyId);
router.delete('/deleteProperty/:id', auth, authAdmin, propertyCtrl.deleteProperty);
router.delete('/deleteProperty',auth,authAdmin, propertyCtrl.deletePropertyAll);
router.patch('/editProperty/:id', auth,authAdmin,multiUpload,authBuilder, propertyCtrl.editProperty);


module.exports = router;
