const express = require("express");
<<<<<<< HEAD
const router = require("./router/router");
const db = require("./db/db");
=======
const db = require("./db/db");
const router = require("./router/router");
>>>>>>> 85d947e728a09e885b0882661940307917787dda
const app = express();

app.use(express.json());
app.use(router);
<<<<<<< HEAD
=======

>>>>>>> 85d947e728a09e885b0882661940307917787dda
db.mongooseConnection()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server 3000 portunda çalışıyor");
    });
  })
  .catch((e) => {
<<<<<<< HEAD
    console.log("Bağlantı hatası", e.message);
=======
    console.log("Bağlantı hatası:", e.message);
>>>>>>> 85d947e728a09e885b0882661940307917787dda
  });
