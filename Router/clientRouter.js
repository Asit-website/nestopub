const router = require('express').Router();
const clientCtrl = require("../controller/clientCtrl");
const auth = require('../middleware/auth')
router.post('/addClient',auth,clientCtrl.addClient);
router.get('/getClient',auth,clientCtrl.getClients);
router.delete('/deleteClient/:id', auth, clientCtrl.deleteClients);
router.patch('/editClient/:id',auth, clientCtrl.clientEdit);
router.get('/search',auth,clientCtrl.serachClient);

module.exports = router;