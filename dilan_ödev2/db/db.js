const mongoose = require("mongoose");
//şimdi bidaha anlat ne oluyodu vs codda
<<<<<<< HEAD

const mongooseConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://root:root@cluster0.jhkhv.mongodb.net/",
=======
const mongooseConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://root:root@cluster0.bazyb.mongodb.net/",
>>>>>>> 85d947e728a09e885b0882661940307917787dda
      {
        connectTimeoutMS: 5000,
        dbName: "express_db",
      }
    );
    console.log("Veritabanı bağlantısı başarılı");
  } catch (error) {
    throw new Error(error);
  }
};

<<<<<<< HEAD
module.exports = { mongooseConnection };
=======
module.exports = {
  mongooseConnection,
};
>>>>>>> 85d947e728a09e885b0882661940307917787dda
