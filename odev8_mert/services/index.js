const adminService = require("./admin.service");
const blogService = require("./blog.service");
const categoryService = require("./category.service");
const commentService = require("./comment.service");
const produtcService = require("./product.service");
const saleService = require("./sale.service");
const userService = require("./user.service");

module.exports = {
  admin: adminService,
  blog: blogService,
  category: categoryService,
  comment: commentService,
  product: produtcService,
  sale: saleService,
  user: userService,
};
