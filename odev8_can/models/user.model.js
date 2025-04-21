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
    },
    password: {
      type: String,
    },
    birthDate: {
      type: Date,
    },
    purchaseHistory: [
      {
        saleId: {
          type: Schema.Types.ObjectId,
          ref: "Sale",
        },
      },
    ],
    comments: [
      {
        commentId: {
          type: Schema.Types.ObjectId,
          ref: "Comment",
        },
      },
    ],
    gender: {
      type: String,
      enum: ["kadın", "erkek"],
    },
  },
  {
    timestamps: true,
    autoIndex: true,
    minimize: true,
  }
);

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
