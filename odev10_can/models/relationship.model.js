const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const zodiacEnum = [
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
  "Balık"
];

const relationship = new Schema(
  {
    zodiacName: {
      type: String,
      required: true,
      enum:zodiacEnum
    },
    otherZodiacName: {
      type: String,
      required: true,
      enum:zodiacEnum,
    },
    compatibilityText: {
      type: String,
      required: true,
    },
  },
  { minimize: true, autoIndex: true, timestamps: true }
);

const Relationship = mongoose.model(
  "Relationship",
  relationship,
  "relationship"
);

module.exports = Relationship;
