const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    commentText: {
      type: String,
    },
    rating: {
      type: Number,
      default: 0,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["pending", "removed", "published"],
      default: "pending",
    },
  },
  {
    timestamps: true,
    autoIndex: true,
    minimize: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema, "comments");

module.exports = Comment;
