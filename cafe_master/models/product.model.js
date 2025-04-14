const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
    },
    status: {
      type: String,
      default: "active",
      enum: ["active", "inactive"],
    },
    stock: {
      type: Number,
    },
    price: {
      type: Number,
    },
    category: {
      type: String,
    },
    subCategory: {
      type: String,
    },
  },
  {
    timestamps: true,
    autoIndex: true,
    minimize: true,
  }
);

const Product = mongoose.model("Product", productSchema, "products");

module.exports = Product;
