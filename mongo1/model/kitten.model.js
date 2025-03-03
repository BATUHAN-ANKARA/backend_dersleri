const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const kittenSchame = new Schema({
  name: {
    type: String,
  },
});

const Kitten = mongoose.model("Kitten", kittenSchame, "kitten");

module.exports = Kitten;
