const { StatusCodes } = require("http-status-codes");
const User = require("../model/user.model");
const baseResponse = require("../dto/baseResponse.dto");
const utils = require("../utils/helper");

exports.register = async (req, res) => {
  try {
    const { name, email, surname, password } = req.body;
    if (await User.exists({ email: email })) {
      throw new Error("E-mail zaten kullanımda");
    }
    const _password = utils.hashToPassword(password);
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
        success: false,
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

exports.burcHesapla = async (req, res) => {
  try {
    const { birthDate } = req.body;
    const { userId } = req.params;

    const user = await User.findById(userId);
    if (!user) {
      throw new Error("Kullanıcı bulunamadı");
    }

    const birth = new Date(birthDate);
    const month = birth.getMonth();
    const day = birth.getDate();

    let burc = "";

    // Burç hesaplamayı if-else ile yapalım
    if ((month === 0 && day >= 20) || (month === 1 && day <= 18)) {
      burc = "Kova";
    } else if ((month === 1 && day >= 19) || (month === 2 && day <= 20)) {
      burc = "Balık";
    } else if ((month === 2 && day >= 21) || (month === 3 && day <= 19)) {
      burc = "Koç";
    } else if ((month === 3 && day >= 20) || (month === 4 && day <= 20)) {
      burc = "Boğa";
    } else if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) {
      burc = "İkizler";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 22)) {
      burc = "Yengeç";
    } else if ((month === 6 && day >= 23) || (month === 7 && day <= 22)) {
      burc = "Aslan";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      burc = "Başak";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      burc = "Terazi";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 21)) {
      burc = "Akrep";
    } else if ((month === 10 && day >= 22) || (month === 11 && day <= 21)) {
      burc = "Yay";
    } else {
      throw new Error("Geçersiz tarih");
    }

    console.log(`Burcunuz: ${burc}`);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      code: StatusCodes.OK,
      timestamp: new Date(),
      message: `Burcunuz başarıyla hesaplandı ve konsola yazdırıldı.`,
      data: {
        zodiacSign: zodiacSign,
      },
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
      timestamp: new Date(),
      error: true,
      success: false,
      message: error.message,
    });
  }
};

