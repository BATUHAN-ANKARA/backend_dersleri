const adminService = require("./admin.service");
const blogService = require("./blog.service");
const categoryService = require("./category.service");
const commentService = require("./comment.service");

module.exports = {
  admin: adminService,
  blog: blogService,
  category: categoryService,
  comment: commentService,
};
