const router = require("express").Router();
const auth = require("../middleware/auth")
const builderCtrl = require("../controller/builderCtrl");

router.post("/registerBuilder", builderCtrl.builderRegister);
router.get("/inBuilder", auth, builderCtrl.getBuilder);
router.get('/logouts', builderCtrl.logout);

module.exports = router;

