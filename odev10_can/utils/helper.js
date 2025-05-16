const { validationResult } = require("express-validator");
const md5 = require("md5");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

exports.hashToPassword = (password) => {
  return md5(password);
};

exports.handleValidation = (req) => {
  const validationErrors = validationResult(req);
  if (validationErrors.isEmpty() === false) {
    return {
      message: "Geçersiz veri",
      success: false,
      error: true,
      validationErrors: validationErrors.array(),
      timestamp: new Date(),
      code: StatusCodes.BAD_REQUEST,
    };
  }
  return null;
};

exports.createToken = (userId, userName) => {
  const token = jwt.sign({ userId, userName }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
    issuer: "localhost",
  });
  return token;
};

exports.verifyToken = (token) => {
  const isVerify = { decodedToken: null };
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    return isVerify.decodedToken = decodedToken;
  } catch (error) {
    console.log("helperde hata oldu verify tokende");
    throw new Error("Token validate sırasında hata oluştu");
  }
};


exports.zodiacSign =(day,month)=>{
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
}