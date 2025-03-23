const router = require("express").Router();
const controller = require("../controller/user.controller");

router.post("/register", controller.register);
router.post("/not-hesapla",controller.notHesapla)

router.post("/burc-hesapla/:userId",controller.burcHesapla)

module.exports = router;
