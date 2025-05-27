const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tarotSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reversedDescription: { type: Schema.Types.String },
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true,
  }
);

const Tarot = mongoose.model("Tarot", tarotSchema, "tarot");

module.exports = Tarot;
