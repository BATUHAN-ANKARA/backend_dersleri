const controller = require("../controllers/index");
const router = require("express").Router();
const validation = require("../validations/index");

router.post(
  "/createProduct",
  [validation.productValidator.validateCreateProduct()],
  controller.product.createProduct
);
router.get("/getAllProducts", controller.product.getAllProducts);
router.get("/getProductById/:productId", controller.product.getProductById);
router.get("/getProductByName/:name", controller.product.getProductByName);
router.get(
  "/getProductsByCategory/:category",
  controller.product.getProductsByCategory
);

router.get("/getProductsWithStock", controller.product.getProductsWithStock);
router.get(
  "/getProductsWithStockCategory/:category",
  controller.product.getProductsWithStockCategory
);

router.get(
  "/getProductsPriceGreater/:val",
  controller.product.getProductsPriceGreater
);
router.get(
  "/getProductsPriceRange/:val1/:val2",
  controller.product.getProductsPriceRange
);

module.exports = {
  product: router,
};