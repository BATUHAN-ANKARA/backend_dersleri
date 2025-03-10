const mongoose = require("mongoose");
const { type } = require("os");

const Schema = mongoose.Schema;

const userSchema = new Schema({

    name: {
        type: String,
        required: true,  // zorunluluk
    },
    surname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: false,    // benzersiz olması lazım 
    },
    password: {
        type: String,
        required: true,
    },

}, {

    timestamps: true, // zaman damgası , create at ve update zaman dilimlerini tutuyor
    minimize: true,  // gönderilmeyen veriyi sistemde yer kaplaması için tutmaz bytan kazanç 
    autoIndex: true,
})

const User = mongoose.model("User", userSchema, "user");


module.exports = User