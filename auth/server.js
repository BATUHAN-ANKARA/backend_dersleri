const config = require("./config/server.config");
const db = require("./db/db");
const express = require("express");

const app = express();
config.initialServerConfig();
const PORT = process.env.PORT;
app.use(express.json());

db.connectMongo()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server", PORT, "portunda çalışıyor");
    });
  })
  .catch((e) => {
    console.log(e.message);
  });
