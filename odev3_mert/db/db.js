const mongoose = require("mongoose");

exports.dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      dbName: process.env.DB_NAME,
      connectTimeoutMS: process.env.CONNECTIONTIMEOUTMS,
    });
    console.log("Veritabanı bağlantısı başarılı");
  } catch (error) {
    throw new Error("DB bağlantısı hatası", error.message);
  }
};
