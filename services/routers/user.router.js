const router = require("express").Router();
const controller = require("../controllers/user.controller");

router.post("/register", controller.register);
router.post("/login", controller.login);
router.put("/updateUser/:userId", controller.updateUser);
router.delete("/deleteUser/:userId", controller.deleteUser);
router.get("/getAllUsers", controller.getAllUsers);

module.exports = {
  user: router,
};
