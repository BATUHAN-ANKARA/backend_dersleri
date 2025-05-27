const controller = require("../controllers/index");
const router = require("express").Router();
const validation = require("../validations/index");

router.post("/createTarotCard", controller.tarot.createTarotCard);
router.delete("/deleteTarotCard/:tarotId", controller.tarot.deleteTarotCard);
router.get("/getAllTarotCards", controller.tarot.getAllTarotCards);
router.post("/getTarotFortune", controller.tarot.getTarotFortune);

module.exports = {
  tarot: router,
};
