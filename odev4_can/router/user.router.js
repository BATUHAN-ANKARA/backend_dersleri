const router = require("express").Router();
const controller = require("../controller/user.controller");

router.post("/register",controller.register);

router.post("/login",controller.login);

router.get("/getAllUsers",controller.getAllUsers);

router.put("/updateUser/:userId",controller.updateUser);

router.put("/updatePassword/:userId",controller.updatePassword);

router.get("/getUserById/:userId",controller.getUserById);

router.delete("/deleteUser/:userId",controller.deleteUser);

router.get("/getUsersByName/:name",controller.getUsersByName)

router.get("/getUsersBySurname/:surname",controller.getUsersBySurname)



module.exports = router;