const express = require("express");
const db = require("./db/index");
const configs = require("./configs/index");
const { zodiacRouter, userRouter, blogRouter } = require("./routers/index");
const middlewares = require("./middlewares/index");

const app = express();
app.use(express.json());

configs.serverConfig.initialServerConfig();

const PORT = process.env.PORT || 5000;

app.use(middlewares.loggerMiddleware);
app.use(middlewares.authMiddleware);

app.use("/zodiac", zodiacRouter);
app.use("/user", userRouter);
app.use("/blog", blogRouter);

db.mongoConnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server", PORT, "portunda çalışıyor");
    });
  })
  .catch((e) => {
    console.log("Hata oluştu:", e.message);
  });
