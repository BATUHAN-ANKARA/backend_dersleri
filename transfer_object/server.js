const express = require("express");
const db = require("./db/db");
const config = require("./config/server.config");
const router = require("./router/user.router");
const app = express();
app.use(express.json());

config.initialServerConfig();

const PORT = process.env.PORT;

app.use(router);

db.mongoConnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server", PORT, "portunda çalışıyor");
    });
  })
  .catch((e) => {
    console.log("Hata oluştu:", e.message);
  });
