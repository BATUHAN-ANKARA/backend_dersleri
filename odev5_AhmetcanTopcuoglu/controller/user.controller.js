const User = require("../model/user.model");
const utils = require("../utils/helper");
const baseResponse = require("../dto/baseResponse.dto");
const { StatusCodes } = require("http-status-codes");

exports.register = async (req, res) => {
  try {
    const { name, surname, email, password, birthDate } = req.body;
    const existUser = await User.find({ email: email });
    if (existUser.length > 0) {
      throw new Error("Bu email zaten kullanımda");
    }
    const _password = utils.hashToPassword(password);
    const user = new User({
      name,
      surname,
      email,
      password: _password,
      birthDate,
    });
    await user.save();
    res.status(StatusCodes.CREATED).json({
      ...baseResponse,
      code: StatusCodes.CREATED,
      data: user,
      message: "Kayıt başarılı",
      timestamp: new Date(),
    });
  } catch (error) {
    res
      .json({
        ...baseResponse,
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        error: true,
        success: false,
        message: error.message,
        timestamp: new Date(),
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const _password = utils.hashToPassword(password);
    const user = await User.find({ email: email, password: _password });
    if (user.length > 0) {
      res.status(StatusCodes.OK).json({
        ...baseResponse,
        code: StatusCodes.OK,
        data: user,
        message: "Giriş başarılı",
        timestamp: new Date(),
      });
    }
    throw new Error("Email veya şifre hatalı");
  } catch (error) {
    res
      .json({
        ...baseResponse,
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        error: true,
        success: false,
        message: error.message,
        timestamp: new Date(),
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.notHesapla = async (req, res) => {
  try {
    const { vizeNotu, finalNotu } = req.body;
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (user.length > 0) {
      if (typeof vizeNotu != "number" || typeof finalNotu != "number") {
        throw new Error("Lütfen doğru formatta veri girin");
      } else {
        if (
          vizeNotu < 0 ||
          vizeNotu > 100 ||
          finalNotu < 0 ||
          finalNotu > 100
        ) {
          throw new Error("0-100 aralığında not girişi yapın");
        } else {
          let harfNotu = "";
          let isPassed = true;
          if (finalNotu < 35) {
            const updatedUser = await User.findByIdAndUpdate(
              userId,
              {
                vizeNotu: vizeNotu,
                finalNotu: finalNotu,
                harfNotu: "FF",
                isPassed: false,
              },
              { new: true }
            );
            res.status(StatusCodes.OK).json({
              ...baseResponse,
              code: StatusCodes.OK,
              data: updatedUser,
              timestamp: new Date(),
              message: "Harf notun hesaplandı: kaldın",
            });
          } else {
            let ortalama = vizeNotu * 0.4 + finalNotu * 0.6;
            if (ortalama >= 90) {
              harfNotu = "AA";
            } else if (ortalama >= 80) {
              harfNotu = "BA";
            } else if (ortalama >= 70) {
              harfNotu = "BB";
            } else if (ortalama >= 60) {
              harfNotu = "CB";
            } else if (ortalama >= 50) {
              harfNotu = "CC";
            } else if (ortalama >= 40) {
              harfNotu = "DC";
            } else if (ortalama >= 30) {
              harfNotu = "DD";
            } else {
              (harfNotu = "FF"), (isPassed = false);
            }
            const updatedUser = await User.findByIdAndUpdate(
              userId,
              {
                vizeNotu: vizeNotu,
                finalNotu: finalNotu,
                harfNotu: harfNotu,
                isPassed: isPassed,
              },
              { new: true }
            );
            res.status(StatusCodes.OK).json({
              ...baseResponse,
              code: StatusCodes.OK,
              message: `Not hesaplama başarılı, geçme durumu: ${
                isPassed ? "geçtin" : "kaldın"
              }`,
              data: updatedUser,
            });
          }
        }
      }
    }
    throw new Error("Kullanıcı bulunamadı");
  } catch (error) {
    res
      .json({
        ...baseResponse,
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        error: true,
        success: false,
        message: error.message,
        timestamp: new Date(),
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.notHesapla2 = async (req, res) => {
  try {
    const { vizeNotu, finalNotu } = req.body;
    const { userId } = req.params;
    let harfNotu = "";
    let isPassed = true;
    let ortalama = 0;
    const user = await User.findById(userId);
    if (!user.length > 0) {
      throw new Error("Kullanıcı bulunamadı");
    }
    if (typeof vizeNotu != "number" || typeof finalNotu != "number") {
      throw new Error("Lütfen doğru formatta veri girin");
    }
    if (vizeNotu < 0 || vizeNotu > 100 || finalNotu < 0 || finalNotu > 100) {
      throw new Error("0-100 aralığında not girişi yapın");
    }
    if (finalNotu < 35) {
      harfNotu = "FF";
      isPassed = false;
    }
    ortalama = vizeNotu * 0.4 + finalNotu * 0.6;
    if (ortalama >= 90) {
      harfNotu = "AA";
    } else if (ortalama >= 80) {
      harfNotu = "BA";
    } else if (ortalama >= 70) {
      harfNotu = "BB";
    } else if (ortalama >= 60) {
      harfNotu = "CB";
    } else if (ortalama >= 50) {
      harfNotu = "CC";
    } else if (ortalama >= 40) {
      harfNotu = "DC";
    } else if (ortalama >= 30) {
      harfNotu = "DD";
    } else {
      (harfNotu = "FF"), (isPassed = false);
    }
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        vizeNotu: vizeNotu,
        finalNotu: finalNotu,
        harfNotu: harfNotu,
        isPassed: isPassed,
      },
      { new: true }
    );
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      code: StatusCodes.OK,
      data: updatedUser,
      timestamp: new Date(),
      message: `Not hesaplama başarılı geçme durumu: ${
        isPassed ? "geçtin" : "kaldın"
      }`,
    });
  } catch (error) {
    res
      .json({
        ...baseResponse,
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        error: true,
        success: false,
        message: error.message,
        timestamp: new Date(),
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
