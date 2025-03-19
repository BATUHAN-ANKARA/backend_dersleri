const md5 = require("md5");

const hasToPassword = (password) => md5(password);


const harfNotuHesapla = (finalNotu,ortalama) =>{
 return finalNotu < 35 ? { harfNotu: "FF", isPassed: false }
        : ortalama >= 90 ? { harfNotu: "AA", isPassed: true }
        : ortalama >= 80 ? { harfNotu: "BA", isPassed: true }
        : ortalama >= 70 ? { harfNotu: "BB", isPassed: true }
        : ortalama >= 60 ? { harfNotu: "CB", isPassed: true }
        : ortalama >= 50 ? { harfNotu: "CC", isPassed: true }
        : ortalama >= 40 ? { harfNotu: "DC", isPassed: true }
        : ortalama >= 30 ? { harfNotu: "DD", isPassed: true }
        : { harfNotu: "FF", isPassed: false };
}

const burcHesap =(day,month) => {
   switch (month) {
    case 1: return day <= 19 ? "Oğlak" : "Kova";
    break;
    case 2: return day <= 18 ? "Kova" : "Balık";
    break;
    case 3: return day <= 20 ? "Balık" : "Koç";
    break;
    case 4: return day <= 19 ? "Koç" : "Boğa";
    break;
    case 5: return day <= 20 ? "Boğa" : "İkizler";
    break;
    case 6: return day <= 20 ? "İkizler" : "Yengeç";
    break;
    case 7: return day <= 22 ? "Yengeç" : "Aslan";
    break;
    case 8: return day <= 22 ? "Aslan" : "Başak";
    break;
    case 9: return day <= 22 ? "Başak" : "Terazi";
    break;
    case 10: return day <= 22 ? "Terazi" : "Akrep";
    break;
    case 11: return day <= 21 ? "Akrep" : "Yay";
    break;
    case 12: return day <= 21 ? "Yay" : "Oğlak";
    break;

    default: return "Geçersiz Tarih";
      break;
  }
}

module.exports = {
  harfNotuHesapla,
  hasToPassword,
  burcHesap,
}