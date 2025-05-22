const { body, param } = require("express-validator");

const compatibilityValidator = {
  validateCreate() {
    return [
      body("primaryZodiacSign").notEmpty().isLength({ min: 3, max: 6 }),
      body("secondaryZodiacSign").notEmpty().isLength({ min: 3, max: 6 }),
      body("compatibilityDescription").notEmpty().isLength({ min: 3, max: 100 }),
    ];
  },
  validateDelete() {
    return [param("id").notEmpty().isMongoId()];
  },
  validateUpdate() {
    return [
      body("primaryZodiacSign").notEmpty().isLength({ min: 3, max: 6 }),
      body("secondaryZodiacSign").notEmpty().isLength({ min: 3, max: 6 }),
      body("compatibilityDescription").notEmpty().isLength({ min: 3, max: 100 }),
    ];
  },
  validateGetCompatibilityBetween() {
    return [
      param("primaryZodiacSign").notEmpty().isLength({ min: 3, max: 6 }),
      param("secondaryZodiacSign").notEmpty().isLength({ min: 3, max: 6 }),
    ];
  },
};

module.exports = compatibilityValidator;
