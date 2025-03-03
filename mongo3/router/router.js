const router = require("express").Router();
const controller = require("../controller/controller");

router.post("/createUser", controller.createUser);

module.exports = router;
