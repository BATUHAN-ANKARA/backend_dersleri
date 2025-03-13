const User = require("../model/user.model");
const md5 = require("md5");

exports.register = async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;
    const existUser = await User.find({ email: email });
    if (existUser.length > 0) {
      throw new Error("Bu email zaten kullanımda.");
    }
    const _password = md5(password);
    const user = new User({
      name,
      surname,
      email,
      password: _password,
    });
    await user.save();
    res
      .json({
        error: false,
        success: true,
        message: "kullanıcı kaydı başarılı",
        data: user,
      })
      .status(201);
      
  } catch (error) {
    res
      .json({
        error: true,
        success: false,
        message: error.message,
      })
      .status(500);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const _password = md5(password);
    const user = await User.find({ email: email, password: _password });
    if (user.length > 0) {
      res
        .json({
          error: false,
          success: true,
          message: "giriş başarılı",
        })
        .status(200);
    } else {
      throw new Error("Kullanıcı bilgileri yanlış");
    }
  } catch (error) {
    res
      .json({
        error: true,
        success: false,
        message: error.message,
      })
      .status(500);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { name, surname } = req.body;
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("Kullanıcı bulunamadı");
    }
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name: name, surname: surname },
      { new: true }
    );
    res
      .json({
        error: false,
        success: true,
        message: "Kullanıcı bilgileri güncellendi",
        data: updatedUser,
      })
      .status(200);
  } catch (error) {
    res
      .json({
        error: true,
        success: false,
        message: error.message,
      })
      .status(500);
  }
};

exports.updatePassword = async (req, res) => {
  try {
    const { userId } = req.params;
    const { password, newPassword } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("aKullanıcı bulunamadı");
    }
    const _password = md5(password);
    if (user.password != _password) {
      throw new Error("Şifreniz yanlış");
    }
    const _newPassword = md5(newPassword);
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        password: _newPassword,
      },
      { new: true }
    );
    res
      .json({
        error: false,
        success: true,
        message: "Şifre güncellendi",
        data: updatedUser,
      })
      .status(200);
  } catch (error) {
    res
      .json({
        error: true,
        success: false,
        message: error.message,
      })
      .status(500);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("kullanıcı bulunamadı");
    }
    await User.findByIdAndDelete(userId);
    res
      .json({ error: false, success: true, message: "kullanıcı silindi" })
      .status(200);
  } catch (error) {
    res
      .json({
        error: true,
        success: false,
        message: error.message,
      })
      .status(500);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("Kullanıcı bulunamadı");
    }
    res
      .json({
        error: false,
        success: true,
        message: "kullanıcı başarılı şekilde getirildi",
        data: user,
      })
      .status(200);
  } catch (error) {
    res
      .json({
        error: true,
        success: false,
        message: error.message,
      })
      .status(500);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res
      .json({
        error: false,
        success: true,
        message: "kullanıcılar başarılı şekilde listelendi",
        daata: users,
      })
      .status(200);
  } catch (error) {
    res
      .json({
        error: true,
        success: false,
        message: error.message,
      })
      .status(500);
  }
};

exports.getUserByName = async (req, res) => {
  try {
    const { name } = req.params;
    const users = await User.find({ name: name });
    res
      .json({
        error: false,
        success: true,
        message: "kullanıcılar başarılı şekilde listelendi",
        daata: users,
      })
      .status(200);
  } catch (error) {
    res
      .json({
        error: true,
        success: false,
        message: error.message,
      })
      .status(500);
  }
};

exports.getUsersBySurname = async (req, res) => {
  try {
    const { surname } = req.params;
    const users = await User.find({ surname: surname });
    res
      .json({
        error: false,
        success: true,
        message: "kullanıcılar başarılı şekilde listelendi",
        daata: users,
      })
      .status(200);
  } catch (error) {
    res
      .json({
        error: true,
        success: false,
        message: error.message,
      })
      .status(500);
  }
};
