const { body, param } = require("express-validator");

const categoryValidator = {
  validateCreate() {
    return [
      body("name").not().isEmpty().isLength({ min: 3, max: 100 }),
      body("description").not().isEmpty().isLength({ min: 3, max: 100 }),
      body("adminId").not().isEmpty().isMongoId(),
    ];
  },
  validateGetById() {
    return [
      param("id").not().isEmpty().isMongoId(),
      param("adminId").not().isEmpty().isMongoId(),
    ];
  },
  validateDeleteById() {
    return [param("id").not().isEmpty().isMongoId()];
  },
};

module.exports = categoryValidator;
