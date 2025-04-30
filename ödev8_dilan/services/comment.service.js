const Comment = require("../models/comment.model");
const Product = require("../models/product.model");
const User = require("../models/user.model");
const Admin = require("../models/admin.model");
const mongoose = require("mongoose");

exports.createComment = async (req) => {
  try {
    const { userId, productId, commentText, rating } = req.body;
    const existUser = await User.findById(userId);
    if (!existUser) {
      throw new Error("Kullanıcı bulunamadı");
    }
    const existProduct = await Product.findById(productId);
    if (!existProduct) {
      throw new Error("Ürün bulunamadı");
    }
    const comment = new Comment({
      userId,
      productId,
      commentText,
      rating,
    });
    await comment.save();
    await User.findByIdAndUpdate(userId, {
      $push: { comments: comment._id },
    });

    await Product.findByIdAndUpdate(productId, {
      $push: { comments: comment._id },
    });
    return comment;
  } catch (error) {
    throw new Error(error);
  }
};

exports.deleteComment = async (req) => {
  try {
    const { id, adminId } = req.params;
    const existAdmin = await Admin.findById(adminId);
    if (!existAdmin) {
      throw new Error("Admin bulunamadı");
    }
    const existComment = await Comment.findById(id);
    if (!existComment) {
      throw new Error("Yorum bulunamadı");
    }

    const commentObjectId = new mongoose.Types.ObjectId(id);

    const user = await User.findById(existComment.userId);
    if (user && user.comments) {
      user.comments = user.comments.filter(
        (comment) =>
          comment.commentId && comment.commentId.equals(commentObjectId)
      );
      await user.save();
    }

    const product = await Product.findById(existComment.productId);
    if (product && product.comments) {
      product.comments = product.comments.filter(
        (comment) =>
          comment.commentId && comment.commentId.equals(commentObjectId)
      );
      await product.save();
    }

    await Comment.findByIdAndDelete(id);
    
    return "Yorum silindi";
  } catch (error) {
    throw new Error(error);
  }
};

exports.getAllComments = async () => {
  try {
    const comments = await Comment.find();
    return comments;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCommentById = async (req) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findById(id);
    return comment;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCommentsByUser = async (req) => {
  try {
    const { userId } = req.params;
    const existUser = await User.findById(userId);
    if (!existUser) {
      throw new Error("Kullanıcı bulunamadı");
    }
    const comments = await Comment.find({ userId });
    return comments;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCommentsByProduct = async (req) => {
  try {
    const { productId } = req.params;
    const existProduct = await Product.findById(productId);
    if (!existProduct) {
      throw new Error("Ürün bulunamadı");
    }
    const comments = await Comment.find({ productId });
    return comments;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getFeaturedComments = async () => {
  try {
    const comments = await Comment.find({ isFeatured: false });
    return comments;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateCommentStatus = async (req) => {
  try {
    const { id, status, adminId } = req.params;

    const existAdmin = await Admin.findById(adminId);
    if (!existAdmin) {
      throw new Error("Admin bulunamadı");
    }

    const existComment = await Comment.findById(id);
    if (!existComment) {
      throw new Error("Yorum bulunamadı");
    }

    const updatedComment = await Comment.findByIdAndUpdate(
      id,
      { status: status },
      { new: true }
    );
    return updatedComment;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateCommentFeature = async (req) => {
  try {
    const { id, status, adminId } = req.params;
    
    const existComment = await Comment.findById(id);
    if (!existComment) {
      throw new Error("Yorum bulunamadı");
    }

    const existAdmin = await Admin.findById(adminId);
    if (!existAdmin) {
      throw new Error("Admin bulunamadı");
    }

    const updatedComment = await Comment.findByIdAndUpdate(
      id,
      { isFeatured: status === "true" },
      { new: true }
    );
    return updatedComment;
  } catch (error) {
    throw new Error(error);
  }
};
