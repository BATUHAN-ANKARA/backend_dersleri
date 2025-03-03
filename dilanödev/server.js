const express = require("express");
const app = express();
const router = require("./router/router"); 

app.use(express.json()); 

app.use(router);
app.get("matematik/hesapla", (req, res) => {
  res.send("Merhaba post methodu ile işlemlerinizi yaptırabilirsiniz :)");
});
app.get("matematik/faktoriyel", (req, res) => {
  res.send("faktöriyel tanımı");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Uygulama ${PORT} portunda çalışıyor`);
});
