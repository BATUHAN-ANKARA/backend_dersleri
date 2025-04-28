const md5 = require("md5");

const hashToPassword = (password) => {
  return md5(password);
};

const burcHesap = (day, month) => {
  return (month === 1 && day <= 19) || (month === 12 && day >= 22)
    ? "Oğlak"
    : (month === 1 && day >= 20) || (month === 2 && day <= 18)
    ? "Kova"
    : (month === 2 && day >= 19) || (month === 3 && day <= 20)
    ? "Balık"
    : (month === 3 && day >= 21) || (month === 4 && day <= 19)
    ? "Koç"
    : (month === 4 && day >= 20) || (month === 5 && day <= 20)
    ? "Boğa"
    : (month === 5 && day >= 21) || (month === 6 && day <= 20)
    ? "İkizler"
    : (month === 6 && day >= 21) || (month === 7 && day <= 22)
    ? "Yengeç"
    : (month === 7 && day >= 23) || (month === 8 && day <= 22)
    ? "Aslan"
    : (month === 8 && day >= 23) || (month === 9 && day <= 22)
    ? "Başak"
    : (month === 9 && day >= 23) || (month === 10 && day <= 22)
    ? "Terazi"
    : (month === 10 && day >= 23) || (month === 11 && day <= 21)
    ? "Akrep"
    : (month === 11 && day >= 22) || (month === 12 && day <= 21)
    ? "Yay"
    : "Geçersiz Tarih";
};

const yasHesap = (db) => {
  const today = new Date();
  const birth = new Date(db);
  let age = today.getFullYear() - birth.getFullYear();

  return today.getMonth() < birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
    ? age - 1
    : age;
};

module.exports = {
  hashToPassword,
  burcHesap,
  yasHesap,
};
