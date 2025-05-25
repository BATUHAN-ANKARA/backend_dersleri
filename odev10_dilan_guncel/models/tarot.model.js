const mongoose = require("mongoose")
const Schema = mongoose.Schema

const tarot = new Schema({
    cardName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    position: {
        type:String
    }
},{
    minimize:true,
    autoIndex:true,
    timestamps:true
})

const Model = mongoose.model("Tarot",tarot,"tarot")
module.exports = {
    Model
}