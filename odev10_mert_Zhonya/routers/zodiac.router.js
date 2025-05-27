const controller = require("../controllers/index");
const router = require("express").Router();
const validation = require("../validations/index");

router.post("/addHoroscope", controller.zodiac.addHoroscope);

router.put("/updateHoroscope", controller.zodiac.updateHoroscope);

router.get("/getAllHoroscope", controller.zodiac.getAllHoroscope);

router.post("/likeZodiac/:zodiacId/:userId", controller.zodiac.likeZodiac);

router.post("/unLikeZodiac/:zodiacId/:userId", controller.zodiac.unLikeZodiac);

router.get("/getZodiacByName/:name", controller.zodiac.getZodiacByName);
module.exports = {
  zodiac: router,
};
