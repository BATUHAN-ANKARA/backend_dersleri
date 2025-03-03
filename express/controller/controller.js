const toplama = (req, res) => {
  const { sayi1, sayi2 } = req.body;
  if (sayi1 && sayi2) {
    if (typeof sayi1 === "number" && typeof sayi2 === "number") {
      const toplam = sayi1 + sayi2;
      res.json({ sonuc: toplam });
    } else {
      res.json({ error: "Sayı tipinde veri girin!" });
    }
  } else {
    res.json({ error: "Eksik veya hatalı veri girişi" });
  }
};

const cikartma = (req, res) => {
  const { sayi1, sayi2 } = req.body;
  if (sayi1 && sayi2) {
    if (typeof sayi1 === "number" && typeof sayi2 === "number") {
      const fark = sayi1 - sayi2;
      res.json({ sonuc: fark });
    } else {
      res.json({ error: "Sayı tipinde veri girin!" });
    }
  } else {
    res.json({ error: "Eksik veya hatalı veri girişi" });
  }
};

const carpma = (req, res) => {
  const { sayi1, sayi2 } = req.body;
  if (sayi1 && sayi2) {
    if (typeof sayi1 === "number" && typeof sayi2 === "number") {
      const carpim = sayi1 * sayi2;
      res.json({ sonuc: carpim });
    } else {
      res.json({ error: "Sayı tipinde veri girin!" });
    }
  } else {
    res.json({ error: "Eksik veya hatalı veri girişi" });
  }
};

const bolme = (req, res) => {
  const { sayi1, sayi2 } = req.body;
  if (sayi1 && sayi2) {
    if (typeof sayi1 === "number" && typeof sayi2 === "number") {
      if (sayi2 === 0) {
        res.json({ error: "Bölen sayı sıfır olamaz!" });
      } else {
        const bolum = sayi1 / sayi2;
        res.json({ sonuc: bolum });
      }
    } else {
      res.json({ error: "Sayı tipinde veri girin!" });
    }
  } else {
    res.json("Eksik veya hatalı veri girişi");
  }
};

module.exports = {
  toplama,
  cikartma,
  carpma,
  bolme,
};
