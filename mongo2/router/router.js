const router = require("express").Router();
const controller = require("../controller/controller");

router.post("/createUser", controller.createUser);
router.get("/getAllUsers", controller.getAllUsers);
router.get("/getUsersByName/:name", controller.getUsersByName)
router.get("/getUsersByNameAndSurname/:name/:surname", controller.getUsersByNameAndSurname)

module.exports = router;
