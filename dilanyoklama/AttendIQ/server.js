const express = require("express");
const db = require("./db/index");
const configs = require("./configs/index");
// const router = require("./routers/index");
const app = express();
app.use(express.json());



app.use('/',(req,res)=> {
  res.status(200).json({
    success:true,
    message:'Deneme postman çalışması'
  })
})

configs.serverConfig.initialServerConfig();

const PORT = process.env.PORT;

db.mongoConnect
  .mongoConnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server", PORT, "portunda çalışıyor");
    });
  })
  .catch((e) => {
    console.log("Hata oluştu:", e.message);
  });
