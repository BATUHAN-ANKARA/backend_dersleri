const zodiacSigns = [
  "Koç", "Boğa", "İkizler", "Yengeç", "Aslan", "Başak",
  "Terazi", "Akrep", "Yay", "Oğlak", "Kova", "Balık"
];

// Burç yorumları örnek veriler
const horoscopes = {
  daily: {
    "Koç": "Bugün cesaretinle öne çıkacaksın, ama acele kararlar almaktan kaçın.",
    "Boğa": "İç huzurunu korumaya odaklan, keyifli bir buluşma kapıda olabilir.",
    "İkizler": "Merak duygun seni yeni bilgilere taşıyacak, iletişime açık ol.",
    "Yengeç": "Sevdiklerine vakit ayır, duygusal paylaşımlar seni iyileştirebilir.",
    "Aslan": "Bugün kendini göstermek için harika bir gün, sahne senin!",
    "Başak": "Detaylara takılmadan ilerlemeye çalış, verimli bir gün olabilir.",
    "Terazi": "Denge arayışın seni içsel bir yolculuğa çıkarabilir.",
    "Akrep": "Gizli kalmış duygular yüzeye çıkabilir, dürüst olmalısın.",
    "Yay": "Yeni planlar yapma arzun yükselebilir, enerjini odakla.",
    "Oğlak": "Sorumluluklar ağır gelse de, kararlılığın seni ileri taşıyor.",
    "Kova": "Farklı düşüncelerini paylaşmak için uygun bir gün.",
    "Balık": "Hayal gücün zirvede, yaratıcı işlerde ilham seni bulabilir."
  },
  weekly: {
    "Koç": "Hafta boyunca liderlik vasıfların ön planda olacak, dikkat çekiyorsun.",
    "Boğa": "Yavaş ve emin adımlarla ilerlediğin sürece başarı kaçınılmaz.",
    "İkizler": "İletişim trafiğin artıyor, yeni tanışmalar seni heyecanlandırabilir.",
    "Yengeç": "Ailevi konular gündemde, geçmişle yüzleşmek seni rahatlatacak.",
    "Aslan": "İş hayatında önemli gelişmeler var, parlama zamanı.",
    "Başak": "Kariyer hedeflerine dair düzenlemeler yapma zamanı.",
    "Terazi": "Sosyal çevrende dengeyi sağlamak seni yıpratabilir, sınır koy.",
    "Akrep": "Sezgilerin güçlü, ama kin tutmamaya dikkat et.",
    "Yay": "Yolculuklar, eğitim veya yeni başlangıçlar seni bekliyor.",
    "Oğlak": "Disiplinli yapın sayesinde bu hafta işler tıkırında.",
    "Kova": "Toplumsal konulara duyarlılığın artıyor, katkı sunma isteği içindesin.",
    "Balık": "Sanatsal veya manevi uğraşlar seni ruhen doyuracak."
  },
  monthly: {
    "Koç": "Bu ay ilişkilerde dürüstlük sınanabilir, açık olmaya çalış.",
    "Boğa": "Finansal konulara odaklanarak güvenli adımlar atmalısın.",
    "İkizler": "Eğitim ve iletişim alanında fırsatlar kapını çalabilir.",
    "Yengeç": "Duygusal farkındalıkların artıyor, kişisel gelişime odaklan.",
    "Aslan": "Sosyal çevrende daha aktif olacağın bir ay seni bekliyor.",
    "Başak": "Kariyer planlarında değişiklik olabilir, esnek olmalısın.",
    "Terazi": "Aşk hayatında yeni bir sayfa açılabilir, yüreğini dinle.",
    "Akrep": "Dönüşüm sürecindesin, geçmişi geride bırakmaya hazır ol.",
    "Yay": "Hedeflerine ulaşmak için enerjin yüksek ama sabırlı olmalısın.",
    "Oğlak": "Planlı davranarak başarıya ulaşabileceğin bir ay.",
    "Kova": "Yeni fikirler üretmek seni heyecanlandıracak.",
    "Balık": "İçsel yolculuklar yapabilir, ruhsal yönden güçlenebilirsin."
  },
  yearly: {
    "Koç": "2025 yılı seni liderliğe taşıyacak, büyük kararlar yılı olabilir.",
    "Boğa": "Kararlılığın sayesinde maddi ve manevi istikrar sağlayacaksın.",
    "İkizler": "Yeni dostluklar ve fikirlerle dolu dinamik bir yıl seni bekliyor.",
    "Yengeç": "Aile ve ev konularında derin değişimler yaşayabilirsin.",
    "Aslan": "Sahneye çıkma zamanın geldi, başarı ve takdir yılı olacak.",
    "Başak": "Detaylara hakimiyetin seni başarıya götürecek.",
    "Terazi": "Aşk ve ilişkiler ön planda, dengeyi kurduğunda her şey yolunda.",
    "Akrep": "Tutkuların peşinden gitmekten çekinme, dönüşüm yılı.",
    "Yay": "Fırsatlarla dolu bu yıl, yeni keşiflere açık ol.",
    "Oğlak": "Disiplinin meyvesini verecek, yükselme dönemi.",
    "Kova": "Toplumsal katkılar ve teknoloji senin alanın olacak.",
    "Balık": "Hayal ettiklerini gerçeğe dönüştürebileceğin sihirli bir yıl."
  }
};


// Basit burç uyumu örneği (örnek tablo)
const compatibilityTable = {
  "Koç": ["Aslan", "Yay"],
  "Boğa": ["Başak", "Oğlak"],
  "İkizler": ["Terazi", "Kova"],
  "Yengeç": ["Akrep", "Balık"],
  "Aslan": ["Koç", "Yay"],
  "Başak": ["Boğa", "Oğlak"],
  "Terazi": ["İkizler", "Kova"],
  "Akrep": ["Yengeç", "Balık"],
  "Yay": ["Koç", "Aslan"],
  "Oğlak": ["Boğa", "Başak"],
  "Kova": ["İkizler", "Terazi"],
  "Balık": ["Yengeç", "Akrep"],
};

function getHoroscope(sign, period) {
  if (!horoscopes[period]) return null;
  return horoscopes[period][sign] || "Yorum bulunamadı.";
}

function getCompatibility(sign1, sign2) {
  if (!compatibilityTable[sign1]) return false;
  return compatibilityTable[sign1].includes(sign2);
}

module.exports = {
  zodiacSigns,
  getHoroscope,
  getCompatibility,
};
