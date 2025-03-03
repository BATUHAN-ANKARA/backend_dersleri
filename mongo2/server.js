const express = require("express");
const db = require("./db/db");
const router = require("./router/router");
const app = express();

app.use(express.json());
app.use(router);

db.mongooseConnection()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server 3000 portunda çalışıyor");
    });
  })
  .catch((e) => {
    console.log("Bağlantı hatası:", e.message);
  });
