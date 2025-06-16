// backend/models/Click.js
const mongoose = require("mongoose");

const clickSchema = new mongoose.Schema(
  {
    count: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
    autoIndex: true,
    minimize: true,
  }
);

const Click = mongoose.model("Click", clickSchema, "clicks");

module.exports = Click;
