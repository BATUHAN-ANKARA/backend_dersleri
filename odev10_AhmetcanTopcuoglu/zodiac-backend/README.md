zodiac-backend-api/
├── controllers/
│   └── authController.js
├── middlewares/
│   ├── authMiddleware.js
│   └── logger.js
├── models/
│   ├── user.js
│   ├── Blog.js
├── routes/
│   ├── authRoutes.js
│   ├── blogRoutes.js
│   ├── zodiacRoutes.js
│   └── userRoutes.js
├── services/
│   ├── zodiacService.js
├── .env
├── app.js
├── package.json
└── README.md


# 🔮 Zodiac RESTful API

Bu proje, kullanıcıların burç uyumu, burç yorumları ve blog yazılarına erişebildiği, JWT ile güvenliği sağlanmış bir Node.js tabanlı REST API'dir.

## 🚀 Özellikler

- Kullanıcı Kayıt & Giriş (JWT Authentication)
- Günlük, Haftalık, Aylık ve Yıllık Burç Yorumları
- İki Burcun Uyumu Hesaplama
- Blog Yazıları Oluşturma, Listeleme, Beğenme
- Kullanıcı Şifre Değiştirme ve Bilgi Güncelleme
- Logger Middleware ile API logları
- Input Validasyonları (express-validator)
- Mongoose ile MongoDB veri yönetimi

## 🛠️ Teknolojiler

- Node.js & Express.js
- MongoDB & Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- express-validator
- dotenv

## 📦 Kurulum

```bash
git clone https://github.com/ahmetcantopcuoglu/zodiacBackend-api.git
cd zodiac-backend
npm install
cp .env.example .env  # .env dosyasını doldurun
npm start




.env Dosyası 

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=3000



📮 API Endpoint'leri
🧑‍💼 Auth
POST /api/auth/register – Kayıt

POST /api/auth/login – Giriş (token döner)

👤 Kullanıcı
PUT /api/user/updateinfo – Kullanıcı bilgilerini güncelle

PUT /api/user/changepassword – Şifre değiştir

📝 Blog
GET /api/blogs – Tüm blogları listele

POST /api/blogs – Yeni blog oluştur (Token gerekli)

POST /api/blogs/:id/like – Blog beğen (Token gerekli)

♈ Burçlar
GET /api/zodiacs – Tüm burçları getir

GET /api/zodiacs/:id/comments – Burcun yorumları

GET /api/zodiacs/compatibility?sign1=X&sign2=Y – İki burç uyumu