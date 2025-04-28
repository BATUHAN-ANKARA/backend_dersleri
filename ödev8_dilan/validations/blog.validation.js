const { body, param } = require("express-validator");

const blogValidator = {
  validateCreate() {
    return [
      body("title").not().isEmpty().isLength({ min: 3, max: 100 }),
      body("content").not().isEmpty().isLength({ min: 3, max: 1000 }),
      body("author").not().isEmpty().isMongoId(),
      body("tags").not().isEmpty(),
    ];
  },
  validateGetById() {
    return [param("id").not().isEmpty().isMongoId()];
  },
  validateDeleteById() {
    return [param("id").not().isEmpty().isMongoId()];
  },
};

module.exports = blogValidator;
