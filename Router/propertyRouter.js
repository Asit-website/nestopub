const router = require("express").Router();
const propertyCtrl = require("../controller/propertyCtrl");

router.post('/registerProperty', propertyCtrl.createProperty);
router.get('/getProperty', propertyCtrl.getProperty);


module.exports = router;