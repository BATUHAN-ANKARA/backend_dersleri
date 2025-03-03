const gecerliIslem = ["toplama", "çıkarma", "çarpma", "bölme", "faktöriyel"];

const calculate = (req, res) => {
  const { sayi1, sayi2, islem } = req.body;

  if (
    sayi1 === undefined ||
    sayi2 === undefined ||
    typeof sayi1 !== "number" ||
    typeof sayi2 !== "number"
  ) {
    res.json({ message: "Eksik veya hatalı veri girişi" });
  } else if (!gecerliIslem.includes(islem)) {
    res.json({
      hata: "Geçersiz işlem. Desteklenen işlemler: toplama, çıkarma, çarpma, bölme.",
    });
  } else {
    let sonuc;
    if (islem === "toplama") {
      sonuc = sayi1 + sayi2;
    } else if (islem === "çıkarma") {
      sonuc = sayi1 - sayi2;
    } else if (islem === "çarpma") {
      sonuc = sayi1 * sayi2;
    } else if (islem === "bölme") {
      if (sayi2 === 0) {
        res.json({ message: "Bölme işlemi için ikinci sayı 0 olamaz." });
      }
      sonuc = sayi1 / sayi2;
    }
    res.json({ sonuc });
  }
};

const faktoriyel = (req, res) => {
  const { sayi } = req.body;

  if (sayi === undefined || typeof sayi !== "number" || sayi < 0) {
    res.json({ message: "Eksik veya hatalı sayı girişi" });
  } else {
    let carpim = 1;
    for (let i = 2; i <= sayi; i++) {
      carpim *= i;
    }
    res.json({ sonuc: carpim });
  }
};

module.exports = { calculate, faktoriyel };
