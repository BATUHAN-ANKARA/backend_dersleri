require("dotenv").config();
const mongoose = require("mongoose");

const mongooseConnection = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI,
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


module.exports={
    mongooseConnection,
}