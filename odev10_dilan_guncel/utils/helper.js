const md5 = require("md5");
const { validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const jsonwebtoken = require("jsonwebtoken");

exports.hashToPassword = (password) => {
  return md5(password);
};

exports.handleValidation = (req) => {
  const validationErrors = validationResult(req);
  if (validationErrors.isEmpty() === false) {
    return {
      message: "Geçersiz veri",
      error: true,
      success: false,
      timestamp: new Date(),
      code: StatusCodes.BAD_REQUEST,
    };
  }
  return null;
};

exports.createToken = (userId, userName) => {
  const token = jsonwebtoken.sign({ userId, userName }, process.env.SECRETKEY, {
    expiresIn: process.env.JWT_EXPIRESIN,
    issuer: "localhost",
  });
  return token;
};

exports.verifyToken = (token) => {
  const isVerify = { decodedToken: null };
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    isVerify.decodedToken = decoded;
    return isVerify;
  } catch (error) {
    console.log("VerifyToken hatalı:", error.message);
    throw new Error("Token validate sırasında hata oluştu");
  }
};

exports.getZodiacSign = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;

  if ((month === 3 && day >= 21) || (month === 4 && day <= 20)) return "Koç";
  if ((month === 4 && day >= 21) || (month === 5 && day <= 21)) return "Boğa";
  if ((month === 5 && day >= 22) || (month === 6 && day <= 21)) return "İkizler";
  if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) return "Yengeç";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 23)) return "Aslan";
  if ((month === 8 && day >= 24) || (month === 9 && day <= 23)) return "Başak";
  if ((month === 9 && day >= 24) || (month === 10 && day <= 23)) return "Terazi";
  if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) return "Akrep";
  if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) return "Yay";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 20)) return "Oğlak";
  if ((month === 1 && day >= 21) || (month === 2 && day <= 19)) return "Kova";
  if ((month === 2 && day >= 20) || (month === 3 && day <= 20)) return "Balık";

  return null;
};
