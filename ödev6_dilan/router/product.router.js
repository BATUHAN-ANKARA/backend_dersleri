const router = require("express").Router();
const controller = require("../controller/product.controller");


router.get("/sorgu1/:val", controller.sorgu1);
router.get("/sorgu2/:val", controller.sorgu2);
router.get("/sorgu3/:val1/:val2", controller.sorgu3);
router.get("/sorgu4/:name/:val1/:val2", controller.sorgu4);
router.get("/sorgu5/:name/:val1/:val2", controller.sorgu5);
router.get("/sorgu6/:name/:val1/:val2", controller.sorgu6);
router.get("/sorgu7/:name/:val1/:val2/:val3", controller.sorgu7);


module.exports = {
    product: router,
  };
  