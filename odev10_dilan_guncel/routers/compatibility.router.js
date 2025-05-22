const controller = require("../controllers/compatibility.controller");
const router = require("express").Router();
const validation = require("../validations");

router.post(
  "/createCompatibility",
  validation.compatibility.validateCreate(),
  controller.createCompatibility
);

router.put(
  "/updateCompatibility",
  validation.compatibility.validateUpdate(),
  controller.updateCompatibility
);

router.get(
  "/getAllCompatibility",
  controller.getAllCompatibility
);

router.get(
  "/getCompatibilityBetween/:primaryZodiacSign/:secondaryZodiacSign",
  validation.compatibility.validateGetCompatibilityBetween(),
  controller.getCompatibilityBetween
);

router.delete(
  "/deleteCompatibilityById/:id",
  validation.compatibility.validateDelete(),
  controller.deleteCompatibilityById
);


module.exports = {
  compatibility: router,
};
