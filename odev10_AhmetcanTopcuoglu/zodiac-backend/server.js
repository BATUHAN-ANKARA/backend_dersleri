const app = require('./app');
const mongoose = require ('mongoose');
require('dotenv').config();

const PORT =process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB bağlantısı başarılı");
    app.listen(PORT, `0.0.0.0`, () =>
      console.log(`Sunucu ${PORT} portunda, tüm IP adreslerinden erişilebilir durumda...`)
    );
  })
  .catch((err) => console.error("Mongo bağlantı hatası:", err));