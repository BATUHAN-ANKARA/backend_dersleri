const router = require("express").Router();
const { calculate, faktoriyel } = require("../controller/controller"); 

router.post("/matematik/hesaplama", calculate);
router.post("/matematik/faktoriyel", faktoriyel);

module.exports = router;
