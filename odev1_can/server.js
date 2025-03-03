const express = require("express");
const dotenv = require("dotenv").config();
const router = require("./router/router")
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());
app.use(router);


app.listen(PORT, () => {
  console.log(`Uygulama ${PORT} portunda çalışıyor`);
});
