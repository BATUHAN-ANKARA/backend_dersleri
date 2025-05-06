require("dotenv").config();
const { Telegraf, Markup } = require("telegraf");
const Product = require("../models/product.model");

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const bot = new Telegraf(BOT_TOKEN);

// /start komutu: Inline butonlar + isteğe bağlı konum paylaşım tuşu
bot.start((ctx) => {
  ctx.reply(
    "Hoş geldin! Ne yapmak istersin?",
    Markup.inlineKeyboard([
      [Markup.button.callback("🚀 Start Chat", "START_CHAT")],
      [
        Markup.button.callback("ℹ️ About", "ABOUT"),
        Markup.button.callback("❓ Help", "HELP"),
        Markup.button.callback("📦 Products", "PRODUCTS"),
      ],
    ])
  );

  // Konum paylaşımı için alt klavye (isteğe bağlı)
  ctx.reply(
    "Eğer konumunu paylaşmak istersen aşağıdaki butonu kullanabilirsin 👇",
    Markup.keyboard([
      [Markup.button.locationRequest("📍 Konumumu Paylaş")],
    ]).resize()
  );
});

// 🚀 Start Chat butonu
bot.action("START_CHAT", (ctx) => {
  const user = ctx.from;
  console.log("📋 Kullanıcı Bilgileri:", {
    id: user.id,
    username: user.username,
    first_name: user.first_name,
    last_name: user.last_name,
    language_code: user.language_code,
  });
  ctx.reply(`Merhaba ${user.first_name || "Kullanıcı"}! Sohbet başlatıldı ✅`);
});

// ℹ️ About butonu
bot.action("ABOUT", (ctx) => {
  ctx.reply(
    "📄 Lorem ipsum dolor sit amet, consectetur adipiscing elit. (About içeriği)"
  );
});

// ❓ Help butonu
bot.action("HELP", (ctx) => {
  ctx.reply(
    "🆘 Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Help içeriği)"
  );
});

bot.action("PRODUCTS", async (ctx) => {
  try {
    const products = await Product.find();
    if (products.length===0) {
      await ctx.reply("📦şu anda hiç ürün bulunmuyor.");
      return
    }
    const productList = products.map((p,index)=>`#${index + 1} ➡️ ${p.name} - ${p.price}₺`).join("\n");
    await ctx.reply(`📦 Ürünler:\n\n${productList}`);
  } catch (error) {
    console.error("Ürünleri çekerken hata:", error);
    await ctx.reply("❌ Ürünler listelenemedi, lütfen daha sonra tekrar deneyin.");
  }
});

// 📍 Konum mesajı yakalama
bot.on("location", (ctx) => {
  const location = ctx.message.location;
  console.log("📍 Kullanıcı konum gönderdi:", {
    latitude: location.latitude,
    longitude: location.longitude,
  });

  ctx.reply(
    `Teşekkürler! Konumun alındı ✅\nLat: ${location.latitude}, Lon: ${location.longitude}`
  );
});

// Export edilen sadece bot nesnesi
module.exports = {
  bot,
};
