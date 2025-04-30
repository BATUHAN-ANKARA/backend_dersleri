const { body, param } = require("express-validator");

const userValidator = {
  validateRegister() {
    return [
      body("name").not().isEmpty(),
      body("surname").not().isEmpty(),
      body("birthDate").isDate(),
      body("email").not().isEmpty().isEmail(),
      body("password").not().isEmpty().isLength({ min: 4, max: 8 }),
    ];
  },
  validateLogin() {
    return [body("email").not().isEmpty(), body("password").not().isEmpty()];
  },
  validateUpdateUser() {
    return [
      body("name").not().isEmpty(),
      body("surname").not().isEmpty(),
      param("userId").not().isEmpty().isMongoId(),
    ];
  },
  validateDeleteUser() {
    return [param("userId").not().isEmpty().isMongoId()];
  },
  validateChangePassword() {
    return [
      param("id").not().isEmpty().isMongoId(),
      body("password").not().isEmpty().isLength({ min: 4, max: 8 }),
      body("newPassword").not().isEmpty().isLength({ min: 4, max: 8 }),
    ];
  },
};

module.exports = userValidator;