const controller = require("../controllers/index");
const router = require("express").Router();
const validation = require("../validations/index");

router.post(
  "/createComment",
  [validation.commentValidator.validateCreate()],
  controller.comment.createComment
);
router.delete(
  "/deleteComment/:id/:adminId",
  [validation.commentValidator.validateDeleteById()],
  controller.comment.deleteComment
);
router.get("/getAllComments", controller.comment.getAllComments);
router.get(
  "/getCommentById/:id",
  [validation.commentValidator.validateGetById()],
  controller.comment.getCommentById
);
router.get(
  "/getCommentsByProduct/:productId",
  [validation.commentValidator.validateGetByProduct()],
  controller.comment.getCommentsByProduct
);
router.get(
  "/getCommentsByUser/:userId",
  [validation.commentValidator.validateGetByUser()],
  controller.comment.getCommentsByUser
);
router.get("/getFeaturedComments", controller.comment.getFeaturedComments);
router.put("/updateCommentFeature", controller.comment.updateCommentFeature);
router.put("/updateCommentStatus", controller.comment.updateCommentStatus);


module.exports = {
  comment: router,
};
