// backend/server.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const db = require("./db/index");
const configs = require("./configs/index");
const Click = require("./models/click.model");

const app = express();
app.use(express.json());

configs.serverConfig.initialServerConfig();

const PORT = process.env.PORT || 3000;


const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

io.on("connection", async (socket) => {
  console.log("Yeni istemci bağlandı:", socket.id);

  const doc = await Click.findOne();
  socket.emit("clickCount", doc?.count || 0);

  socket.on("click", async () => {
    try {
      const updated = await Click.findOneAndUpdate(
        {},
        { $inc: { count: 1 } },
        { new: true, upsert: true, setDefaultsOnInsert: true }
      );
      console.log("Yeni count:", updated.count);
      io.emit("clickCount", updated.count);
    } catch (err) {
      console.error("Click güncelleme hatası:", err);
    }
  });

  socket.on("disconnect", () => {
    console.log("İstemci ayrıldı:", socket.id);
  });
});

db.mongoConnect
  .mongoConnect()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server ${PORT} portunda çalışıyor`);
    });
  })
  .catch((e) => {
    console.error("MongoDB bağlanırken hata oluştu:", e.message);
  });
