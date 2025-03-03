const User = require("../model/user.model");
const md5 = require("md5");

exports.createUser = async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;
    const _password = md5(password);
    const user = new User({
      name,
      surname,
      password: _password,
      email,
    });
    await user.save();
    res.status(201).json({
      error: false,
      succes: true,
      message: "Kayıt başarılı",
      data: user,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: true, succes: false, message: error.message });
  }
};
exports.updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { name, surname } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name: name, surname: surname },
      { new: true }
    );
    res
      .status(200)
      .json({
        error: false,
        succes: true,
        message: "Güncelleme başarılı",
        data: updatedUser,
      });
  } catch (error) {
    res
      .status(500)
      .json({ error: true, succes: false, message: error.message });
  }
};
exports.getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    res
      .status(200)
      .json({
        error: false,
        succes: true,
        message: "Kullanıcı listelendi",
        data: user,
      });
  } catch (error) {
    res
      .status(500)
      .json({ error: true, succes: false, message: error.message });
  }
};
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res
      .status(200)
      .json({
        error: false,
        succes: true,
        message: "Kullanıcılar listelendi",
        data: users,
      });
  } catch (error) {
    res
      .status(500)
      .json({ error: true, succes: false, message: error.message });
  }
};
exports.deleteUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    await User.findByIdAndUpdate(userId);
    res
      .status(200)
      .json({ error: false, succes: true, message: "Kullanıcı silindi" });
  } catch (error) {
    res
      .status(500)
      .json({ error: true, succes: false, message: error.message });
  }
};
exports.updatePassword = async (req, res) => {
  try {
    const { userId } = req.params;
    const { newPassword } = req.body;
    const _password = md5(newPassword);
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { password: _password },
      { new: true }
    );
    res
      .status(200)
      .json({
        error: false,
        succes: true,
        message: "Güncelleme Başarılı",
        data: updatedUser,
      });
  } catch (error) {
    res
      .status(500)
      .json({ error: true, succes: false, message: error.message });
  }
};