const { body, param } = require("express-validator");

const zodiacValidator = {
  validateCreate() {
    return [
      body("title").notEmpty().isLength({ min: 3, max: 100 }),

      body("daily").notEmpty().isLength({ min: 5 }),

      body("weekly").notEmpty().isLength({ min: 5 }),

      body("monthly").notEmpty().isLength({ min: 5 }),
    ];
  },

  validateDelete() {
    return [param("id").notEmpty().isMongoId()];
  },

  validateGetById() {
    return [param("id").notEmpty().isMongoId()];
  },

  validateUpdate() {
    return [
      param("id").notEmpty().isMongoId(),

      body("title").optional().isLength({ min: 3, max: 100 }),

      body("daily").optional().isLength({ min: 5 }),

      body("weekly").optional().isLength({ min: 5 }),

      body("monthly").optional().isLength({ min: 5 }),
    ];
  },
};

module.exports = zodiacValidator;
