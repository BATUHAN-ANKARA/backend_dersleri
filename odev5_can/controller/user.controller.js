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

exports.notHesapla = async (req, res) => {
  try {
    const { name, surname, vizeNotu, finalNotu } = req.body;
    if (typeof vizeNotu !== "number" || typeof finalNotu !== "number") {
      throw new Error("Lütfen sayı tipinde bir veri giriniz!");
    }
    const ortalama = vizeNotu * 0.4 + finalNotu * 0.6;
    const harfNotuHesapla = (ortalama) => {
      return ortalama >= 90
        ? "AA"
        : ortalama >= 80
        ? "BA"
        : ortalama >= 70
        ? "BB"
        : ortalama >= 60
        ? "CB"
        : ortalama >= 50
        ? "CC"
        : "FF";
    };
    const harfNotu = harfNotuHesapla(ortalama);
    const isPassed = harfNotu !== "FF";
    const user = new User({
      name,
      surname,
      vizeNotu,
      finalNotu,
    });
    //await user.save();
    res.json({
      ...baseResponse,
      code: StatusCodes.OK,
      timestamp: new Date(),
      data: user,
      harfNotu: harfNotu,
      isPassed: isPassed,
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

/*
rotanın adı harf notu hesapla (not-hesapla)-post isteği
vizenin %40ı finalin %60ı 
ortalamasına göre harf notunu verin
res.json içerisinde message alanına geçip geçmeme durumunu da bildirin
isPAssed alanını da duruma göre güncelleyin
*/
