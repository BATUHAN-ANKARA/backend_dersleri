const mongoose = require("mongoose");

exports.mongoConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      dbName: process.env.DB_NAME,
      connectTimeoutMS: process.env.CONNECTIONTIMEOUTMS,
    });
    console.log("Db bağlantısı başarılı!");
  } catch (error) {
    throw new Error(error.message);
  }
};
