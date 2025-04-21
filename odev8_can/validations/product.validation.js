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
  validateSorgu1() {
    return [param("val").not().isEmpty()];
  },
  validateSorgu2() {
    return [param("val").not().isEmpty()];
  },
  validateSorgu3() {
    return [param("val1").not().isEmpty(), param("val2").not().isEmpty()];
  },
  validateSorgu5() {
    return [param("val1").not().isEmpty(), param("val2").not().isEmpty()];
  },
  validateSorgu6() {
    return [
      param("val1").not().isEmpty(),
      param("val2").not().isEmpty(),
      param("val3").not().isEmpty(),
    ];
  },
  validateSorgu7() {
    return [
      param("val1").not().isEmpty(),
      param("val2").not().isEmpty(),
      param("val3").not().isEmpty(),
    ];
  },
  validateSorgu8() {
    return [param("val").not().isEmpty()];
  },
};

module.exports = productValidator;
