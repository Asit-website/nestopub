const categoryCtrl = require("../controller/categoryCtrl");
const router = require("express").Router();

router.get("/getCat",categoryCtrl.getCategories);
router.post("/createCate",categoryCtrl.createCategories);


module.exports = router;