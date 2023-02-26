const adminCtrl = require("../controller/adminCtrl");
const router = require("express").Router();
router.patch("/adminEdit/:id",adminCtrl.editAdmin);
router.delete("/adminDelete/:id",adminCtrl.deleteAdmin);

module.exports = router;