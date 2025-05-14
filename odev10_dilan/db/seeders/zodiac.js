const Zodiac = require("../../models/zodiac.model");
const db = require("../index");

const zodiacData = [
  {
    title: "Koç",
    daily: "Enerjin bugün çok yüksek.",
    weekly: "Yeni başlangıçlar yapmaya hazırsın.",
    monthly: "Bu ay hedeflerine odaklanmalısın.",
    yearly: "Büyük değişimlerin yılı olacak.",
    compatibility: {
      Boğa: "Orta",
      İkizler: "Yüksek",
      Yengeç: "Düşük",
      Aslan: "Yüksek",
      Başak: "Düşük",
      Terazi: "Orta",
      Akrep: "Düşük",
      Yay: "Yüksek",
      Oğlak: "Düşük",
      Kova: "Yüksek",
      Balık: "Düşük",
    },
  },
  {
    title: "Boğa",
    daily: "Sabırlı olman gereken bir gün.",
    weekly: "Aile içi konular ön planda olacak.",
    monthly: "Finansal olarak dikkatli olmalısın.",
    yearly: "Uzun vadeli planlar yapmalısın.",
    compatibility: {
      Koç: "Orta",
      İkizler: "Düşük",
      Yengeç: "Yüksek",
      Aslan: "Düşük",
      Başak: "Yüksek",
      Terazi: "Orta",
      Akrep: "Yüksek",
      Yay: "Düşük",
      Oğlak: "Yüksek",
      Kova: "Düşük",
      Balık: "Yüksek",
    },
  },
  {
    title: "İkizler",
    daily: "İletişim becerilerin ön planda.",
    weekly: "Yeni tanışmalar yaşayabilirsin.",
    monthly: "Eski dostluklar yeniden canlanabilir.",
    yearly: "Yaratıcılığın zirveye çıkacak.",
    compatibility: {
      Koç: "Yüksek",
      Boğa: "Düşük",
      Yengeç: "Düşük",
      Aslan: "Yüksek",
      Başak: "Orta",
      Terazi: "Yüksek",
      Akrep: "Düşük",
      Yay: "Yüksek",
      Oğlak: "Düşük",
      Kova: "Yüksek",
      Balık: "Orta",
    },
  },
  {
    title: "Yengeç",
    daily: "Duygusal bir gün seni bekliyor.",
    weekly: "Aile bağların güçlenecek.",
    monthly: "Geçmişten gelen bazı konular gündemde.",
    yearly: "Kendini yeniden bulacaksın.",
    compatibility: {
      Koç: "Düşük",
      Boğa: "Yüksek",
      İkizler: "Düşük",
      Aslan: "Orta",
      Başak: "Yüksek",
      Terazi: "Düşük",
      Akrep: "Yüksek",
      Yay: "Düşük",
      Oğlak: "Yüksek",
      Kova: "Düşük",
      Balık: "Yüksek",
    },
  },
  {
    title: "Aslan",
    daily: "Kendini güçlü ve motive hissedeceksin.",
    weekly: "Liderlik özelliklerin ön plana çıkacak.",
    monthly: "Kariyerinde yükseliş var.",
    yearly: "Hayatındaki değişimlere açık ol.",
    compatibility: {
      Koç: "Yüksek",
      Boğa: "Düşük",
      İkizler: "Yüksek",
      Yengeç: "Orta",
      Başak: "Düşük",
      Terazi: "Yüksek",
      Akrep: "Orta",
      Yay: "Yüksek",
      Oğlak: "Düşük",
      Kova: "Yüksek",
      Balık: "Düşük",
    },
  },
  {
    title: "Başak",
    daily: "Dikkatli ve planlı olman gereken bir gün.",
    weekly: "Çalışmaların meyvesini verecek.",
    monthly: "Detaylara odaklan.",
    yearly: "Düzen ve disiplin yılı olacak.",
    compatibility: {
      Koç: "Düşük",
      Boğa: "Yüksek",
      İkizler: "Orta",
      Yengeç: "Yüksek",
      Aslan: "Düşük",
      Terazi: "Orta",
      Akrep: "Yüksek",
      Yay: "Düşük",
      Oğlak: "Yüksek",
      Kova: "Orta",
      Balık: "Düşük",
    },
  },
  {
    title: "Terazi",
    daily: "Denge arayışın devam ediyor.",
    weekly: "Sosyal ilişkilerin güçlenecek.",
    monthly: "Estetik ve güzellik ön planda.",
    yearly: "Kariyerinde önemli fırsatlar var.",
    compatibility: {
      Koç: "Orta",
      Boğa: "Orta",
      İkizler: "Yüksek",
      Yengeç: "Düşük",
      Aslan: "Yüksek",
      Başak: "Orta",
      Akrep: "Düşük",
      Yay: "Yüksek",
      Oğlak: "Düşük",
      Kova: "Yüksek",
      Balık: "Düşük",
    },
  },
  {
    title: "Akrep",
    daily: "Gizli konular ortaya çıkabilir.",
    weekly: "Derin düşüncelere dalabilirsin.",
    monthly: "Hislerin güçlenecek.",
    yearly: "Dönüşüm yılı olacak.",
    compatibility: {
      Koç: "Düşük",
      Boğa: "Yüksek",
      İkizler: "Düşük",
      Yengeç: "Yüksek",
      Aslan: "Orta",
      Başak: "Yüksek",
      Terazi: "Düşük",
      Yay: "Orta",
      Oğlak: "Yüksek",
      Kova: "Düşük",
      Balık: "Yüksek",
    },
  },
];

const seedZodiacs = async () => {
  try {
    await db(); // Veritabanı bağlantısını başlatır
    await Zodiac.deleteMany({}); // Eski verileri temizler
    await Zodiac.insertMany(zodiacData); // Yeni verileri ekler
    console.log("Zodiac verileri başarıyla eklendi! ✅");
    process.exit();
  } catch (error) {
    console.error("Hata oluştu ❌: ", error.message);
    process.exit(1);
  }
};

seedZodiacs();

module.exports = zodiacData;