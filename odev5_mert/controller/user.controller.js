const { StatusCodes } = require("http-status-codes");
const User = require("../model/user.model");
const baseResponse = require("../dto/baseResponse.dto");
const utils = require("../utils/helper");

exports.register = async (req, res) => {
  try {
    const { name, surname, password, email } = req.body;
    const existUser = await User.find({ email: email });
    if (existUser.length > 0) {
      throw new Error("Bu email zaten kullanımda!");
    }
    const _password = utils.hasToPassword(password);
    const user = new User({
      name,
      surname,
      email,
      password: _password,
    });
    await user.save();
    res
      .json({
        ...baseResponse,
        data: user,
        code: StatusCodes.OK,
        timestamp: new Date(),
        message: "Kayıt başarılı",
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        timestamp: new Date(),
        error: true,
        succes: false,
        message: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const _password = utils.hasToPassword(password);
    const user = await User.find({ email: email, password: _password });
    if (user.length > 0) {
      res
        .json({
          ...baseResponse,
          data: user,
          code: StatusCodes.OK,
          timestamps: new Date(),
          message: "Giriş başarılı!",
        })
        .status(StatusCodes.OK);
    }
    throw new Error("Giriş bilgilerini kontrol ediniz!");
  } catch (error) {
    res
      .json({
        ...baseResponse,
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        error: true,
        succes: false,
        timestamps: new Date(),
        message: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
exports.notHesapla = async (req, res) => {
  try {
    const { vizeNotu, finalNotu } = req.body;
    const { userId } = req.params;
    let ortalama = vizeNotu * 0.4 + finalNotu * 0.6;
    const user = await User.findById(userId);
    if (user.length > !0) {
      throw new Error("Kullanıcı bulunamadı");
    }
    if (typeof vizeNotu !== "number" || typeof finalNotu !== "number") {
      throw new Error("Geçerli not giriniz!");
    }
    if (vizeNotu < 0 || vizeNotu > 100 || finalNotu < 0 || finalNotu > 100) {
      throw new Error("0 ile 100 arasında değer giriniz!");
    }
    let harfNotu = "";
    let isPassed = true;
    if (finalNotu < 35) {
      isPassed = false
      harfNotu = "FF"
    }else{ 
    ortalama >= 90
      ? (harfNotu = "AA")
      : ortalama >= 80
      ? (harfNotu = "BA")
      : ortalama >= 70
      ? (harfNotu = "BB")
      : ortalama >= 60
      ? (harfNotu = "CB")
      : ortalama >= 50
      ? (harfNotu = "CC")
      : ortalama >= 40
      ? (harfNotu = "DC")
      : ortalama >= 30
      ? (harfNotu = "DD")
      : ((harfNotu = "FF"), (isPassed = false))}
      const updatedUser = await User.findByIdAndUpdate(userId,{
        vizeNotu:vizeNotu, finalNotu:finalNotu, harfNotu:harfNotu, isPassed:isPassed
      },{
        new: true
      })
      res.json({
        ...baseResponse,
        data: updatedUser,
        code: StatusCodes.OK,
        timestamps: new Date(),
        message: isPassed? "Geçtiniz!": "Kaldınız!"
      })
  } catch (error) {
    res
      .json({
        ...baseResponse,
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        error: true,
        succes: false,
        timestamps: new Date(),
        message: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
