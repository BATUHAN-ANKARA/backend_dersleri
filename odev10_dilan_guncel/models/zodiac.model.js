const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const zodiacSchema = new Schema(
  {
    title: {
      type: String,
    },
    daily: {
      type: String,
    },
    weekly: {
      type: String,
    },
    monthly: {
      type: String,
    },
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true,
  }
);

const Zodiac = mongoose.model("Zodiac", zodiacSchema, "zodiac");

module.exports = Zodiac;
