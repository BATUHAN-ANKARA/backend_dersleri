const { body, param } = require("express-validator");

const adminValidator = {
  validateCreate() {
    return [
      body("name").not().isEmpty().isLength({ min: 3, max: 100 }),
      body("surname").not().isEmpty().isLength({ min: 3, max: 100 }),
      body("email").not().isEmpty().isEmail(),
      body("password").not().isEmpty().isLength({ min: 4, max: 8 }),
    ];
  },
  validateLogin() {
    return [
      body("email").not().isEmpty().isEmail(),
      body("password").not().isEmpty().isLength({ min: 4, max: 8 }),
    ];
  },
  validateChangePassword() {
    return [
      param("id").not().isEmpty().isMongoId(),
      body("password").not().isEmpty().isLength({ min: 4, max: 8 }),
      body("newPassword").not().isEmpty().isLength({ min: 4, max: 8 }),
    ];
  },
  validateGetById() {
    return [param("id").not().isEmpty().isMongoId()];
  },
  validateDeleteById() {
    return [param("id").not().isEmpty().isMongoId()];
  },
};

module.exports = adminValidator;
