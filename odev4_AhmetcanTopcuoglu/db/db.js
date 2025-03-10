const mongoose = require("mongoose");


exports.connectMongo = async () => {

    try {
        await mongoose.connect(process.env.DB_URI, {

            timeoutMs: process.env.CONNECTIONTIMEOUTMS,
            dbName: process.env.DB_NAME,
        });
        console.log("DB bağlantısı başarılı")
    }
    catch (error) {

        throw new Error("mongo bağlantı hatası:", error.message);
    }
};