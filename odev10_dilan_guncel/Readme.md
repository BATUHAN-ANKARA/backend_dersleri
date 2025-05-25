
# Burç ve Tarot Asistanı API

Bu proje, burç yorumları, burç uyumu, blog yazıları, kullanıcı yönetimi ve tarot falı hizmetlerini sağlayan kapsamlı bir RESTful API sunar. Aynı zamanda Telegram bot entegrasyonu ile anlık bildirim ve tarot falı deneyimi sağlar.

---

## İçindekiler

- [Genel Bakış](#genel-bakış)  
- [Özellikler](#özellikler)  
- [Kurulum](#kurulum)  
- [API Endpoints](#api-endpoints)  
- [Kullanıcı Yönetimi](#kullanıcı-yönetimi)  
- [Burç Yorumları](#burç-yorumları)  
- [Burç Uyumu](#burç-uyumu)  
- [Blog](#blog)  
- [Tarot Falı](#tarot-falı)  
- [Telegram Bot](#telegram-bot)  
- [Validasyonlar ve Güvenlik](#validasyonlar-ve-güvenlik)  
- [İletişim](#iletişim)  

---

## Genel Bakış

Bu API ile kullanıcılar:

- Günlük, haftalık, aylık ve yıllık burç yorumlarına erişebilir.  
- İki burcun uyumluluğunu sorgulayabilir ve uyumluluk kaydı oluşturabilir.  
- Blog yazılarını görüntüleyebilir ve yorumlayabilir.  
- Kullanıcı kayıt, giriş, şifre değiştirme ve profil güncelleme işlemlerini gerçekleştirebilir.  
- Tarot falı için üç kart seçerek anlamlarını öğrenebilir.  
- Telegram bot aracılığıyla yeni kullanıcı kayıtları ve silme işlemleri hakkında anlık bildirimler alabilir.

---

## Özellikler

- Kullanıcı yönetimi (kayıt, giriş, şifre değişikliği, profil güncelleme).  
- Burç yorumları: günlük, haftalık, aylık, yıllık.  
- Burç uyumu kayıtları oluşturma, güncelleme, silme ve sorgulama.  
- Blog sistemi (yazı ekleme, listeleme, güncelleme, silme).  
- Beğeni sistemi (blog, burç yorumları, uyumlar için).  
- Tarot falı servisi ve modeli.  
- Telegram bot entegrasyonu ile bildirimler.  
- Validasyonlar, hata yönetimi ve güvenlik önlemleri.  

---

## Kurulum

1. Depoyu klonlayın:  
```bash
git clone https://github.com/dilanderegozu/project-name.git
```

2. Bağımlılıkları yükleyin:  
```bash
npm install
```

3. `.env` dosyasını oluşturup gerekli ayarları yapın (MongoDB URI, Telegram Bot Token vs.)

4. Sunucuyu başlatın:  
```bash
npm start
```

---

## API Endpoints

### Kullanıcı  
- `POST /api/user/register` — Kayıt ol  
- `POST /api/user/login` — Giriş yap  
- `PUT /api/user/updateUserInfo` — Kullanıcı bilgilerini güncelle  
- `PUT /api/user/changePassword` — Şifre değiştir  

### Burç Yorumları  
- `POST /api/zodiac/postDaily` — Günlük yorum ekle  
- `POST /api/zodiac/postWeekly` — Haftalık yorum ekle  
- `POST /api/zodiac/postMonthly` — Aylık yorum ekle  
- `POST /api/zodiac/postYearly` — Yıllık yorum ekle  
- `GET /api/zodiac/getDaily/:zodiacSign` — Günlük yorumu al  

### Burç Uyumu  
- `POST /api/compatibility/createCompatibility` — Uyumluluk kaydı oluştur  
- `GET /api/compatibility/getCompatibilityBetween/:primaryZodiacSign/:secondaryZodiacSign` — İki burcun uyumunu al  

### Blog  
- `POST /api/blog/create` — Blog yazısı oluştur  
- `GET /api/blog/all` — Tüm blogları listele  
- `PUT /api/blog/update/:id` — Blog güncelle  
- `DELETE /api/blog/delete/:id` — Blog sil  

### Tarot Falı  
- `POST /api/tarot/create` — Tarot kartı ekle  
- `GET /api/tarot/randomThree` — Üç rastgele tarot kartı getir  

---

## Telegram Bot

- Kullanıcı kayıt ve silme işlemlerinde Telegram grubuna/kişiye anlık bildirim gönderir.  
- Tarot falı için seçilen kartların anlamlarını kullanıcılara gösterir.  
- Toplam kullanıcı sayısını takip eder.

---

## Validasyonlar ve Güvenlik

- Gerekli tüm API'lerde kapsamlı input validasyonu.  
- JWT tabanlı kimlik doğrulama ve yetkilendirme.  
- Hata yönetimi ve anlamlı API cevapları.  

---

## İletişim

**Proje Sahibi:**  
Dilan Deregözü  
GitHub: [https://github.com/dilanderegozu](https://github.com/dilanderegozu)  



Teşekkürler!
