const router = require("express").Router();
const controller = require("../controllers/product.controller");
const productValidator = require("../validations/index");

router.post(
  "/createProduct",
  [productValidator.productValidator.validateCreateProduct()],
  controller.createProduct
);
router.get("/getAllProducts", controller.getAllProducts);
router.get(
  "/sorgu1/:val",
  [productValidator.productValidator.validateSorgu1()],
  controller.sorgu1
);
router.get(
  "/sorgu2/:val",
  [productValidator.productValidator.validateSorgu2()],
  controller.sorgu2
);
router.get(
  "/sorgu3/:val1/:val2",
  [productValidator.productValidator.validateSorgu3()],
  controller.sorgu3
);
router.get("/sorgu4", controller.sorgu4);
router.get(
  "/sorgu5/:val1/:val2",
  [productValidator.productValidator.validateSorgu5()],
  controller.sorgu5
);
router.get(
  "/sorgu6/:val1/:val2/:val3",
  [productValidator.productValidator.validateSorgu6()],
  controller.sorgu6
);
router.get(
  "/sorgu7/:val1/:val2/:val3",
  [productValidator.productValidator.validateSorgu7()],
  controller.sorgu7
);
router.get(
  "/sorgu8/:val",
  [productValidator.productValidator.validateSorgu8()],
  controller.sorgu8
);

module.exports = { product: router };
