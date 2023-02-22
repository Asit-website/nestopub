const router = require("express").Router();
const builderCtrl = require("../controller/builderCtrl");

router.get('/getBuilder',builderCtrl.getBuilder);
router.delete('/deleteBuilder/:id',builderCtrl.deleteBuilder);
router.patch('/editBuilder/:id',builderCtrl.editBuilder);

module.exports = router;