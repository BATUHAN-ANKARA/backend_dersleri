const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    name: {
        type:String,
        required: true,
        minlength:2
    },

    email: {
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },

    password:{
        type:String,
        required:true,
        minlength:6
    },

},{ timestamps:true});

module.exports=mongoose.model("User",UserSchema);