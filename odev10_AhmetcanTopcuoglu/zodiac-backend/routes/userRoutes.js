const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");


// /api/user/profile
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    if (!user) return res.status(404).json({ msg: "Kullanıcı bulunamadı" });
    res.json(user);
  } catch (err) {
    res.status(500).send("Sunucu hatası");
  }
});

// Kullanıcı bilgilerini güncelleme
router.put(
  "/updateinfo",
  authMiddleware,
  [
    body("name").optional().isLength({ min: 3 }).withMessage("Kullanıcı adı en az 3 karakter"),
    body("email").optional().isEmail().withMessage("Geçerli email girin"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      const updates = {};
      if (req.body.name) updates.name = req.body.name;
      if (req.body.email) updates.email = req.body.email;

      const updatedUser = await User.findByIdAndUpdate(req.user.userId, updates, { new: true }).select("-password");
      res.json(updatedUser);
    } catch (err) {
      res.status(500).json({ msg: "Sunucu hatası" });
    }
  }
);

// Şifre değiştirme
router.put(
  "/changepassword",
  authMiddleware,
  [
    body("oldPassword").notEmpty().withMessage("Eski şifre gerekli"),
    body("newPassword").isLength({ min: 6 }).withMessage("Yeni şifre en az 6 karakter"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      const user = await User.findById(req.user.userId);
      if (!user) return res.status(404).json({ msg: "Kullanıcı bulunamadı" });

      const isMatch = await bcrypt.compare(req.body.oldPassword, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Eski şifre yanlış" });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(req.body.newPassword, salt);
      await user.save();

      res.json({ msg: "Şifre başarıyla değiştirildi" });
    } catch (err) {
      res.status(500).json({ msg: "Sunucu hatası" });
    }
  }
);

module.exports = router;