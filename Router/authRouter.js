const router = require('express').Router();
const authCtrl = require('../controller/authCtrl');
const auth = require("../middleware/auth")

router.post('/registerBroker',authCtrl.resgisterBroker);
router.post('/loginBroker', authCtrl.loginBroker);
router.get('/logout',authCtrl.logout);
router.get('/refresh_token',authCtrl.refreshToken);
router.get('/infor',auth,authCtrl.getUser);

module.exports = router;