const controller = require("../controllers/index");
const router = require("express").Router();
const validation = require("../validations/index");

router.post("/createZodiac", controller.zodiac.createZodiac);
router.get("/getAllZodiac", controller.zodiac.getAllZodiacs);
router.get("/getZodiac/:id", controller.zodiac.getAllZodiacs);
router.delete(
  "/deleteZodiac",
 
  controller.zodiac.deleteZodiac
);
router.put(
  "/updateZodiac",

  controller.zodiac.updateZodiac
);

module.exports = {
    zodiac:router
}