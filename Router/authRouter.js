const router = require('express').Router();
const authCtrl = require('../controller/authCtrl');
const auth = require("../middleware/auth");
// const authBroker = require('../middleware/authBroker');
const authAdmin = require("../middleware/authAdmin");
const { multiUpload } = require('../utils/uploadUtil');

router.post('/registerBroker', multiUpload, authCtrl.resgisterBroker);
router.post('/loginBroker', authCtrl.loginBroker);
router.post('/loginAdmin', authCtrl.adminLogin);
router.post('/individual', authCtrl.brokerIndividual);
router.get('/logout', authCtrl.logout);
router.get('/refresh_token', authCtrl.refreshToken);
router.get('/infor', auth, authCtrl.getUser);
router.post("/registerBuilder", authCtrl.builderRegister);
router.post("/loginBuilder", authCtrl.builderLogin);

module.exports = router;