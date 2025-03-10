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
    vizeNotu: {
      type: Number,
    },
    finalNotu: {
      type: Number,
    },
    harfNotu: {
      type: Number,
    },
    isPassed: {
      type: Boolean,
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
