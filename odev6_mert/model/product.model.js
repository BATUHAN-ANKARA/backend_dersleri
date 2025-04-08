const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    category: [
      {
        type: String,
      },
    ],
    description: {
      type: String,
    },
    stock: {
      type: Number,
    },
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true,
  }
);

const Product = mongoose.model("Product", productSchema, "products");

module.exports = Product;
