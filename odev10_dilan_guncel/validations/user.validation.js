const { body, param } = require("express-validator");

const userValidator = {
  validateCreate() {
    return [
      body("email").notEmpty().isLength({ min: 3, max: 20 }),
      body("name").notEmpty().isLength({ min: 3, max: 20 }),
      body("surname").notEmpty().isLength({ min: 3, max: 20 }),
      body("password").notEmpty().isLength({ min: 3, max: 20 }),
      body("birthDate").notEmpty().isLength({ min: 3, max: 20 }),
      body("age").notEmpty().isInt({ min: 0 }),
      body("gender").notEmpty().isIn(["kadın", "erkek"]),
    ];
  },
  validateLogin() {
    return [
      body("email").notEmpty().isLength({ min: 3, max: 20 }),
      body("password").notEmpty().isLength({ min: 3, max: 20 }),
    ];
  },
  validateChangePassword() {
    return [
      body("password").notEmpty().isLength({ min: 3, max: 20 }),
      body("newPassword").notEmpty().isLength({ min: 3, max: 20 }),
      param("id").notEmpty().isMongoId(),
    ];
  },
  validateDelete() {
    return [
      param("userId").notEmpty().isMongoId(),
    ];
  },
  validateUpdateUserInfo() {
    return [
      param("userId").notEmpty().isMongoId(),
      body("updatedData").notEmpty().isLength({ min: 3, max: 100 }),
    ];
  },
};

module.exports = userValidator;
