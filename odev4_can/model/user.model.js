const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
    },
    surname: {
      type: Schema.Types.String,
      required: true,
    },
    email: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    password: { type: Schema.Types.String, required: true },
  },
  {
    timestamps: true, //dökümana otomatik zaman ekler
    autoIndex: true, //boş verileri göstermiyor
    minimize: true, //
  }
);

const User = mongoose.model("User", userSchema, "user");

module.exports= User;