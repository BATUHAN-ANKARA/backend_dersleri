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
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { minimize: true, autoIndex: true, timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema, "blogs");
module.exports = Blog;
