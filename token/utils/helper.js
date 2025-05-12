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
      success: false,
      validationErrors: validationErrors.array(),
      error: true,
      timestamp: new Date(),
      code: StatusCodes.BAD_REQUEST,
    };
  }
  return null;
};

exports.createToken = (userId, userName) => {
  const token = jsonwebtoken.sign({ userId, userName }, process.env.SECRETKEY, {
    expiresIn: process.env.JWT_EXPIRES,
    issuer: "localhost",
  });
  return token;
};

exports.verifyToken = (token) => {
  const isVerify = { decodedToken: null };
  try {
    const decodedToken = jsonwebtoken.verify(token, process.env.SECRETKEY);
    isVerify.decodedToken = decodedToken;
  } catch (error) {
    console.log("helperde hata oldu verify tokende");
    throw new Error("Token validate sırasında hata oluştu");
  }
  return isVerify;
};
