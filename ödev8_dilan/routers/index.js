const adminRouter = require("./admin.router").admin;
const blogRouter = require("./blog.router").blog;
const categoryRouter = require("./category.router").category;
const commentRouter = require("./comment.router").comment;
const productRouter = require("./product.router").product;
const saleRouter = require("./sale.router").sale;
const userRouter = require("./user.router").user;

module.exports = {
  adminRouter,
  blogRouter,
  categoryRouter,
  commentRouter,
  productRouter,
  saleRouter,
  userRouter,
};