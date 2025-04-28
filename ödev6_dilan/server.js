const express = require("express");
const db = require("./db/db");
const config = require("./config/server.config");
const userRouter = require("./router/user.router");
const productRouter = require("./router/product.router");
const app = express();
app.use(express.json());

config.initialServerConfig();

const PORT = process.env.PORT;

app.use("/user", userRouter.user);
app.use("/product", productRouter.product);

db.mongoConnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server", PORT, "portunda çalışıyor");
    });
  })
  .catch((e) => {
    console.log(e);
  });