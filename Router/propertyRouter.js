const router = require("express").Router();
const propertyCtrl = require("../controller/propertyCtrl");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");
router.post('/registerProperty', propertyCtrl.createProperty);
router.get('/getProperty', propertyCtrl.getProperty);
router.delete('/deleteProperty/:id',propertyCtrl.deleteProperty);
router.patch('/editProperty/:id',propertyCtrl.editProperty);


module.exports = router;