
# Starmate Backend

Starmate Backend, burçlar ve burçlar arası ilişkiler üzerine RESTful API sağlayan Node.js ve MongoDB tabanlı bir projedir. Kullanıcılar burç bilgilerini alabilir, güncelleyebilir ve burçlar arası uyum analizlerini yönetebilir.

---

## Özellikler

- Burç bilgilerini ekleme, güncelleme, listeleme
- Burçlar arası ilişki (uyumluluk) ekleme, güncelleme, silme
- Kullanıcıların beğendiği blogları yönetme
- Blog oluşturma, silme ve kullanıcılarla ilişkilendirme
- MongoDB ile esnek veri yapısı ve hızlı sorgular

---

## Teknolojiler

- Node.js
- Express.js
- MongoDB & Mongoose
- REST API

---

## Kurulum ve Çalıştırma

1. Depoyu klonla:
    ```bash
    git clone https://github.com/cantanrikulu/starmate_back.git
    cd starmate_back
    ```

2. Bağımlılıkları yükle:
    ```bash
    npm install
    ```

3. Ortam değişkenlerini ayarla (.env dosyası oluştur):
    ```env
    MONGO_URI=<MongoDB bağlantı URL'in>
    PORT=3000
    ```

4. Sunucuyu başlat:
    ```bash
    npm start
    ```

---

## API Endpoints (Örnekler)

- `POST /api/zodiac` — Burç ekle veya güncelle
- `GET /api/zodiacs` — Tüm burçları getir
- `POST /api/relationship` — Burçlar arası ilişki ekle
- `PUT /api/relationship` — Burçlar arası ilişki güncelle
- `DELETE /api/relationship/:id` — İlişki sil
- `POST /api/blog` — Blog oluştur
- `DELETE /api/blog/:blogId` — Blog sil

---

## Örnek JSON Gönderimleri

### Burç Ekle / Güncelle

```json
{
  "name": "Koç",
  "daily": "Bugün enerjin yüksek.",
  "weekly": "Haftaya olumlu başlayacaksın.",
  "monthly": "Bu ay önemli fırsatlar var.",
  "yearly": "Yıl boyunca başarı seni bekliyor."
}
```

### Burç İlişkisi Ekle

```json
{
  "zodiacName": "Koç",
  "otherZodiacName": "Aslan",
  "compatibilityText": "Koç ve Aslan ateş burçları olarak güçlü ve tutkulu bir uyuma sahiptir."
}
```

---

## Katkıda Bulunma

1. Fork'la  
2. Yeni bir branch aç (`git checkout -b feature/yenilik`)  
3. Değişikliklerini yap ve commit'le (`git commit -m 'Yeni özellik'`)  
4. Push'la (`git push origin feature/yenilik`)  
5. Pull request oluştur

---

## Lisans

Bu proje MIT Lisansı altında lisanslanmıştır.

---

## İletişim

Proje sahibi: [Can Tanrıkulu](mailto:can@example.com)  
GitHub: [https://github.com/cantanrikulu](https://github.com/cantanrikulu)

---

*Teşekkürler!*
