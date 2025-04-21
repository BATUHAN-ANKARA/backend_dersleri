const adminRouter = require("./admin.router").admin;
const blogRouter = require("./blog.router").blog;
const categoryRouter = require("./category.router").category;
const commentRouter = require("./comment.router").comment;

module.exports = {
  adminRouter,
  blogRouter,
  categoryRouter,
  commentRouter,
};
