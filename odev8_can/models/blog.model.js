const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    tags: [
      {
        name: {
          type: String,
        },
      },
    ],
    status: {
      type: String,
      enum: ["pending", "published"],
      default: "pending",
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
    },
  },
  {
    timestamps: true,
    autoIndex: true,
    minimize: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema, "blogs");

module.exports = Blog;
