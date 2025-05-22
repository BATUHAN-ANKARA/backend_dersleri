const mongoose = require("mongoose");

const zodiacText = [
  "Koç",
  "Boğa",
  "İkizler",
  "Yengeç",
  "Aslan",
  "Başak",
  "Terazi",
  "Akrep",
  "Yay",
  "Oğlak",
  "Kova",
  "Balık",
];

const CompatibilitySchema = new mongoose.Schema(
  {
    primaryZodiacSign: {
      type: String,
      required: true,
      enum: zodiacText,
    },
    secondaryZodiacSign: {
      type: String,
      required: true,
      enum: zodiacText,
    },
    compatibilityDescription: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    minimize: true,
    autoIndex: true,
  }
);

module.exports = mongoose.model("Compatibility", CompatibilitySchema);
