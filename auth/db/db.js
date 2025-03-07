const mongoose = require("mongoose");

exports.connectMongo = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      timeoutMS: process.env.CONNECTIONTIMEOUTMS,
      dbName: process.env.DB_NAME,
    });
    console.log("Mongo bağlantısı başarılı");
  } catch (error) {
    throw new Error("Mongo bağlantı hatası:", error.message);
  }
};
