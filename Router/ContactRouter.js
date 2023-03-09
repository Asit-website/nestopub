const router = require("express").Router();
const contactCtrl = require("../controller/contactCtrl");
router.post('/contacts', contactCtrl.contactUser);
router.get('/geton',contactCtrl.getContact);

module.exports = router;