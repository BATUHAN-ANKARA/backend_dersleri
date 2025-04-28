const controller = require("../controllers/index");
const router = require("express").Router();
const validation = require("../validations/index");

router.post(
  "/createBlog",
  [validation.blogValidator.validateCreate()],
  controller.blog.createBlog
);
router.delete(
  "/deleteBlog/:id",
  [validation.blogValidator.validateDeleteById()],
  controller.blog.deleteBlog
);
router.get("/getAllBlogs", controller.blog.getAllBlogs);
router.get(
  "/getBlogById/:id",
  [validation.blogValidator.validateGetById()],
  controller.blog.getBlogById
);
router.get("/getBlogByTitle/:title", controller.blog.getBlogByTitle);
router.get("/getBlogsByStatus/:status", controller.blog.getBlogsByStatus);
router.get("/getBlogsByAuthor/:author", controller.blog.getBlogsByAuthor);
router.put("/updateBlogStatus/:id/:status", controller.blog.updateBlogStatus);

module.exports = {
  blog: router,
};
