const controller = require("../controllers/index");
const router = require("express").Router();
const validation = require("../validations/index");

router.post(
  "/createCategory",
  [validation.categoryValidator.validateCreate()],
  controller.category.createCategory
);
router.delete(
  "/deleteCategory/:id/:adminId",
  [validation.categoryValidator.validateDeleteById()],
  controller.category.deleteCategory
);
router.get("/getAllCateories", controller.category.getAllCateories);
router.get(
  "/getCategoryById/:id",
  [validation.categoryValidator.validateGetById()],
  controller.category.getCategoryById
);
router.get(
  "/getCategoriesByStatus/:status",
  controller.category.getCategoriesByStatus
);
router.get("/getFeaturedCategories", controller.category.getFeaturedCategories);
router.put(
  "/updateCategoryStatus/:id/:status/:adminId",
  controller.category.updateCategoryStatus
);
router.put(
  "/updateCategoryFeature/:id/:status/:adminId",
  controller.category.updateCategoryFeature
);

module.exports = {
  category: router,
};
