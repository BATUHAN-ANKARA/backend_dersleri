const express = require("express");
const db = require("./db/index");
const configs = require("./configs/index");
const router = require("./routers/index");
const app = express();
app.use(express.json());

configs.serverConfig.initialServerConfig();

const PORT = process.env.PORT;

app.use("/user", router.userRouter);
app.use("/product", router.productRouter);

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

// {
//     "_id": "661bbf3f1c9d4409e4a39f01",
//     "products": [
//       {
//         "productId": "661bbf1d1c9d4409e4a39efc",
//         "price": 150.0,
//         "quantity": 2
//       },
//       {
//         "productId": "661bbf261c9d4409e4a39efe",
//         "price": 80.0,
//         "quantity": 1
//       }
//     ],
//     "totalAmount": 380.0,
//     "paymentMethod": "Kredi Kartı",
//     "createdAt": "2025-04-14T10:00:00.000Z",
//     "updatedAt": "2025-04-14T10:00:00.000Z",
//     "__v": 0
//   }
