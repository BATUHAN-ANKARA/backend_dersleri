const mongoose = require("mongoose");

const mongooseConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://root:root@cluster0.bazyb.mongodb.net/",
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

module.exports = {
  mongooseConnection,
};
