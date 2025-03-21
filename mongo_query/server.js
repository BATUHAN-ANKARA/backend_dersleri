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
    console.log("Hata oluştu:", e.message);
  });

/*
---ÖDEV---
products filtreleri
1) fiyatı verilen değerden büyük veya eşit olanları döndür-- $gte
2) fiyatı verilen değerden küçük veya eşit olanları döndür-- $lte
3) fiyatı verilen değerlerden büyük veya küçük eşit olanları döndür yani range(val1, val2)-- $gte $lte
4) parametre olarak name val1 val2: ismi name olan ve range aralığı val1 val2 olanları döndür-- $eq $gte $lte
5) (and ile)stok bilgisi olan, adı name olan fiyatı range aralığında olanları döndür val1 val2-- $and $exists $eq $gte $lte
6) or ile yine 5.görev yapılacak
7) description bilgisi bulunmayan stok aralığı val1 val2 içinde olan fiyatı val3ten büyük olup name bilgisi
bulunan ürünler-- $exists $lte $gte $eq $and

bu apilerin isimleri şu şekilde olabilir sorgu1, sorgu2... şeklinde
*/