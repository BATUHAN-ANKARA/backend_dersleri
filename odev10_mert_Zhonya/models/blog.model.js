const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim:true,
    },
    text: {
      type: String,
      required: false,
      default:"",
    },     
     author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    comments: [
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    text: { type: String, required: true },
    date: { type: Date, default: Date.now }
  }
]
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true
  }
);

const Blogs = mongoose.model("Blogs", blogsSchema, "blogs");

module.exports = Blogs;