const User = require("../models/user.model");
const utils = require("../utils/index");

//birthdate alınacak - age ve burç hesaplanacak unutmayın!
exports.register = async (req) => {
  try {
    const { name, surname, email, password, birthDate, gender } = req.body;
    const existUser = await User.findOne({ email: email });
    if (existUser) {
      throw new Error("Email zaten kullanımda");
    }
    const _password = utils.helper.hashToPassword(password);
    const [ year,month, day] = birthDate.split("-").map(str => parseInt(str, 10));
    const age = utils.helper.yasHesap(birthDate);
    const zodiac = utils.helper.burcHesap(day,month);
    
    const user = new User({
      name,
      surname,
      email,
      password: _password,
      gender,
      birthDate,
      age,
      zodiac,
    });
    await user.save();
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

exports.login = async (req) => {
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

exports.updateUser = async (req) => {
  try {
    const { userId } = req.params;
    const { name, surname } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("Kullanıcı bulunamadı");
    }
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name: name, surname: surname },
      { new: true }
    );
    return updatedUser;
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

exports.getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error);
  }
};


exports.sorgu1 = async () => {
  try {
    const users = await User.find({
      gender: { $exists: true, $ne: null },
      zodiac: { $exists: true, $ne: null },
      age: { $exists: false }
    });
    return users;
  } catch (error) {
    throw new Error(error);
  }
};

exports.sorgu2 = async () => {
  try {
    const users = await User.find({
      gender: "Kadın",
      zodiac: { $exists: true, $ne: null },
      age: { $gte: 18, $lte: 40 }
    });
    return users;
  } catch (error) {
    throw new Error(error);
  }
};

exports.sorgu3 = async () => {
  try {
    const users = await User.find({
      $or: [
        { gender: { $exists: false } },
        { birthDate: { $exists: false } },
        { age: { $exists: false } }
      ]
    });
    return users;
  } catch (error) {
    throw new Error(error);
  }
};

exports.sorgu4 = async () => {
  try {
    const users = await User.find({
      $or: [
        { gender: "Erkek" },
        { zodiac: { $exists: true, $ne: null } }
      ]
    });
    return users;
  } catch (error) {
    throw new Error(error);
  }
};
