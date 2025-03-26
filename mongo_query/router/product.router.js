const router = require("express").Router();
const controller = require("../controller/product.controller");

router.post("/createProduct", controller.createProduct);
router.get("/getAllProducts", controller.getAllProducts);
router.get("/sorgu1/:val", controller.sorgu1);
router.get("/sorgu2/:val", controller.sorgu2);
router.get("/sorgu3/:val1/:val2", controller.sorgu3);
router.get("/sorgu4", controller.sorgu4);
router.get("/sorgu5/:val1/:val2", controller.sorgu5);
router.get("/sorgu6/:val1/:val2", controller.sorgu6);
router.get("/sorgu7/:val1/:val2/:val3", controller.sorgu7);
router.get("/sorgu8/:val", controller.sorgu8);

module.exports = { product: router };
