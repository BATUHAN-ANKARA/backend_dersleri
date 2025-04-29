# Backend Dersleri

Bu repo, **2024-2025 Açık Atölye Backend Sınıfı** kapsamında yazılmış kodları içermektedir. 
Backend geliştirme konusunda pratik yapmak ve modern web teknolojilerini öğrenmek isteyenler için hazırlanmıştır. 

Bu proje, **Node.js** ve **MongoDB** kullanarak RESTful API geliştirmeye odaklanmaktadır.

## 📌 Proje Yapısı

Proje aşağıdaki klasör ve dosya yapısına sahiptir:

```
backend_dersleri/

│   ├── configs/          # Konfigürasyon dosyaları ve ortam ayarları  
│   ├── controllers/      # İş mantığını yöneten controller dosyaları  
│   ├── db/               # Veritabanı bağlantı işlemleri  
│   ├── dto/              # Veri transfer objeleri  
│   ├── logs/             # Uygulama loglarının tutulduğu dosyalar  
│   ├── middlewares/      # Ara katman yazılımları (middleware)  
│   ├── models/           # MongoDB şemalarının bulunduğu model dosyaları  
│   ├── routers/          # API yönlendirmelerini yöneten route dosyaları  
│   ├── services/         # Servis katmanındaki yardımcı fonksiyonlar  
│   ├── utils/            # Yardımcı araçlar ve fonksiyonlar  
│   ├── validations/      # Veri doğrulama kuralları  
│── .env                  # Ortam değişkenlerini içeren dosya  
│── package.json          # Bağımlılıkları ve scriptleri tanımlayan dosya  
│── README.md             # Proje hakkında bilgiler  
│── server.js             # Express.js uygulamasının başlangıç dosyası  

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

### 3️⃣ Örneklerden Birine Girin

```bash
cd validator
```

### 4️⃣ Bağımlılıkları Yükleyin

```bash
npm install veya yarn
```

### 5️⃣ Ortam Değişkenlerini Ayarlayın

`.env` dosyanızı oluşturun içeriğinin detayları için issue açabilirsiniz:


**⚠️ Önemli:** "kullanici_adi" ve "sifre" kısımlarını kendi MongoDB bilgilerinizle değiştirmeyi unutmayın!

### 6️⃣ Uygulamayı Başlatın

```bash
npm start veya yarn start
```

## 🚀 Kullanılan Teknolojiler

Bu projede **Node.js** ile backend geliştirme yapılırken aşağıdaki popüler kütüphaneler kullanılmıştır:

| 📦 Paket | 📌 Açıklama |
|---------|-------------|
| [`express`](https://www.npmjs.com/package/express) | Minimalist ve hızlı bir web çatısıdır. API geliştirme için idealdir. |
| [`nodemon`](https://www.npmjs.com/package/nodemon) | Geliştirme sırasında kod değiştiğinde sunucuyu otomatik yeniden başlatır. |
| [`dotenv`](https://www.npmjs.com/package/dotenv) | Ortam değişkenlerini yönetmek için kullanılır. |
| [`mongoose`](https://www.npmjs.com/package/mongoose) | MongoDB ile etkileşim için kullanılan güçlü bir ODM kütüphanesidir. |
| [`md5`](https://www.npmjs.com/package/md5) | Kullanıcı verilerini güvenli bir şekilde şifrelemek için kullanılır. |
| [`http-status-codes`](https://www.npmjs.com/package/http-status-codes) | HTTP hata ve durum kodlarını daha okunabilir hale getirmek için kullanılır. |
| [`express-validator`](https://www.npmjs.com/package/express-validator) | Gelen HTTP isteklerindeki verileri doğrulamak ve filtrelemek için kullanılır. |
| [`winston`](https://www.npmjs.com/package/winston) | Uygulama loglarını yönetmek ve dışa aktarmak için kullanılan esnek bir loglama kütüphanesidir. |
| [`winston-daily-rotate-file`](https://www.npmjs.com/package/winston-daily-rotate-file) | Winston ile günlük olarak dönen log dosyaları oluşturmak için kullanılır. |
| [`node-telegram-bot-api`](https://www.npmjs.com/package/node-telegram-bot-api) | Telegram botları oluşturmak ve yönetmek için kullanılan bir API kütüphanesidir. |
| [`telegraf`](https://www.npmjs.com/package/telegraf) | Telegram botları geliştirmek için kullanılan modern ve güçlü bir framework’tür. |
| [`jsonwebtoken`](https://www.npmjs.com/package/jsonwebtoken) | JWT (JSON Web Token) oluşturmak ve doğrulamak için kullanılır. |
| [`cors`](https://www.npmjs.com/package/cors) | Farklı origin’lerden gelen isteklere izin vermek için kullanılır (Cross-Origin Resource Sharing). |
| [`multer`](https://www.npmjs.com/package/multer) | HTTP istekleri üzerinden gelen dosya yüklemelerini yönetmek için kullanılır. |


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

## 📧 İletişim

Herhangi bir sorunuz varsa, bizimle e-posta yoluyla iletişime geçmekten çekinmeyin: **contact@example.com**.

Keyifli kodlamalar! 🚀

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

│   ├── configs/          # Configuration files and environment settings  
│   ├── controllers/      # Controller files that handle business logic  
│   ├── db/               # Database connection and setup  
│   ├── dto/              # Data Transfer Objects  
│   ├── logs/             # Application log files  
│   ├── middlewares/      # Middleware functions  
│   ├── models/           # Mongoose schema and model definitions  
│   ├── routers/          # Route files that handle API routing  
│   ├── services/         # Service layer helper functions  
│   ├── utils/            # Utility functions and helpers  
│   ├── validations/      # Data validation rules  
│── .env                  # File containing environment variables  
│── package.json          # Project dependencies and scripts  
│── README.md             # Project information and documentation  
│── server.js             # Entry point of the Express.js application  
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

3. Navigate to an Example:
   ```bash
   cd validator
   ```

4. Install dependencies:
   ```bash
   npm install or yarn 
   ```

5. Create a `.env` file and configure environment variables:
   ```
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   ```

6. Start the application:
   ```bash
   npm start or yarn start
   ```
## 🚀 Technologies Used

In this project, **Node.js** was used for backend development along with the following popular libraries:

| 📦 Package | 📌 Description |
|-----------|----------------|
| [`express`](https://www.npmjs.com/package/express) | A minimalist and fast web framework. Ideal for API development. |
| [`nodemon`](https://www.npmjs.com/package/nodemon) | Automatically restarts the server when code changes during development. |
| [`dotenv`](https://www.npmjs.com/package/dotenv) | Used to manage environment variables. |
| [`mongoose`](https://www.npmjs.com/package/mongoose) | A powerful ODM library used to interact with MongoDB. |
| [`md5`](https://www.npmjs.com/package/md5) | Used to securely hash user data. |
| [`http-status-codes`](https://www.npmjs.com/package/http-status-codes) | Makes HTTP status and error codes more readable. |
| [`express-validator`](https://www.npmjs.com/package/express-validator) | Used to validate and sanitize incoming HTTP request data. |
| [`winston`](https://www.npmjs.com/package/winston) | A flexible logging library used to manage application logs. |
| [`winston-daily-rotate-file`](https://www.npmjs.com/package/winston-daily-rotate-file) | Used with Winston to create daily rotating log files. |
| [`node-telegram-bot-api`](https://www.npmjs.com/package/node-telegram-bot-api) | A library to create and manage Telegram bots via the Telegram Bot API. |
| [`telegraf`](https://www.npmjs.com/package/telegraf) | A modern and powerful framework for developing Telegram bots. |
| [`jsonwebtoken`](https://www.npmjs.com/package/jsonwebtoken) | Used to generate and verify JWT (JSON Web Tokens). |
| [`cors`](https://www.npmjs.com/package/cors) | Allows cross-origin requests (Cross-Origin Resource Sharing). |
| [`multer`](https://www.npmjs.com/package/multer) | Used to handle file uploads via HTTP requests. |


## 💻 Terminal Commands

Below are commonly used **Git and Node.js** commands in the project:

| ⌨️ Command | 📌 Description |
|-----------|----------------|
| `git init` | Initializes a new Git repository. |
| `git clone [URL]` | Clones an existing repository to your local machine. |
| `git add .` | Stages all changes for the next commit. |
| `git commit -m "Message"` | Records the staged changes with a message. |
| `git push origin main` | Pushes your changes to the remote repository. |
| `git pull origin main` | Pulls the latest changes from the remote repository. |
| `npm install` | Installs project dependencies. |
| `npm start` | Starts the application. |
| `yarn start` | Starts the application (if using Yarn). |
| `yarn` | Installs project dependencies using Yarn. |

**⚠️ Tip:** Before pushing your changes, make sure to run `git pull origin main` to get the latest updates from the remote repository!

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

This project is licensed under the **MIT License**. See the [LICENSE](https://choosealicense.com/licenses/mit/) file for more details.

## 📧 Contact

If you have any questions, feel free to contact us via email: **contact@example.com**.

Happy coding! 🚀
