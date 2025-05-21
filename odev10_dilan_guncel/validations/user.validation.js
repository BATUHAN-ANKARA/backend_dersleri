const { body, param } = require("express-validator");
const userValidator = {
  validateCreate() {
    body("email").notEmpty().isLength({ min: 3, maks: 20 });
    body("name").notEmpty().isLength({ min: 3, maks: 20 });
    body("surname").notEmpty().isLength({ min: 3, maks: 20 });
    body("password").notEmpty().isLength({ min: 3, maks: 20 });
    body("birthDate").notEmpty().isLength({ min: 3, maks: 20 });
    body("age").notEmpty().isInt({ min: 0 });
    body("gender").notEmpty().isIn(["kadın", "erkek"]);
  },
  validateLogin() {
    body("email").notEmpty().isLength({ min: 3, maks: 20 });
    body("password").notEmpty().isLength({ min: 3, maks: 20 });
  },
  validateChangePassword() {
    body("password").notEmpty().isLength({ min: 3, maks: 20 });
    body("newPassword").notEmpty().isLength({ min: 3, maks: 20 });
    param("id").notEmpty().isMongoId();
  },
  validateDelete() {
    param("userId").notEmpty().isMongoId();
  },
  validateUpdateUserInfo() {
    param("userId").notEmpty().isMongoId();
    body("updatedData").notEmpty().isLength({ min: 3, maks: 100 });
  },
};

module.exports = userValidator;
