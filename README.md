# Backend Dersleri

Bu repo, **2024-2025 Açık Atölye Backend Sınıfı** kapsamında yazılmış kodları içermektedir. 
Backend geliştirme konusunda pratik yapmak ve modern web teknolojilerini öğrenmek isteyenler için hazırlanmıştır. 

Bu proje, **Node.js** ve **MongoDB** kullanarak RESTful API geliştirmeye odaklanmaktadır.

## 📌 Proje Yapısı

Proje aşağıdaki klasör ve dosya yapısına sahiptir:

```
backend_dersleri/

│   ├── controllers/      # İş mantığını yöneten controller dosyaları
│   ├── models/           # MongoDB şemalarının bulunduğu model dosyaları
│   ├── routers/          # API yönlendirmelerini yöneten route dosyaları
│   ├── configs/          # Ortam değişkenleri ve veritabanı bağlantı ayarları
│   ├── db/               # Ortam değişkenleri ve veritabanı bağlantı ayarları
│   ├── services/         # Ortam değişkenleri ve veritabanı bağlantı ayarları
│   ├── utils/            # Ortam değişkenleri ve veritabanı bağlantı ayarları
│   ├── validations/      # Ortam değişkenleri ve veritabanı bağlantı ayarları
│   ├── dto/              # Ortam değişkenleri ve veritabanı bağlantı ayarları
│── .env                  # Ortam değişkenlerini içeren dosya
│── server.js             # Express.js uygulamasının başlangıç dosyası
│── package.json          # Bağımlılıkları ve scriptleri tanımlayan dosya
│── README.md             # Proje hakkında bilgiler
```

## 📥 Kurulum

Projeyi yerel makinenizde çalıştırmak için şu adımları izleyin:

### 1️⃣ Depoyu Klonlayın

```bash
git clone https://github.com/BATUHAN-ANKARA/backend_dersleri.git
```

### 2️⃣ Proje Dizinine Girin

```bash
cd backend_dersleri
```

### 2️⃣ Örneklerden Birine Girin

```bash
cd validator
```

### 3️⃣ Bağımlılıkları Yükleyin

```bash
npm install || yarn
```

### 4️⃣ Ortam Değişkenlerini Ayarlayın

`.env` dosyanızı oluşturun içeriğinin detayları için issue açabilirsiniz:


**⚠️ Önemli:** "kullanici_adi" ve "sifre" kısımlarını kendi MongoDB bilgilerinizle değiştirmeyi unutmayın!

### 5️⃣ Uygulamayı Başlatın

```bash
npm start || yarn start
```

## 🚀 Kullanılan Teknolojiler

Bu projede **Node.js** ile backend geliştirme yapılırken aşağıdaki popüler kütüphaneler kullanılmıştır:

| 📦 Paket | 📌 Açıklama |
|-------|---------|
| `express` | Minimalist ve hızlı bir web çatısıdır. API geliştirme için idealdir. |
| `nodemon` | Geliştirme sırasında kod değiştiğinde sunucuyu otomatik yeniden başlatır. |
| `dotenv` | Ortam değişkenlerini yönetmek için kullanılır. |
| `mongoose` | MongoDB ile etkileşim için kullanılan güçlü bir ODM kütüphanesidir. |
| `md5` | Kullanıcı verilerini güvenli bir şekilde şifrelemek için kullanılır. |
| `http-status-codes` | HTTP hata ve durum kodlarını daha okunabilir hale getirmek için kullanılır. |
| `express-validator` | HTTP hata ve durum kodlarını daha okunabilir hale getirmek için kullanılır. |

## 💻 Terminal Komutları

Aşağıda projede sıkça kullanılan **Git ve Node.js** komutları verilmiştir:

| ⌨️ Komut | 📌 Açıklama |
|-------|---------|
| `git init` | Yeni bir Git reposu başlatır. |
| `git clone [URL]` | Var olan bir repoyu bilgisayarınıza indirir. |
| `git add .` | Tüm değişiklikleri Git'e ekler. |
| `git commit -m "Açıklama"` | Yapılan değişiklikleri kayıt altına alır. |
| `git push origin main` | Değişiklikleri uzak repoya gönderir. |
| `git pull origin main` | Uzak repodan en son değişiklikleri çeker. |
| `npm install` | Proje bağımlılıklarını yükler. |
| `npm start` | Uygulamayı başlatır. |
| `yarn start` | Uygulamayı başlatır. |
| `yarn` | Proje bağımlılıklarını yükler. |

**⚠️ Öneri:** Değişiklikleri uzak depoya göndermeden önce `git pull origin main` komutuyla en güncel değişiklikleri aldığınızdan emin olun!

## 📜 Lisans

Bu proje **MIT Lisansı** ile lisanslanmıştır. Daha fazla bilgi için [MIT Lisansı](https://choosealicense.com/licenses/mit/) bağlantısını ziyaret edebilirsiniz.


---

## English

# Backend Lessons

This repository contains the code written as part of the **2024-2025 Open Workshop Backend Class**. 
It is designed for those who want to practice backend development and learn modern web technologies.

This project focuses on developing a RESTful API using **Node.js** and **MongoDB**.

## 📌 Project Structure

The project has the following folder and file structure:

```
backend_lessons/

│   ├── controllers/      # Controller files that manage business logic
│   ├── models/           # Model files containing MongoDB schemas
│   ├── routes/           # Route files managing API routing
│   ├── config/           # Environment variables and database connection settings
│   ├── server.js            # The entry file of the Express.js application
│── .env                  # File containing environment variables
│── package.json          # File defining dependencies and scripts
│── README.md             # Project information
```

## 📥 Installation

To install the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/backend_lessons.git
   ```

2. Navigate to the project directory:
   ```bash
   cd backend_lessons
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file and configure environment variables:
   ```
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## 🚀 Usage

After running the server, the API will be available at `http://localhost:3000`. 
You can test endpoints using tools like **Postman** or **cURL**.

## 🤝 Contribution

If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## 📄 License

This project is licensed under the **MIT License**. See the `LICENSE` file for more details.

## 📧 Contact

If you have any questions, feel free to contact us via email: **contact@example.com**.

Happy coding! 🚀
