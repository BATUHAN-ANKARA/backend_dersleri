require("dotenv").config();
const { Telegraf, Markup, session } = require("telegraf");

const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.use(session());

const sendMessage = async (message) => {
  try {
    await bot.telegram.sendMessage(CHAT_ID, message);
  } catch (error) {
    console.error("Telegram'a mesaj gönderilemedi:", error.message);
  }
};

const tarotDeck = [
  {
    name: "The Fool (0)",
    upright:
      "Yeni bir başlangıca adım atma cesareti, macera ruhu ve sınırsız olasılıklar. The Fool, yaşam yolculuğunun ilk adımıdır; heyecan, saflık ve dünyaya açık bir kalbi temsil eder.",
    reversed:
      "Düşüncesizce risk alma, hazırlıksız olma ve potansiyel tehlikeleri göz ardı etme. Belirsizlik ve yönsüzlükle hareket etmek ciddi sonuçlar doğurabilir.",
  },
  {
    name: "The Magician (I)",
    upright:
      "Yaratıcılık, irade gücü ve kaynakları en iyi şekilde kullanma yeteneği. The Magician, içsel gücünü kullanarak hedeflerine ulaşabilecek potansiyele sahip olduğunu hatırlatır.",
    reversed:
      "Manipülasyon, hile ve enerjinin boşa harcanması. Kaynaklarını kötüye kullanma veya yeteneklerini yanlış amaçlar için kullanma eğilimi olabilir.",
  },
  {
    name: "The High Priestess (II)",
    upright:
      "Bilinçaltının bilgeliği, sezgisel güç ve gizemli sırların varlığı. Bu kart, yüzeyin altında daha derin gerçeklerin olduğunu gösterir.",
    reversed:
      "İçsel sese kulak vermemek, sezgiyi reddetmek veya bastırmak. Gerçeklerden kaçma ve yüzeysellik içinde kaybolma anlamına gelebilir.",
  },
  {
    name: "The Empress (III)",
    upright:
      "Bolluk, doğurganlık, yaratıcı güç ve besleyici enerji. The Empress, doğa ile uyumlu yaşamı ve sevgi dolu bir anneyi simgeler.",
    reversed:
      "Aşırı sahiplenme, aşırı koruma ve yaratıcı tıkanıklık. Kendi ihtiyaçlarını ihmal ederek başkalarını ön plana koymak yorucu olabilir.",
  },
  {
    name: "The Emperor (IV)",
    upright:
      "Otorite, yapı, kararlılık ve koruyucu liderlik. Güvenilir bir baba figürü ya da yaşamda güçlü temeller kurmakla ilgilidir.",
    reversed:
      "Diktatörlük eğilimleri, aşırı kontrol arzusu ve esneklikten uzak bir tutum. Kuralcılıkla başkalarını bastırma tehlikesi vardır.",
  },
  {
    name: "The Hierophant (V)",
    upright:
      "Geleneksel değerler, ruhsal rehberlik ve toplumsal yapılar. Bilgelik arayışı ve kurumsal bilgeliğe yöneliş anlamına gelir.",
    reversed:
      "Körü körüne geleneklere bağlanmak, ruhsal özgürlüğü bastırmak veya kurallara isyan etmek. Bireysel düşünceye ihtiyaç duyulabilir.",
  },
  {
    name: "The Lovers (VI)",
    upright:
      "Aşk, uyum, derin bağlantılar ve önemli kararlar. Hem romantik ilişkileri hem de etik seçimleri temsil eder.",
    reversed:
      "Uyumsuzluk, kararsızlık ve ilişkilerde çatışma. Seçim yaparken duygusal karmaşa veya yanlış yönlendirme olabilir.",
  },
  {
    name: "The Chariot (VII)",
    upright:
      "Kararlılık, zafer ve irade gücü ile zorlukların üstesinden gelmek. Kontrol sizde ve doğru yöndesiniz.",
    reversed:
      "Kontrol kaybı, sabırsızlık veya yön kaybı. İçsel çatışmalar başarıyı engelleyebilir.",
  },
  {
    name: "Strength (VIII)",
    upright:
      "İçsel güç, sabır ve zarif bir cesaret. Gerçek güç, yumuşaklıkla kontrol etme ve kendini disiplin altına alma yeteneğidir.",
    reversed:
      "Korkularla yüzleşememek, kendine güven eksikliği veya aceleci davranışlar. İç gücün zayıfladığı bir dönem olabilir.",
  },
  {
    name: "The Hermit (IX)",
    upright:
      "İçe dönüş, yalnızlık ve ruhsal bilgelik arayışı. Kendini tanıma sürecinde bir duraklama ve içsel ışığı bulma arzusu.",
    reversed:
      "Aşırı içe kapanma, sosyal izolasyon ve rehberlik eksikliği. Yalnızlık olumsuz bir alışkanlığa dönüşebilir.",
  },
  {
    name: "Wheel of Fortune (X)",
    upright:
      "Kaderin döngüleri, şanslı olaylar ve hayatın dönüm noktaları. Her şey değişim içindedir.",
    reversed:
      "Ters giden şans, kontrol dışı olaylar veya kötü döngülerde sıkışma. Değişime direnç, öğrenilmesi gereken dersi engeller.",
  },
  {
    name: "Justice (XI)",
    upright:
      "Adalet, dürüstlük ve ahlaki karar verme. Sebep-sonuç ilişkisi ve adil olmanın sonuçları.",
    reversed:
      "Adaletsizlik, yanlış yargılamalar ve hesap verememe. Gerçeklerle yüzleşmekten kaçma olabilir.",
  },
  {
    name: "The Hanged Man (XII)",
    upright:
      "Bekleyiş, bakış açısını değiştirme ve fedakarlık. İlerlemek için önce durmak gerekebilir.",
    reversed:
      "Direnç, teslim olamama ve gelişimi geciktirme. Yeni bir bakış açısına direnmek sorunları derinleştirebilir.",
  },
  {
    name: "Death (XIII)",
    upright:
      "Büyük bir dönüşüm, eski bir döngünün kapanması ve yeniden doğuş. Ölüm bir son değil, yeniden başlama şansıdır.",
    reversed:
      "Değişime direnç, bırakılması gereken şeylere tutunma. Süreci uzatmak acıyı artırabilir.",
  },
  {
    name: "Temperance (XIV)",
    upright:
      "Denge, uyum ve sabırla ilerleme. Farklı unsurların birleşimiyle içsel barış sağlanır.",
    reversed:
      "Aşırılık, dengesizlik ve uyumsuzluk. Acelecilik, ilişkilerde gerginlik yaratabilir.",
  },
  {
    name: "The Devil (XV)",
    upright:
      "Bağımlılıklar, tutkular, sınırlamalar. Kendini zincirlenmiş hissetmek ve karanlık arzularla yüzleşmek.",
    reversed:
      "Bağımlılıklardan kurtulma, özgürleşme ve kendini yeniden tanıma. Zincirleri kırmak için bir fırsat olabilir.",
  },
  {
    name: "The Tower (XVI)",
    upright:
      "Ani yıkım, beklenmeyen olaylar ve sarsıcı gerçekler. Eski yapılar yıkılarak yerlerine yenileri gelebilir.",
    reversed:
      "İçsel çöküş, değişimi geciktirme veya kaçınılmaz olanı reddetme. Direnç daha fazla acı yaratabilir.",
  },
  {
    name: "The Star (XVII)",
    upright:
      "Umut, ilham ve ruhsal yenilenme. Zor bir dönemden sonra gelen huzur ve iyileşme.",
    reversed:
      "Hayal kırıklığı, inanç kaybı ve yönsüzlük. İçsel ışığını kaybetmiş hissetme durumu olabilir.",
  },
  {
    name: "The Moon (XVIII)",
    upright:
      "Sezgiler, hayaller ve gizem. Gerçeklerin bulanık olduğu, karmaşa içeren bir dönem.",
    reversed:
      "Gerçeklerin ortaya çıkışı, kafa karışıklığının sona ermesi. Sis perdesi kalkmaya başlıyor olabilir.",
  },
  {
    name: "The Sun (XIX)",
    upright:
      "Başarı, mutluluk, netlik ve yaşam sevinci. Çocuk gibi saf ve içten bir mutluluk dönemi.",
    reversed:
      "Gecikmiş başarı, aşırı iyimserlik veya yüzeysel neşe. Gerçek mutluluğa ulaşmak için içsel netlik gerekebilir.",
  },
  {
    name: "Judgement (XX)",
    upright:
      "Uyanış, hesaplaşma ve ruhsal çağrı. Geçmişle yüzleşme ve yeniden doğuş fırsatı.",
    reversed:
      "Kendini affedememek, geçmişe takılmak ve değişimi reddetmek. Özeleştiri yapmaktan kaçınmak gelişimi engeller.",
  },
  {
    name: "The World (XXI)",
    upright:
      "Tamamlanma, başarı ve bütünlük. Uzun bir yolculuğun sonunda gelen ödül ve evrensel denge.",
    reversed:
      "Bitmemiş işler, eksik kalan adımlar veya sonuca ulaşamama. Kapanmamış bir döngü içinde olabilir.",
  },
];

const positions = ["Geçmiş", "Şimdi", "Gelecek"];

function randomCard() {
  const card = tarotDeck[Math.floor(Math.random() * tarotDeck.length)]; //gbtden aldım
  const isReversed = Math.random() < 0.5;
  return {
    cardName: card.name,
    orientation: isReversed ? "Ters" : "Dik",
    description: isReversed ? card.reversed : card.upright,
  };
}

bot.start((ctx) => {
  const chatId = ctx.chat.id;
  const name = ctx.from.first_name;

  console.log(`📩 Yeni kullanıcı: ${name} - Chat ID: ${chatId}`);

  ctx.reply(
    `👋 Merhaba ${name}!\n\n` +
      `Ben burç ve tarot asistanınızım 🔮\n` +
      `💬 Chat ID’nizi sistemimize kaydettik: \`${chatId}\`\n\n` +
      `🧭 Artık burç yorumları, tarot falı ve daha fazlası için hazırsınız!\nNe yapmak istersiniz?`,
    Markup.inlineKeyboard([
      [
        Markup.button.callback(
          "🔮 Tarot Falı Baktırmak İstiyorum",
          "TAROT_FALI"
        ),
      ],
      [Markup.button.callback("ℹ️ Bilgi", "BILGI")],
    ])
  );
});

bot.action("TAROT_FALI", async (ctx) => {
  try {
    await ctx.answerCbQuery();

    if (!ctx.session) ctx.session = {};
    if (ctx.session.tarotStep === undefined) ctx.session.tarotStep = 0;
    if (ctx.session.tarotStep >= positions.length) {
      ctx.session.tarotStep = 0;
      return ctx.reply(
        "✨ Tarot falınız tamamlandı. Başka bir şey yapmak ister misiniz?",
        Markup.inlineKeyboard([
          [
            Markup.button.callback(
              "🔮 Tarot Falı Baktırmak İstiyorum",
              "TAROT_FALI"
            ),
          ],
          [Markup.button.callback("ℹ️ Bilgi", "BILGI")],
        ])
      );
    }

    const currentPosition = positions[ctx.session.tarotStep];
    const card = randomCard();

    const message = `🃏 *${currentPosition}*\nKart: *${card.cardName}* (${card.orientation})\n\n${card.description}`;
    const isLast = ctx.session.tarotStep === positions.length - 1;
    const buttons = Markup.inlineKeyboard([
      [
        Markup.button.callback(
          isLast ? "Falı Bitir" : "Sonraki Kart →",
          "TAROT_FALI"
        ),
      ],
    ]);

    await ctx.reply(message, {
      parse_mode: "Markdown",
      reply_markup: buttons.reply_markup,
    });

    ctx.session.tarotStep++;
  } catch (error) {
    console.error("🔴 Tarot falı hatası:", error.message);
  }
});

bot.action("BILGI", (ctx) => {
  ctx.answerCbQuery();
  ctx.reply(
    "Bu bot burç ve tarot falı hizmeti vermektedir. Yardım için iletişime geçebilirsiniz."
  );
});

bot.launch().then(() => {
  console.log("🚀 Telegram botu aktif.");
});

module.exports = { bot, sendMessage };
