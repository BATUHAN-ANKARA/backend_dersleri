const controller = require("../controllers/compatibility.controller");
const router = require("express").Router();

router.post("/createCompatibility", controller.createCompatibility);

router.put(
  "/updateCompatibility",

  controller.updateCompatibility
);

router.get("/getAllCompatibility", controller.getAllCompatibility);

router.get(
  "/getCompatibilityBetween/:primaryZodiacSign/:secondaryZodiacSign",

  controller.getCompatibilityBetween
);

router.delete(
  "/deleteCompatibilityById/:id",

  controller.deleteCompatibilityById
);

module.exports = {
  compatibility: router,
};
