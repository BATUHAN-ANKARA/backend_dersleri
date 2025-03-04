const db = require("./db/db");
const router = require("./router/router")
const express = require("express");
const config = require("./config/server.config");
const app = express();

app.use(express.json());

config.initialServerConfig();

const PORT = process.env.PORT || 3000;
app.use(router)

db.dbConnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server ${PORT} portunda çalışıyor`);
    });
  })
  .catch((e) => {
    console.log(e.message);
  });