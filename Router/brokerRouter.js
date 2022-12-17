const router = require('express').Router();
const brokerCtrl = require('../controller/brokerCtrl');
const auth = require('../middleware/auth');
const authAdmin = require("../middleware/authAdmin");

router.patch('/editBroker/:id', brokerCtrl.editBroker);
router.delete('/deleteBroker/:id' ,brokerCtrl.deleteBroker);
router.get('/getBrok',brokerCtrl.getBroker);
module.exports = router;