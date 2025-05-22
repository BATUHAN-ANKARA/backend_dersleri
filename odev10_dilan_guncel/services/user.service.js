const User = require("../models/user.model");
const { getZodiacSign } = require("../utils/helper");
const utils = require("../utils/index");

/*
create
login
changepassword
delete 
getall
updateuserinfo
*/
exports.createUser = async (req) => {
  try {
    const { name, surname, email, password, birthDate, gender } = req.body;

    const existUser = await User.findOne({ email });
    if (existUser) {
      throw new Error("Bu email zaten kullanımda");
    }

    const _password = utils.helper.hashToPassword(password);

    const birth = new Date(birthDate);

    const zodiacSign = utils.helper.getZodiacSign
      ? utils.helper.getZodiacSign(birth)
      : getZodiacSign(birth);
    const user = new User({
      name,
      surname,
      email,
      password: _password,
      birthDate,
      gender,
      zodiacSign,
    });

    await user.save();

    // const token = utils.helper.createToken(user._id, user.name);

    // return { user, token };
  } catch (error) {
    throw new Error(error.message || error);
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
