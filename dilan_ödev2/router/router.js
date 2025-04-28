const router = require("express").Router();
const controller = require("../controller/controller");

router.post("/createUser", controller.createUser);
router.get("/getAllUsers", controller.getAllUsers);

router.get("/getuserByName/:name",controller.getUserByName)
router.get("/getuserByNameAndSurname/:name/:surname",controller.getUserByName)

router.get("/getUsersByName/:name", controller.getUsersByName)
router.get("/getUsersByNameAndSurname/:name/:surname", controller.getUsersByNameAndSurname)

module.exports = router;
