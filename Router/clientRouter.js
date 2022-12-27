const router = require('express').Router();
const clientCtrl = require("../controller/clientCtrl");
const auth = require('../middleware/auth')
router.post('/addClient',auth,clientCtrl.addClient);
router.get('/getClient',auth,clientCtrl.getClients);

module.exports = router;