const config = require("./config/server.config");
const db = require("./db/db");
const express = require("express");
config.initialServerConfig();
const app = express();
const PORT = process.env.PORT;
app.use(express.json())

db.connectMongo()
    .then(() => {

        app.listen(PORT, () => {
            console.log("Server", PORT, "portunda başırılı bağlantı")
        })
    })
    .catch(() => {
    });