const router = require("express").Router();
const contactCtrl = require("../controller/contactCtrl");
router.post('/contacts', contactCtrl.contactUser);

module.exports = router;