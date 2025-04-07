const User = require("../models/user.model");
const utils = require("../utils/index");

//birthdate alınacak - age ve burç hesaplanacak unutmayın!
exports.register = async (req) => {
  try {
    const { name, surname, email, password } = req.body;
    const existUser = await User.findOne({ email: email });
    if (existUser) {
      throw new Error("Email zaten kullanımda");
    }
    const _password = utils.helper.hashToPassword(password);
    const user = new User({
      name,
      surname,
      email,
      password: _password,
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
