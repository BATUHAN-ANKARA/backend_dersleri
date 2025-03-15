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

module.exports = {
  harfNotuHesapla,
  hasToPassword,
}