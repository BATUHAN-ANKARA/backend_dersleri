const router = require("express").Router();
const controller = require("../controller/product.controller");

router.post("/createProduct", controller.createProduct);
router.get("/getAllProducts", controller.getAllProducts);
router.get(
  "/getProductsByPriceGreater/:value",
  controller.getProductsByPriceGreater
);
router.get("/getProductsByFilter", controller.getProductsByFilter);

module.exports = { product: router };
