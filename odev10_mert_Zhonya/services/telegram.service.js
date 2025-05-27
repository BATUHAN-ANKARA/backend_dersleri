require("dotenv").config();
const { Telegraf, Markup } = require("telegraf");

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const ADMIN_CHAT_ID = process.env.TELEGRAM_ADMIN_CHAT_ID;
const bot = new Telegraf(BOT_TOKEN);

async function notifyNewUser(user, totalUserCount) {
  const message = `
🟢 Yeni kullanıcı kaydı:
👤 ${user.name} ${user.surname}
📧 ${user.email}
♑ Burç: ${user.zodiacSign}
👥 Toplam kullanıcı: ${totalUserCount}
  `;

  try {
    await bot.telegram.sendMessage(ADMIN_CHAT_ID, message);
  } catch (error) {
    console.error("Telegram mesaj gönderme hatası:", error);
  }
}

async function notifyDeletedUser(user, totalUserCount) {
  const message = `
🔴 Kullanıcı silindi:
👤 ${user.name} ${user.surname}
📧 ${user.email}
👥 Güncel toplam kullanıcı: ${totalUserCount}
  `;

  try {
    await bot.telegram.sendMessage(ADMIN_CHAT_ID, message);
  } catch (error) {
    console.error("Telegram mesaj gönderme hatası:", error);
  }
}

bot.start((ctx) => {
  ctx.reply(
    "Hoş geldin! Ne yapmak istersin?",
    Markup.inlineKeyboard([
      [Markup.button.callback("🚀 Start Chat", "START_CHAT")],
      [
        Markup.button.callback("ℹ️ About", "ABOUT"),
        Markup.button.callback("❓ Help", "HELP"),
        Markup.button.callback("🛍️ Products", "PRODUCTS"),
      ],
      [Markup.button.callback("🌤 Dışarıda Ne Yapabilirim?", "OUTDOOR_IDEAS")],
    ])
  );

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

//📦 Products butonu
bot.action("PRODUCTS", async (ctx) => {
  try {
    const products = await Product.find();

    if (products.length === 0) {
      return ctx.reply("🛒 Şu anda listelenecek ürün yok.");
    }

    for (const product of products) {
      await ctx.reply(`📦 Ürün: ${product.name}\n💰 Fiyat: ${product.price}`);
    }
  } catch (error) {
    console.error("PRODUCTS action hatası:", error);
    ctx.reply("❌ Ürünler alınırken bir hata oluştu.");
  }
});

bot.action("OUTDOOR_IDEAS", async (ctx) => {
  try {
    const suggestions = [
      "🍦 Dondurmacıya git, en garip aromayı dene!",
      "📸 Şehirde turist gibi davranıp bol bol fotoğraf çek.",
      "🎯 Arkadaşına meydan oku: Kaybeden kahve ısmarlar.",
      "🎭 Sokak sanatı avına çık — grafiti ya da ilginç bir yazı bul.",
      "🛹 Kaykay, paten ya da scooter dene (düşmeden dönmek başarı sayılır).",
      "🪩 Açık hava etkinliklerini kontrol et, spontane takıl.",
      "🧃 Rastgele bir kafeye otur, 'Baristan ne önerirse onu' de.",
      "🌆 Gün batımı için yüksek bir yere çık, story atmadan dönme.",
      "🎲 Parkta bir arkadaşla taş-kağıt-makas turnuvası yap.",
      "🚲 Elektrikli scooter kirala ve mahalleyi keşfe çık.",
      "🎨 Bir defter al, dışarıda rastgele insanları karikatürize et.",
      "📚 Kitapçıya gir, kapağına bakarak rastgele bir kitap al.",
      "🎧 Kulaklığı tak, 'film müziği' açıp yürüyüşe çık (kendini başrolde hisset).",
      "🔭 Gökyüzüne bakıp bulutlardan şekiller yakala (evet çocukça ama keyifli).",
      "🎒 Küçük bir sırt çantası hazırla ve ‘mini keşif yürüyüşü’ne çık.",
      "🎮 Telefonuna artırılmış gerçeklikli (AR) bir oyun indirip şehirde oyna.",
      "🧩 Bir meydanda otur, kaç kişinin telefonla konuştuğunu say.",
      "🐦 Parka git ve kuşlara sessizce yaklaşmayı dene (doğa casusu gibi).",
      "🍿 AVM’ye gir, sadece fragmanları izlemek için sinemaya uğra.",
      "💌 Kendi kendine mektup yaz, bir bankta oturup aç okuyormuş gibi yap.",
      "🎤 Karaoke uygulaması indir, dışarıda sessiz sessiz şarkı söyle (fısıldayarak olsa da).",
      "📍 Google Maps'i aç ve yakınlarda hiç gitmediğin bir noktaya yürüyerek git.",
      "🌿 Bitki satan bir yere uğra, en 'garip' çiçeğe isim verip arkadaşın yap.",
      "🪑 Kafede en köşe masaya otur, geçen insanların hikayelerini hayal et.",
      "🧊 Soğuk bir şey al ve 5 dakika gözlerini kapatıp sadece dinle.",
      "🎲 Şehir içinde bir 'gizli görev' gibi yürüyüş yap (örneğin: kimseyle göz göze gelme).",
    ];

    // Rastgele 3 öneri seçmek için
    const randomSuggestions = suggestions
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    await ctx.reply(
      "😎 Sıkıldığını duydum, işte dışarıda yapabileceğin eğlenceli şeyler:"
    );
    for (const idea of randomSuggestions) {
      await ctx.reply(idea);
    }
  } catch (error) {
    console.error("OUTDOOR_IDEAS hatası:", error);
    ctx.reply("❌ Öneriler alınırken bir hata oluştu.");
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

module.exports = {
  bot,
  notifyNewUser,
  notifyDeletedUser,
};
