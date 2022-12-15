const router = require('express').Router();
const authCtrl = require('../controller/authCtrl');
const auth = require("../middleware/auth");
// const authBroker = require('../middleware/authBroker');
// const authAdmin = require("../middleware/authAdmin");

router.post('/registerBroker',authCtrl.resgisterBroker);
router.post('/loginBroker',authCtrl.loginBroker);
router.post('/loginAdmin',authCtrl.adminLogin);
router.post('/individual',authCtrl.brokerIndividual);
router.get('/logout',authCtrl.logout);
router.get('/refresh_token',authCtrl.refreshToken);
router.get('/infor',auth,authCtrl.getUser);

module.exports = router;