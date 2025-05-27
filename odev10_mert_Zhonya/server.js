const express = require("express");
const db = require("./db/index");
const configs = require("./configs/index");
const router = require("./routers/index");
const middlewares = require("./middlewares/index");
const telegramService = require("./services/telegram.service");

const app = express();
app.use(express.json());

configs.serverConfig.initialServerConfig();

const PORT = process.env.PORT || 3000;

app.use(middlewares.loggerMiddleware);
app.use(middlewares.authMiddleware);

//router
app.use("/user", router.userRouter);
app.use("/blog", router.blogRouter);
app.use("/zodiac", router.zodiacRouter);
app.use("/relationship", router.relationshipRouter);
app.use("/tarot", router.tarotRouter);
telegramService.bot.launch().then(() => {
  console.log("🚀 Telegram botu aktif.");
});

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
