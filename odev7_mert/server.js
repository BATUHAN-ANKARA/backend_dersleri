const express = require("express");
const db = require("./db/index");
const config = require("./config/index");
const router = require("./routers/index");
const app = express();
app.use(express.json());

config.serverConfig.initialServerConfig();

const PORT = process.env.PORT;

app.use("/user", router.userRouter);
app.use("/product", router.productRouter);

db.db
  .mongoConnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server", PORT, "portunda çalışıyor");
    });
  })
  .catch((e) => {
    console.log("Hata oluştu:", e.message);
  });
