const { StatusCodes } = require("http-status-codes");
const User = require("../model/user.model");
const baseResponse = require("../dto/baseResponse.dto");
const utils = require("../utils/helper");

exports.register = async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;
    const existUser = await User.find({ email: email });
    if (existUser.length > 0) {
      throw new Error("Bu email zaten kullanımda");
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
        timestamp: new Date(),
        message: "Kayıt başarılı",
        code: StatusCodes.CREATED,
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        error: true,
        succes: false,
        timestamp: new Date(),
        code: StatusCodes.INTERNAL_SERVER_ERROR,
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
      res.status(StatusCodes.OK).json({
        ...baseResponse,
        code: StatusCodes.OK,
        data: user,
        message: "Giriş Başarılı",
        timestamp: new Date(),
      });
    }
    throw new Error("Email veya şifre hatalı");
  } catch (error) {
    res
      .json({
        ...baseResponse,
        error: true,
        succes: false,
        timestamp: new Date(),
        code: StatusCodes.INTERNAL_SERVER_ERROR,
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

    let {harfNotu,isPassed} = utils.harfNotuHesapla(finalNotu,ortalama)
    
    const user = await User.findById(userId);

    if (user.length > !0) {
      throw new Error("Kullanıcı bulunamadı!");
    }

    if (typeof vizeNotu !== "number" || typeof finalNotu !== "number") {
      throw new Error("Lütfen sayı tipinde bir veri giriniz!");
    }
    if (vizeNotu < 0 || vizeNotu > 100 || finalNotu < 0 || finalNotu > 100) {
      throw new Error("0-100 aralığında not girişi yapın");
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        vizeNotu: vizeNotu,
        finalNotu: finalNotu,
        harfNotu: harfNotu,
        isPassed: isPassed,
      },
      {
        new: true,
      }
    );
    res.json({
      ...baseResponse,
      code: StatusCodes.OK,
      timestamp: new Date(),
      data: updatedUser,
      message: isPassed ? "Dersi geçtiniz" : "Dersi geçemediniz!",
    });
  } catch (error) {
    res
      .json({
        ...baseResponse,
        error: true,
        succes: false,
        timestamp: new Date(),
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

