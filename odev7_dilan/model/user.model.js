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
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
    },
    zodiac: {
      type: String,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
      enum: ["Erkek", "Kadın"],
    },
  },
  {
    timestamps: true,
    minimize: true,
    autoIndex: true,
  }
);

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
