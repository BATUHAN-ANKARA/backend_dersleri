const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    stock: {
      type: Number,
    },
    price: {
      type: Number,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    comments: [
      {
        commentId: {
          type: Schema.Types.ObjectId,
          ref: "Comment",
        },
      },
    ],
  },
  {
    timestamps: true,
    autoIndex: true,
    minimize: true,
  }
);

const Product = mongoose.model("Product", productSchema, "products");

module.exports = Product;
