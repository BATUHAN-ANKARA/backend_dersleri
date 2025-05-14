const md5 = require("md5");
const { validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const jsonwebtoken = require("jsonwebtoken");
const { json } = require("express");

exports.hashtoPassword = (password) => {
  return md5(password);
};

exports.handleValidaton = (req) => {
  const validationErrors = validationResult(req); //express validatorden çekiyoruz
  if (validationErrors.isEmpty() === false) {
    return {
      message: "geçersiz ",
      success: false,
      error: true,
      validationErrors: validationResult.array(),
      timestamp: new Date(),
      code: StatusCodes.BAD_REQUEST,
    };
  }
  return null;
};

exports.creteToken = (userId, userName) => {
  const token = jsonwebtoken.sign({ userId, userName }, process.env.SECRETKEY, {
    expiresIn: process.env.JWT_EXPIRES,
    issuer: "localhost",
  });
  return token;
};
