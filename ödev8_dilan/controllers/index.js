const adminController = require("./admin.controller");
const blogController = require("./blog.controller");
const categoryController = require("./category.controller");
const commentController = require("./comment.controller");
const productController = require("./product.controller");
const saleController = require("./sale.controller");
const userController = require("./user.controller");

module.exports = {
  admin: adminController,
  blog: blogController,
  category: categoryController,
  comment: commentController,
  product: productController,
  sale: saleController,
  user: userController,
};