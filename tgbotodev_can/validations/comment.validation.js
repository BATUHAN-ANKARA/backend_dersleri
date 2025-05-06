const { body, param } = require("express-validator");

const commentValidator = {
  validateCreate() {
    return [
      body("userId").not().isEmpty().isMongoId(),
      body("productId").not().isEmpty().isMongoId(),
      body("commentText").not().isEmpty().isLength({ min: 1, max: 200 }),
      body("rating").not().isEmpty(),
    ];
  },
  validateGetById() {
    return [param("id").not().isEmpty().isMongoId()];
  },
  validateGetByUser() {
    return [param("userId").not().isEmpty().isMongoId()];
  },
  validateGetByProduct() {
    return [param("productId").not().isEmpty().isMongoId()];
  },
  validateDeleteById() {
    return [
      param("id").not().isEmpty().isMongoId(),
      param("adminId").not().isEmpty().isMongoId(),
    ];
  },
};

module.exports = commentValidator;
