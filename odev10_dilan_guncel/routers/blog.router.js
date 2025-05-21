const controller = require("../controllers/index");
const router = require("express").Router();
const validation = require("../validations/index");

router.post("/createBlog", controller.blog.createBlog);
router.delete("/deleteBlog", controller.blog.deleteBlog);
router.get("/getAllBlogs", controller.blog.getAllBlogs);
router.get("/getBlogById/:id", controller.blog.getBlogById);
router.get("/getBlogByTitle/:title", controller.blog.getBlogByTitle);

module.exports = {
  blog: router,
};
