const router = require("express").Router();
const controller = require("../controller/controller");

router.get("/matematik/hesapla", (req, res) => {
  res.send(controller.merhaba);
});
router.post("/matematik/hesapla", controller.calculate);

router.get("/matematik/faktoriyel", (req, res) => {
  res.send(controller.tanim);
});

router.post("/matematik/faktoriyel",controller.faktoriyel)

module.exports = router;
