const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    name: {
      type: String,
    },
    surname: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    blogs: [
      {
        blogId: {
          type: Schema.Types.ObjectId,
          ref: "Blog",
        },
      },
    ],
    status: {
      type: String,
      enum: ["pending", "active", "inactive"],
      default: "pending",
    },
  },
  {
    timestamps: true,
    autoIndex: true,
    minimize: true,
  }
);

const Admin = mongoose.model("Admin", adminSchema, "admins");

module.exports = Admin;
