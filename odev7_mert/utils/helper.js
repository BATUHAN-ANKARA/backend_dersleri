
const md5 = require("md5");

const hashToPassword = (password) => {
  return md5(password);
};

const burcHesap = (day, month) => {
  switch (month) {
    case 1:
      return day <= 19 ? "Oğlak" : "Kova";
    case 2:
      return day <= 18 ? "Kova" : "Balık";
    case 3:
      return day <= 20 ? "Balık" : "Koç";
    case 4:
      return day <= 19 ? "Koç" : "Boğa";
    case 5:
      return day <= 20 ? "Boğa" : "İkizler";
    case 6:
      return day <= 20 ? "İkizler" : "Yengeç";
    case 7:
      return day <= 22 ? "Yengeç" : "Aslan";
    case 8:
      return day <= 22 ? "Aslan" : "Başak";
    case 9:
      return day <= 22 ? "Başak" : "Terazi";
    case 10:
      return day <= 22 ? "Terazi" : "Akrep";
    case 11:
      return day <= 21 ? "Akrep" : "Yay";
    case 12:
      return day <= 21 ? "Yay" : "Oğlak";

    default:
      return "Geçersiz Tarih";
  }
};

const yasHesap = (dob) => {
  const today = new Date();
  const birth = new Date(dob);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

module.exports = {
  hashToPassword,
  burcHesap,
  yasHesap,
};
