const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
    },
    surname: {
      type: Schema.Types.String,
    },
    email: {
      type: Schema.Types.String,
    },
    gender: {
      type: Schema.Types.String,
    },
    phone: {
      type: Schema.Types.String,
    },
    title: {
      type: Schema.Types.String,
    },
    age: {
      type: Schema.Types.Number,
    },
  },
  {
    minimize: true,
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema, "user");

module.exports = User;
