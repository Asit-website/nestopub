const router = require('express').Router();
const brokerCtrl = require('../controller/brokerCtrl');
const auth = require('../middleware/auth');


router.patch('/editBroker/:id',auth, brokerCtrl.editBroker);
router.delete('/deleteBroker/:id',auth, brokerCtrl.deleteBroker);
module.exports = router;