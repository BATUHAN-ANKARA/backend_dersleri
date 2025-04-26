const controller = require("../controllers/index");
const router = require("express").Router();
const validation = require("../validations/index");

router.post(
  "/createSale",
  [validation.saleValidator.validateCreate()],
  controller.sale.createSale
);
router.get("/getAllSales", controller.sale.getAllSales);
router.get("/getSaleById/:saleId",controller.sale.getSaleById);
router.put("/updateSale/:saleId",[validation.saleValidator.validateUpdateSale()], controller.sale.updateSale);
router.delete("/deleteSale/:saleId", controller.sale.deleteSale);


module.exports = {
  sale: router,
};