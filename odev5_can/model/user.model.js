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
      required:true,
    },
    email: {
      type: String,
      //required: true,   
      unique: true,
    },
    password: {
      type: String,
      //required: true,
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

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
