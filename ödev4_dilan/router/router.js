const router = require("express").Router();
const controller = require("../controller/user.controller");

router.post("/register", controller.register);

router.post("/login", controller.login);

router.put("/updateUser/:userId", controller.updateUser);

router.put("/updatePassword/:userId", controller.updatePassword);

router.delete("/deleteUser/:userId", controller.deleteUser);

router.get("/getUserById/:userId", controller.getUserById);

router.get("/getAllUsers", controller.getAllUsers);

router.get("/getUsersByName/:name", controller.getUsersByName);

router.get("/getUsersBySurname/:surname", controller.getUsersBySurname);

module.exports = router;
