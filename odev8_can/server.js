const express = require("express");
const db = require("./db/index");
const configs = require("./configs/index");
const router = require("./routers/index");
const app = express();
app.use(express.json());

configs.serverConfig.initialServerConfig();

const PORT = process.env.PORT;

app.use("/admin", router.adminRouter);
app.use("/blog", router.blogRouter);
app.use("/category", router.categoryRouter);
app.use("/comment", router.commentRouter);
app.use("/product",router.productRouter);
app.use("/sale",router.saleRouter);
app.use("/user",router.userRouter);



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
