const math = require("./math");
const calculate = (req, res) => {
  const { sayi1, sayi2, islem } = req.body;
  if (sayi1 != null && sayi2 != null && islem != null) {
    if (
      typeof sayi1 === "number" &&
      typeof sayi2 === "number" &&
      typeof islem === "string"
    ) {
      if (islem === "toplama") {
        res.json({ sonuc: math.toplama(sayi1, sayi2, islem) });
      } else if (islem === "cikarma") {
        res.json({ sonuc: math.cikarma(sayi1, sayi2, islem) });
      } else if (islem === "carpma") {
        res.json({ sonuc: math.carpma(sayi1, sayi2, islem) });
      } else if (islem === "bolme") {
        res.json({ sonuc: math.bolme(sayi1, sayi2, islem) });
      }
    } else {
      res.json({ error: "Lütfen doğru veri giriniz!" });
    }
  } else {
    res.json({ error: "Lütfen eksiksiz veri giriniz!" });
  }
};

const faktoriyel = (req,res)=>{
  const {sayi} = req.body
  if (typeof sayi === "number") {
    if (sayi < 0 ) {
      res.json({succes: false, error: true, errorMessage: "Lütfen negatif değer girmeyiniz!"})
    }
    else {res.json ({succes:true, error: false, ressult:math.faktoriyell(sayi)})}
  } else {res.json({succes: false,error: true, errorMessage: "Lütfen sayı tipinde veri giriniz!"})
    
  }
}

const tanim = `<h1>1'den büyük bir n doğal sayısı için, 1'den n'ye kadar olan doğal sayıların çarpımına n faktöriyel denir ve n! ile gösterilir1</h1>`
const merhaba = "Merhaba, POST metodu ile işlemlerinizi yaptırabillirsiniz!"
module.exports = { calculate,tanim,merhaba,faktoriyel };
