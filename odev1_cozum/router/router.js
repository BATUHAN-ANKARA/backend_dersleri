const router = require("express").Router();
const controller = require("../controller/controller");

router.post("/matematik/hesapla", controller.calculate);
router.get("/matematik/hesapla", controller.infoCalculate);
router.post("/matematik/faktoriyel", controller.faktoriyel);
router.get("/matematik/faktoriyel", controller.infoFaktoriyel);

module.exports = router;
