const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique:true,
    },
    password: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      enum: ["kadın", "erkek", "belirtmek istemiyorum"],
      required: true,
    },
     zodiacSign: {
      type: Schema.Types.String,
    },
    blogs: [
      {
        blogId: {
          type: Schema.Types.ObjectId,
          ref: "Blogs",
        },
      },
    ],
    likedBlogs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blogs"
      }
    ],
    likedZodiacs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Zodiac"
      }
    ],
    likedRelationships: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Relationship"
      }
    ],
  },
  { timestamps: true, autoIndex: true, minimize: true }
);

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
