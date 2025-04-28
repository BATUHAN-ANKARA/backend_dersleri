const User = require("../models/user.model");
const utils = require("../utils/index");

exports.register = async (req) => {
  try {
    const { name, surname, email, password, birthDate, gender } = req.body;

    const existUser = await User.findOne({ email });
    if (existUser) {
      throw new Error("Email zaten kullanımda");
    }

    const hashedPassword = utils.helper.hashToPassword(password);

    const user = new User({
      name,
      surname,
      email,
      password: hashedPassword,
      birthDate,
      gender,
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

    const hashedPassword = utils.helper.hashToPassword(password);

    const user = await User.findOne({ email, password: hashedPassword });
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

    await findUserById(userId);

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, surname },
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

    await findUserById(userId);

    await User.findByIdAndDelete(userId);

    return { message: "Kullanıcı başarıyla silindi" };
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

exports.changePassword = async (req) => {
  try {
    const { id } = req.params;
    const { password, newPassword } = req.body;

    const user = await findUserById(id);

    const currentPassword = utils.helper.hashToPassword(password);
    const updatedPassword = utils.helper.hashToPassword(newPassword);

    if (user.password !== currentPassword) {
      throw new Error("Şu anki şifreniz yanlış");
    }

    user.password = updatedPassword;
    await user.save();

    return user;
  } catch (error) {
    throw new Error(error);
  }
};
