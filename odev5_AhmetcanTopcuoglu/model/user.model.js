const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    surname: {
      type: String,
    },
    email: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
    },
    vizeNotu: {
      type: Number,
    },
    finalNotu: {
      type: Number,
    },
    harfNotu: {
      type: String,
    },
    isPassed: {
      type: Boolean,
    },
    birthDate: {
      type: Date,
    },
    zodiacSign: {
      type: String,
    },
  },
  {
    timestamps: true,
    minimize: true,
    autoIndex: true,
  }
);

const User = mongoose.model("User", userSchema, "user");

module.exports = User;

