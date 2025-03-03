const express = require("express");
const db = require("./db/db");
const app = express();
const Kitten = require("./model/kitten.model");

app.get("/otomatik-kayit", async (req, res) => {
  try {
    const json = new Kitten({ name: "Üzüm" });
    await json.save();
    res.json({
      error: false,
      succes: true,
      data: json,
      message: "Kayıt başarılı",
    });
  } catch (error) {
    res.json({ error: true, success: false, errorMessage: error.message });
  }
});

db.connectMongo()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server 3000 portunda çalışıyor");
    });
  })
  .catch((error) => {
    "Veri tabanı bağlantısında hata oluştu:", error.message;
  });
