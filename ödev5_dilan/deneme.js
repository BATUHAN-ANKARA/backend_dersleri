exports.register = async (req, res) => {
  try {
    const { name, email, surname, password } = req.body;

    if (await User.exists({ email })) {
      return res.status(400).json({
        error: true,
        success: false,
        message: "Bu email önceden kullanılmış",
      });
    }

    const _password = utils.hashToPassword(password);
    const user = new User({
      name,
      surname,
      email,
      password: _password,
    });
    await user.save();
    res.status(201).json({
      error: false,
      success: true,
      message: "Kullanıcı kaydı başarılı",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      success: false,
      message: error.message,
    });
  }
};


