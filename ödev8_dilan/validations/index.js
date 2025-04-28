const adminValidator = require("./admin.validation");
const blogValidator = require("./blog.validation");
const categoryValidator = require("./category.validation");
const commentValidator = require("./comment.validation");
const productValidator = require("./product.validation");
const saleValidator = require("./sale.validation");
const userValidation = require("./user.validation")

module.exports = {
  adminValidator,
  blogValidator,
  categoryValidator,
  commentValidator,
  productValidator,
  saleValidator,
  userValidation
};