const config = require("./config/server.config");
const db = require("./db/db");
const router = require("./router/user.router")

const express = require("express");

const app = express();
app.use(express.json());
config.initialServerConfig();
const PORT = process.env.PORT || 3000;
app.use(router)
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
