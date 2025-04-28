const controller = require("../controllers/index");
const router = require("express").Router();
const validation = require("../validations/index");

router.post(
  "/createAdmin",
  [validation.adminValidator.validateCreate()],
  controller.admin.createAdmin
);
router.post(
  "/loginAdmin",
  [validation.adminValidator.validateLogin()],
  controller.admin.loginAdmin
);
router.put(
  "/changePassword/:id",
  [validation.adminValidator.validateChangePassword()],
  controller.admin.changePassword
);
router.put("/updateStatus/:status", controller.admin.updateStatus);
router.get("/getAllAdmins", controller.admin.getAllAdmins);
router.get(
  "/getAdminById/:id",
  [validation.adminValidator.validateGetById()],
  controller.admin.getAdminById
);
router.get("/getAdminsByName/:name", controller.admin.getAdminsByName);
router.get("/getAdminsByStatus/:status", controller.admin.getAdminsByStatus);
router.delete(
  "/deleteAdminById/:id",
  [validation.adminValidator.validateDeleteById()],
  controller.admin.deleteAdminById
);

module.exports = {
  admin: router,
};
