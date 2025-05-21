# ASTRO

**ASTRO API**, burçlar ve kullanıcı etkileşimleri üzerine geliştirilmiş, Node.js ve MongoDB tabanlı bir RESTful servis sağlar. Bu proje, burç verilerini ve aralarındaki uyumları yönetmek isteyen uygulamalar için altyapı sunar.

## 🔮 Özellikler

- Burç bilgilerini oluşturma, listeleme, güncelleme
- Burçlar arası uyum verisi oluşturma, silme ve düzenleme
- Blog içerikleri oluşturma ve silme
- Kullanıcıların beğendiği blogların takibi
- Mongoose ile şemaya dayalı veri modelleme
- REST mimarisine uygun endpoint yapısı

## 🛠️ Kullanılan Teknolojiler

- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv
- REST API

## 🚀 Kurulum

### 1. Repoyu klonla:

```bash
git clone https://github.com/kullaniciadi/zhonya-backend.git
cd zhonya-backend
```

### 2. Bağımlılıkları yükle:

```bash
npm install
```

### 3. Ortam değişkenlerini tanımla (`.env`):

```
MONGO_URI=<MongoDB bağlantı URI>
PORT=3000
```

### 4. Uygulamayı başlat:

```bash
npm start
```
