const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const saleSchema = new Schema(
  {
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
        },
        price: {
          type: Number,
        },
        quantity: {
          type: Number,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["Nakit", "Kredi Kartı"],
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    autoIndex: true,
    minimize: true,
  }
);

const Sale = mongoose.model("Sale", saleSchema, "sale");

module.exports = Sale;
