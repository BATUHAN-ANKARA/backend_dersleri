const { body, param } = require("express-validator");

const productValidator = {
  validateCreateProduct() {
    return [
      body("name").not().isEmpty(),
      body("price").not().isEmpty().isNumeric(),
      body("category").not().isEmpty(),
      body("description").not().isEmpty().isLength({ min: 3, max: 250 }),
      body("stock").not().isEmpty().isNumeric(),
    ];
  },
};

module.exports = productValidator;
