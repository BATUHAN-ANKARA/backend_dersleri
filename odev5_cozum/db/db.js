const mongoose = require("mongoose");

exports.dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      connectTimeoutMS: process.env.CONNECTIONTIMEOUTMS,
      dbName: process.env.DB_NAME,
    });
    console.log("DB bağlantısı başarılı");
  } catch (error) {
    throw new Error(error.message);
  }
};
