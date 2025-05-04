const controller = require("../controllers/index");
const router = require("express").Router();
const validation = require("../validations/index");

router.post(
  "/register",
  [validation.userValidation.validateRegister()],
  controller.user.register
);

router.post(
  "/login",
  [validation.userValidation.validateLogin()],
  controller.user.login
);

router.put(
  "/updateUser/:userId",
  [validation.userValidation.validateUpdateUser()],
  controller.user.updateUser
);

router.delete(
  "/deleteUser/:userId",
  [validation.userValidation.validateDeleteUser()],
  controller.user.deleteUser
);

router.get("/getAllUsers", controller.user.getAllUsers);

router.put(
  "/changePassword/:id",
  [validation.userValidation.validateChangePassword()],
  controller.user.changePassword
);

module.exports = {
    user: router,
  };