const { body, param } = require("express-validator");

const blogValidator = {
  validateCreate() {
    return [
      body("title").notEmpty().isLength({ min: 3, max: 100 }),
      body("content").notEmpty().isLength({ min: 3, max: 100 }),
    ];
  },
  validateDelete() {
    return [param("id").notEmpty().isMongoId()];
  },
  validateGetById() {
    return [param("id").not().isEmpty().isMongoId()];
  },
};
module.exports = blogValidator;
