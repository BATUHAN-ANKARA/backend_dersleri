/*
/matematik/hesapla adında bir route tanımlayın
bu routera post isteği ve get isteği yapılacak
get isteği yapılırsa merhaba post metodu ile işlemlerinizi yaptırabilirsiniz mesajı response edilecek
post metodunda body içerisinde şu bilgiler olacak
sayi1, sayi2, islem
islem değişkeni şunlar olabilir (toplama, çıkartma, çarpma, bölme)
hangi tip işlem geldiyse ilgili sayılara o işlem yapılıp sonucu response edilecek
sayılar eksik veya hatalı mı? sayılar number tipinde mi? islem string tipinde mi? islem olmayan bir işlem mi?
bu kontroller de yapılacak ve ona göre response hazırlanacak
tek bir fonksiyonunuz olmalı adını calculate veya hesapla diyebilirsiniz

/matematik/faktoriyel
bu route için de iki tane metod kabul edilecek post ve get
eğer get isteği yapılırsa cevap olarak faktoriyelin tanımını döndüreceksiniz
post isteği için bir sayi değeri alacaksınız body içerisinden
bu sayinin tipini, negatif olma durumunu, eksik veya hatalı olma durumunu kontrol edin ve response ayarlayın bunlara göre
eğer kontrollerden geçerse ilgili sayının faktoriyelini for döngüsü ile veya dış bir recursive fonksiyon ile hesaplayın
sonucu response ederken her işlem için ayrı tanım yapın örneğin toplam: sonuc faktroiyel: sonuc gibi 
*/

const calculate = (req, res) => {
  const { sayi1, sayi2, islem } = req.body;
  if (sayi1 != null && sayi2 != null && islem != null) {
    if (
      typeof sayi1 != "number" ||
      typeof sayi2 != "number" ||
      typeof islem != "string"
    ) {
      res.json({
        error: true,
        success: false,
        errorMessage: "Lütfen doğru veri tipinde veri girişi yapın",
      });
    } else {
      if (islem === "toplama") {
        res.json({ success: true, error: false, result: sayi1 + sayi2 });
      } else if (islem === "çıkartma") {
        res.json({ success: true, error: false, result: sayi1 - sayi2 });
      } else if (islem === "çarpma") {
        res.json({ success: true, error: false, result: sayi1 * sayi2 });
      } else if (islem === "bölme") {
        sayi2 === 0
          ? res.json({
              error: true,
              success: false,
              errorMEssage: "Bölen sayı sıfır olamaz",
            })
          : res.json({
              success: true,
              error: false,
              result: sayi1 / sayi2,
            });
      } else {
        res.json({
          error: true,
          success: false,
          errorMessage: "Eksik veya hatalı veri girişi",
        });
      }
    }
  } else {
    res.json({
      error: true,
      success: false,
      errorMessage: "Eksik veya hatalı veri girişi",
    });
  }
};

const infoCalculate = (req, res) => {
  res.json({
    success: true,
    error: false,
    message: "Merhaba post metodu ile işlemlerinizi yaptırabilirsiniz.",
  });
};

const faktoriyel = (req, res) => {
  const { sayi } = req.body;
  if (sayi != null) {
    if (typeof sayi === "number") {
      if (sayi < 0) {
        res.json({
          error: true,
          success: false,
          errorMessage: "Lütfen negatif sayı girişi yapmayın",
        });
      } else {
        let carpim = 1;
        for (let index = 1; index <= sayi; index++) {
          carpim *= index;
        }
        res.json({ success: true, error: false, result: carpim });
      }
    } else {
      res.json({
        error: true,
        success: false,
        errorMessage: "Lütfen sayı tipinde veri girin",
      });
    }
  } else {
    res.json({
      error: true,
      success: false,
      errorMessage: "Eksik veya hatalı veri girişi",
    });
  }
};

const infoFaktoriyel = (req, res) => {
  res.json({
    success: true,
    error: false,
    message:
      "bir sayının 'bir önceki' ile 'bir öncekinin' vs. vs. şeklinde 1 olana kadar çarpılmasıdır",
  });
};

module.exports = {
  calculate,
  infoCalculate,
  faktoriyel,
  infoFaktoriyel,
};
