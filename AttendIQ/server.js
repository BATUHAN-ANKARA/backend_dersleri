const express = require("express");
const db = require("./db/index");
const configs = require("./configs/index");
const router = require("./routers/index");
const app = express();
app.use(express.json());

app.use("/student", router.student);
app.use("/teacher", router.teacher);
app.use("/lecture", router.lecture);
app.use("/attendance", router.attendance);

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
