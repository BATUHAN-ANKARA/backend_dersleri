const { body, param } = require("express-validator");

const blogValidator = {
  validateCreate() {
    return [
      body("title").not().isEmpty().isLength({ min: 3, max: 100 }),
      body("text").not().isEmpty().isLength({ min: 3, max: 1000 }),
      body("author").not().isEmpty().isMongoId(),
    ];
  },
};

module.exports = blogValidator;
