const router = require("express").Router();
const controller = require("../controller/controller");

router.post("/matematik/toplama", controller.toplama);
router.post("/matematik/cikartma", controller.cikartma);
router.post("/matematik/carpma", controller.carpma);
router.post("/matematik/bolme", controller.bolme);

module.exports = router;

/*
/matematik/hesapla adında bir route tanımlayın
bu routera post isteği ve get isteği yapılacak
get isteği yapılırsa merhaba post metdou ile işlemlerinizi yaptırabilirsiniz mesajı response edilecek
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
