const express = require("express");
const db = require("./db/db");
const router=require("./router/router")
const app = express();

app.use(express.json());
app.use(router);

db.mongooseConnection()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server 5000 portunda çalışıyor");
    });
  })
  .catch((e) => {
    console.log("Bağlantı hatası:", e.message);
  });
