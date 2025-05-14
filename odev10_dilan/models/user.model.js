const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String, 
    },
    surname: {
      type: String, 
    },
    userId: {
      type: Schema.Types.ObjectId,  
    },
    email: {
      type: String,  
      required: true,
    },
    password: {
      type: String, 
    },
    birthDate: {
      type: String, 
    },
    age: {
      type: String,  
    },
    gender: {
      type: String,
      enum: ["kadın", "erkek"],
    },
    zodiacSign: {
      type: String,  
    },
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true,
  }
);

const User = mongoose.model("User", userSchema, "user");

module.exports = User;
