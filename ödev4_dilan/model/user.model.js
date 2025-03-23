const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3, //ad uzunluğu en az 3
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: Schema.Types.String,
      required: true,
      unique: true, // tek bir e mail le giriş yapabilirler
    },
    password: {
      type: Schema.Types.String,
      required: true,
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
