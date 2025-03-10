const router = require("express").Router();
const controller = require("../controller/controller");

router.post("/createUser", controller.createUser);
router.get("/getAllUsers", controller.getAllUsers);
<<<<<<< HEAD
router.get("/getuserByName/:name",controller.getUserByName)
//router.get("/getuserByNameAndSurname/:name/:surname",controller.getUserByName)
=======
router.get("/getUsersByName/:name", controller.getUsersByName)
router.get("/getUsersByNameAndSurname/:name/:surname", controller.getUsersByNameAndSurname)

>>>>>>> 85d947e728a09e885b0882661940307917787dda
module.exports = router;
