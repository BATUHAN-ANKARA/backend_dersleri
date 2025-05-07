require("dotenv").config();
const { Telegraf, Markup } = require("telegraf");

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

const bot = new Telegraf(BOT_TOKEN);

const classKeyboard = Markup.inlineKeyboard([
  [Markup.button.callback("📍 101", "CLASS_101")],
  [Markup.button.callback("📍 102", "CLASS_102")],
  [Markup.button.callback("📍 103", "CLASS_103")],
  [Markup.button.callback("📍 104", "CLASS_104")],
  [Markup.button.callback("📍 105", "CLASS_105")],
  [Markup.button.callback("📍 106", "CLASS_106")],
  [Markup.button.callback("📍 107", "CLASS_107")],
  [Markup.button.callback("📍 108", "CLASS_108")],
  [Markup.button.callback("📍 109", "CLASS_109")],
  [Markup.button.callback("📍 110", "CLASS_110")],
  [Markup.button.callback("📍 111", "CLASS_111")],
]);

const lessonKeyboard = Markup.inlineKeyboard([
  [Markup.button.callback("📘 Analiz I", "LESSON_ANALYSIS_I")],
  [Markup.button.callback("📘 Analiz II", "LESSON_ANALYSIS_II")],
  [Markup.button.callback("📘 Bilgisayara Giriş A", "LESSON_COMPUTER_INTRO_A")],
  [Markup.button.callback("📘 Bilgisayara Giriş B", "LESSON_COMPUTER_INTRO_B")],
  [Markup.button.callback("📘 Kariyer Planlama", "LESSON_CAREER_PLANNING")],
  [Markup.button.callback("📘 Matematiksel Programlama", "LESSON_MATHEMATICAL_PROGRAMMING")],
  [Markup.button.callback("📘 Lineer Cebir I", "LESSON_LINEAR_ALGEBRA_I")],
  [Markup.button.callback("📘 Lineer Cebir II", "LESSON_LINEAR_ALGEBRA_II")],
  [Markup.button.callback("📘 Soyut Matematik I", "LESSON_ABSTRACT_MATH_I")],
  [Markup.button.callback("📘 Soyut Matematik II", "LESSON_ABSTRACT_MATH_II")],
  [Markup.button.callback("📘 Fiziğe Giriş I", "LESSON_PHYSICS_INTRO_I")],
  [Markup.button.callback("📘 Analiz III", "LESSON_ANALYSIS_III")],
  [Markup.button.callback("📘 Analitik Geometri I", "LESSON_ANALYTIC_GEOMETRY_I")],
  [Markup.button.callback("📘 Fiziğe Giriş II", "LESSON_PHYSICS_INTRO_II")],
  [Markup.button.callback("📘 Analiz IV", "LESSON_ANALYSIS_IV")],
  [Markup.button.callback("📘 Analitik Geometri II", "LESSON_ANALYTIC_GEOMETRY_II")],
  [Markup.button.callback("📘 Diferansiyel Denklemler I", "LESSON_DIFFERENTIAL_EQUATIONS_I")],
  [Markup.button.callback("📘 Diferansiyel Denklemler II", "LESSON_DIFFERENTIAL_EQUATIONS_II")],
  [Markup.button.callback("📘 Olasılık Ve İstatistik", "LESSON_PROBABILITY_STATISTICS")],
  [Markup.button.callback("📘 Metrik Uzaylar", "LESSON_METRIC_SPACES")],
  [Markup.button.callback("📘 Kompleks Fonksiyonlar Teorisi I", "LESSON_COMPLEX_FUNCTIONS_THEORY_I")],
  [Markup.button.callback("📘 Kompleks Fonksiyonlar Teorisi II", "LESSON_COMPLEX_FUNCTIONS_THEORY_II")],
  [Markup.button.callback("📘 Diferansiyel Geometri I", "LESSON_DIFFERENTIAL_GEOMETRY_I")],
  [Markup.button.callback("📘 Diferansiyel Geometri II", "LESSON_DIFFERENTIAL_GEOMETRY_II")],
  [Markup.button.callback("📘 Kısmi Türevli Dif. Denklemler", "LESSON_PARTIAL_DIFFERENTIAL_EQUATIONS")],
  [Markup.button.callback("📘 Sayılar Teorisi", "LESSON_NUMBER_THEORY")],
  [Markup.button.callback("📘 Topoloji", "LESSON_TOPOLOGY")],
  [Markup.button.callback("📘 Soyut Cebir", "LESSON_ABSTRACT_ALGEBRA")],
  [Markup.button.callback("📘 Python ile Matematik", "LESSON_MATH_WITH_PYTHON")],
  [Markup.button.callback("📘 Web Tasarım", "LESSON_WEB_DESIGN")],
  [Markup.button.callback("📘 Uygulamalı Matematiğin Metodları I", "LESSON_APPLIED_MATH_METHODS_I")],
  [Markup.button.callback("📘 Fourier Analizi", "LESSON_FOURIER_ANALYSIS")],
  [Markup.button.callback("📘 Algoritma Geliştirme", "LESSON_ALGORITHM_DEVELOPMENT")],
  [Markup.button.callback("📘 Diferansiyel Denklemlerde Sayısal Çözümler", "LESSON_NUMERICAL_SOLUTIONS_DIFF_EQUATIONS")],
  [Markup.button.callback("📘 Cebirsel Topoloji", "LESSON_ALGEBRAIC_TOPOLOGY")],
  [Markup.button.callback("📘 Graf Teoriye Giriş", "LESSON_INTRO_TO_GRAPH_THEORY")],
  [Markup.button.callback("📘 Uygulamalı Geometriye Giriş", "LESSON_INTRO_TO_APPLIED_GEOMETRY")],
  [Markup.button.callback("📘 Fonksiyonel Analize Giriş", "LESSON_INTRO_TO_FUNCTIONAL_ANALYSIS")],
  [Markup.button.callback("📘 İntegral Dönüşümler", "LESSON_INTEGRAL_TRANSFORMS")],
  [Markup.button.callback("📘 Eğitime Giriş", "LESSON_INTRO_TO_EDUCATION")],
  [Markup.button.callback("📘 Eğitim Psikolojisi", "LESSON_EDUCATIONAL_PSYCHOLOGY")],
  [Markup.button.callback("📘 Sınıf Yönetimi", "LESSON_CLASS_MANAGEMENT")]
]);

bot.start((ctx) => {
  ctx.reply(
    "Uludağ Üniversitesi Matematik Bölümü Dijital Yoklama Sistemine Hoş geldin! Ne yapmak istersin?",
    Markup.inlineKeyboard([
      [Markup.button.callback("🚀Yoklamayı Başlat", "START_ATTENDANCE")],
      [Markup.button.callback("ℹ️About", "ABOUT")],
      [Markup.button.callback("❓Help", "HELP")],
    ])
  );
});

bot.action("START_ATTENDANCE", (ctx) => {
  ctx.reply("Lütfen ilgili sınıfınızı seçiniz:", classKeyboard);
});

bot.action("CLASS_101", (ctx) => {
  ctx.reply("101 numaralı sınıf seçildi. Şimdi dersinizi seçin:", lessonKeyboard);
});
bot.action("CLASS_102", (ctx) => {
  ctx.reply("102 numaralı sınıf seçildi. Şimdi dersinizi seçin:", lessonKeyboard);
});
bot.action("CLASS_103", (ctx) => {
  ctx.reply("103 numaralı sınıf seçildi. Şimdi dersinizi seçin:", lessonKeyboard);
});
bot.action("CLASS_104", (ctx) => {
  ctx.reply("104 numaralı sınıf seçildi. Şimdi dersinizi seçin:", lessonKeyboard);
});
bot.action("CLASS_105", (ctx) => {
  ctx.reply("105 numaralı sınıf seçildi. Şimdi dersinizi seçin:", lessonKeyboard);
});
bot.action("CLASS_106", (ctx) => {
  ctx.reply("106 numaralı sınıf seçildi. Şimdi dersinizi seçin:", lessonKeyboard);
});
bot.action("CLASS_107", (ctx) => {
  ctx.reply("107 numaralı sınıf seçildi. Şimdi dersinizi seçin:", lessonKeyboard);
});
bot.action("CLASS_108", (ctx) => {
  ctx.reply("108 numaralı sınıf seçildi. Şimdi dersinizi seçin:", lessonKeyboard);
});
bot.action("CLASS_109", (ctx) => {
  ctx.reply("109 numaralı sınıf seçildi. Şimdi dersinizi seçin:", lessonKeyboard);
});
bot.action("CLASS_110", (ctx) => {
  ctx.reply("110 numaralı sınıf seçildi. Şimdi dersinizi seçin:", lessonKeyboard);
});
bot.action("CLASS_111", (ctx) => {
  ctx.reply("111 numaralı sınıf seçildi. Şimdi dersinizi seçin:", lessonKeyboard);
});

bot.action("ABOUT", (ctx) => {
  ctx.reply(
    "Bu bot, Uludağ Üniversitesinde dijital yoklama sistemini kolaylaştırmak amacıyla geliştirilmiştir. Herhangi bir sorunuz için yardım alabilirsiniz."
  );
});

bot.action("HELP", (ctx) => {
  ctx.reply(
    'Botu kullanmak için "Yoklamayı Başlat" butonuna tıklayarak sınıfınızı seçebilirsiniz. Seçiminizden sonra yoklama işlemi başlatılacaktır.'
  );
});

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

module.exports = { bot };
