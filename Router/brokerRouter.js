const router = require('express').Router();
const brokerCtrl = require('../controller/brokerCtrl');
const auth = require('../middleware/auth');
const authAdmin = require("../middleware/authAdmin");
// const {getScheduledClients}=require('../controller/brokerCtrl');

router.patch('/editBroker/:id', brokerCtrl.editBroker);
router.delete('/deleteBroker/:id' ,brokerCtrl.deleteBroker);
router.get('/getBrok',brokerCtrl.getBroker);
router.get('/getScheduledClients', auth, brokerCtrl.getScheduledClients);
router.post('/postScheduledClients', auth, brokerCtrl.postScheduledClients);
router.delete('/deleteSchedule/:id', auth, brokerCtrl.deleteSchedule);
router.patch('/editSchedule/:id', auth, brokerCtrl.editSchedule);

module.exports = router;
