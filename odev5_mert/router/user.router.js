const router = require("express").Router()
const controller = require("../controller/user.controller")

router.post("/register",controller.register)
router.post("/login",controller.login)
router.post("/not-hesapla/:userId",controller.notHesapla)

module.exports = router