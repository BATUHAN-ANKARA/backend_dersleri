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
    expiresIn: process.env.JWT_EXPORES,
    issuer: "localhost",
  });
  return token;
};

exports.verifyToken = (token) => {
  const isVerify = { decodedToken: null };
  try {
  } catch (error) {
    console.log("VerifyToken hatalı");
    throw new Error("Token validate sırasında hata oluştu");
  }
  return isVerify;
};
