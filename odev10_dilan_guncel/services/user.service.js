const User = require("../models/user.model");
const utils = require("../utils/index");
exports.createUser = async (req) => {
  try {
    const { email, name, surname, password, birthDate, age, gender } = req.body;
    const existUser = await User.findOne({ email });
    if (existUser) {
      throw new Error("e-mail zaten kullanımda");
    }
    const _password = utils.helper.hashToPassword(password);
    // bu satırdan sonra girilen doğum tarihi (birthDate) bilgisine göre kullanıcının zodiac bilgisini bul
    const user = new User({
      email,
      name,
      surname,
      password: _password,
      birthDate,
      age,
      gender,
      //zodiacSign: -buludğun zodiac bilgisi-
    });
    await user.save();
    // utils.helper.createToken(user._id, name) token oluşturmak için bu satır aktif olmalı
    // token oluşturma açtıysan return {user, token } böyle bir return olacak
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

exports.loginUser = async (req) => {
  try {
    const { email, password } = req.body;
    const _password = utils.helper.hashToPassword(password);
    const user = await User.findOne({ email: email, password: _password });
    if (!user) {
      throw new Error("Kullanıcı bilgileri yanlış");
    }
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

exports.changePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { password, newPassword } = req.body;
    const existUser = await User.findById(id);
    if (!existUser) {
      throw new Error("Kullanıcı bulunamadı");
    }
    const _password = utils.helper.hashToPassword(password);
    const _newPassword = utils.helper.hashToPassword(newPassword);
    if (existUser.password === _password) {
      existUser.password = _newPassword;
      await existUser.save();
      return existUser;
    } else {
    }
  } catch (error) {
    throw new Error(error);
  }
};

exports.deleteUser = async (req) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("Kullanıcı bulunamadı");
    }
    await User.findByIdAndDelete(userId);
    return "Kullanıcı başarılı şekilde silindi";
  } catch (error) {
    throw new Error(error);
  }
};

exports.getAllUser = async () => {
  try {
    const user = await User.find();
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateUserInfo = async (req) => {
  try {
    const { userId } = req.params;
    const updatedData = req.body;

    const user = await User.findById(userId);
    if (!user) {
      throw new Error("Kullanıcı bulunamadı");
    }
    const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
      new: true,
    });

    return updatedUser;
  } catch (error) {
    throw new Error(error.message);
  }
};
