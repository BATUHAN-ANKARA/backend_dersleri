const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const horoscopeSchema = new Schema(
  {
    title: {
      type: String,
      enum: ["daily", "weekly", "monthly", "yearly"],
      required: true,
    },
    text: { type: String },
    date: { type: Date, default: () => new Date() }, //bu date formatı js time formatı oluyor bunun yerine new Date() kullanın------ NEW DATE OLARAK DEĞİŞTİRİLDİ.
  },
  { _id: false }
);

const zodiacSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      enum: [
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
      ],
    },
    daily: [horoscopeSchema],
    weekly: [horoscopeSchema],
    monthly: [horoscopeSchema],
    yearly: [horoscopeSchema],
  },
  { timestamps: true, minimize: true, autoIndex: true }
);

const Zodiac = mongoose.model("Zodiac", zodiacSchema, "zodiac");

module.exports = Zodiac;
