const mongoose = require("mongoose");
<<<<<<< HEAD
const Schema = mongoose.Schema;
=======

const Schema = mongoose.Schema;

>>>>>>> 85d947e728a09e885b0882661940307917787dda
const userSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
    },
    surname: {
      type: Schema.Types.String,
    },
    email: {
      type: Schema.Types.String,
    },
    gender: {
      type: Schema.Types.String,
    },
    phone: {
      type: Schema.Types.String,
    },
    title: {
      type: Schema.Types.String,
    },
    age: {
      type: Schema.Types.Number,
    },
  },
  {
    minimize: true,
<<<<<<< HEAD
    timestamps: true, //created ve updateleri otomatik verir
    // _id:false //dökumana id verilmez
  }
);
const User = mongoose.model("User", userSchema, "user");
module.exports = User;
//modellerde büyük harfle başlancak const yanındaki yani
=======
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema, "user");

module.exports = User;
>>>>>>> 85d947e728a09e885b0882661940307917787dda
