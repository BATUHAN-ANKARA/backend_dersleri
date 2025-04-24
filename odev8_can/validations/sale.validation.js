const { body, param } = require("express-validator");

const saleValidator = {
  validateCreate() {
    return [
      body("products").not().isEmpty(),
      body("paymentMethod").not().isEmpty(),
      body("user").not().isEmpty(),
    ];
  },
  validateSaleId() {
    return [param("saleId").not().isEmpty()];
  },
  validateUpdateSale() {
    return [param("saleId").not().isEmpty()];
  },
};

module.exports = saleValidator;