const calculate = (req, res) => {
  const { sayi1, sayi2, islem } = req.body;
  if (sayi1 != null && sayi2 != null && islem != null) {
    if (
      typeof sayi1 === "number" &&
      typeof sayi2 === "number" &&
      typeof islem === "string"
    ) {
      switch (islem) {
        case "toplama":
          res.json({ result: sayi1 + sayi2, succes: true, error: false });
          break;
        case "cikartma":
          res.json({ result: sayi1 - sayi2, succes: true, error: false });
          break;
        case "carpma":
          res.json({ result: sayi1 * sayi2, succes: true, error: false });
          break;
        case "bolme":
          if (sayi2 === 0) {
            res.json({
              succes: false,
              error: true,
              errorMessage: "Bölen sayı 0 olamaz!",
            });
          } else {
            const bolum = sayi1 / sayi2;
            res.json({ result: bolum, succes: true, error: false });
          }
          break;
        default:
          res.json({
            succes: false,
            error: true,
            errorMessage: "Bilinmeyen işlem!",
          });
      }
    } else {
      res.json({
        succes: false,
        error: true,
        errorMessage: "Lütfen doğru veri tipinde bir veri giriniz!",
      });
    }
  } else {
    res.json({
      succes: false,
      error: true,
      errorMessage: "Eksik veya hatalı veri girişi!",
    });
  }
};
const merhaba = "Merhaba, POST metodu ile işlemlerinizi yaptırabillirsiniz!";

const tanim = `
    📊 <strong>Faktöriyel Nedir?</strong><br>
    1'den n'ye kadar olan pozitif tam sayıların çarpımına <em>n faktöriyel</em> denir.<br>
    Matematiksel gösterimi: n! = 1 × 2 × 3 × ... × n
  `;

const faktoriyel = (req, res) => {
  const { sayi } = req.body;
  if (typeof sayi === "number") {
    if (sayi < 0) {
      res.json({
        succes: false,
        error: true,
        errorMessage: "Negatif sayıların faktöriyeli hesaplanamaz!",
      });
    }

    let sonuc = 1;
    for (let i = 2; i <= sayi; i++) {
      sonuc *= i;
    }
    res.json({ succes: true, error: false, result: sonuc });
  } else {
    res.json({
      succes: false,
      error: true,
      errorMessage: "Lütfen sayı tipinde veri giriniz!",
    });
  }
};

module.exports = {
  merhaba,
  calculate,
  tanim,
  faktoriyel,
};
