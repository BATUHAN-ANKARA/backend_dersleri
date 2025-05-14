const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const zodiacSchema = new Schema(
  {
    title: {
      typeof: String,
    },
    daily: {
      typeof: String,
    },
    weekly: {
      typeof: String,
    },
    monthly: {
      typeof: String,
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
