const router = require("express").Router();
const controller = require("../controllers/user.controller");
const userValidator = require("../validations/index");

router.post(
  "/register",
  [userValidator.userValidator.validateRegister()],
  controller.register
);
router.post(
  "/login",
  [userValidator.userValidator.validateLogin()],
  controller.login
);
router.put(
  "/updateUser/:userId",
  [userValidator.userValidator.validateUpdateUser()],
  controller.updateUser
);
router.delete(
  "/deleteUser/:userId",
  [userValidator.userValidator.validateDeleteUser()],
  controller.deleteUser
);
router.get("/getAllUsers", controller.getAllUsers);

module.exports = {
  user: router,
};
