const baseResponse = {
  data: null,         // API yanıtında dönecek veriyi tutar. Başlangıçta null (boş).
  code: null,         // Yanıtla ilgili bir hata kodu veya statü kodu. Başlangıçta null.
  error: false,       // Hata durumu. Başlangıçta false (yani hata yok).
  success: true,      // İstek başarılı mı? Başlangıçta true (başarılı).
  timestamp: "",      // Yanıtın zaman damgası. Başlangıçta boş bir string.
  message: "",        // Yanıtla ilgili bir mesaj. Başlangıçta boş bir string.
};

module.exports = baseResponse;
