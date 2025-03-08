const User = require("../model/user.model");
const md5 = require("md5");

exports.register = async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;
    const existUser = await User.find({ email: email });
    if (existUser.length > 0) {
      throw new Error("Bu email zaten kullanımda");
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
        message: "Kullanıcı kaydı başarılı",
        data: user,
      })
      .status(201);
  } catch (error) {
    res
      .json({ error: true, success: false, message: error.message })
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
        .json({ error: false, success: true, message: "Giriş başarılı" })
        .status(200);
    } else {
      throw new Error("Email veya şifre hatalı");
    }
  } catch (error) {
    res
      .json({ error: true, success: false, message: error.message })
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
      .json({ error: true, success: false, message: error.message })
      .status(500);
  }
};
exports.updatePassword = async (req, res) => {
  try {
    const { userId } = req.params;
    const { password, newPassword } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("Kullanıcı bulunamadı");
    }
    const _password = md5(password);
    if (user.password != _password) {
      throw new Error("Şifreniz yanlış");
    }
    const _newPassword = md5(newPassword);
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { password: _newPassword },
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
      .json({ error: true, success: false, message: error.message })
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
    res.status(200).json({
      error: false,
      succes: true,
      message: "Kullanıcı başarılı bir şekilde getirildi",
      data: user,
    });
  } catch (error) {
    res
      .json({ error: true, success: false, message: error.message })
      .status(500);
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("Kullanıcı bulunamadı");
    }
    await User.findByIdAndDelete(userId);
    res
      .status(200)
      .json({ error: false, succes: true, message: "Kullanıcı silindi" });
  } catch (error) {
    res
      .status(500)
      .json({ error: true, succes: false, message: error.message });
  }
};
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      error: false,
      succes: true,
      message: "Kullanıcılar listelendi",
      data: users,
    });
  } catch (error) {
    res
      .json({ error: true, success: false, message: error.message })
      .status(500);
  }
};
exports.getUsersByName = async (req, res) => {
  try {
    const { name } = req.params;
    const users = await User.find({ name: name });
    if (users.length===0) {
      throw new Error("Böyle bir kullanıcı bulunamadı")
    }
      // if ile db de verisi bulunmayan kullanıcı kontrol edildi

    res.status(200).json({
      error: false,
      succes: true,
      message: "Kullanıcılar listelendi",
      data: users,
    });
  } catch (error) {
    res
      .json({ error: true, success: false, message: error.message })
      .status(500);
  }
};
exports.getUsersBySurname = async (req, res) => {
  try {
    const { surname } = req.params;
    const users = await User.find({ surname: surname });
    if (users.length < 1) {
      throw new Error("Böyle bir kullanıcı bulunamadı")
    }
    
    // aynı şekilde verisi bulunmayan için kontrol yapıldı 

    res.status(200).json({
      error: false,
      succes: true,
      message: "Kullanıcılar listelendi",
      data: users,
    });
  } catch (error) {
    res
      .json({ error: true, success: false, message: error.message })
      .status(500);
  }
};
