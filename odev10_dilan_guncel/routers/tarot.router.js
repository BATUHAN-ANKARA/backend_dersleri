const controller = require("../controllers/tarot.controller");
const router = require("express").Router();

router.post("/createTarot", controller.createTarot);

router.put("/updateTarot", controller.updateTarot);

router.get("/getAllTarot", controller.getAllTarot);

router.get("/getRandomTarot", controller.getRandomTarot);

router.delete("/deleteTarot", controller.deleteTarot);

module.exports = {
  tarot: router,
};
