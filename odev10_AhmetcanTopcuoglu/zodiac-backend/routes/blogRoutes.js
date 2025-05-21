const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const authMiddleware = require("../middlewares/authMiddleware");
const Blog = require("../models/Blog");

// Blog listele (tüm bloglar)
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author", "username email").sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ msg: "Sunucu hatası" });
  }
});

// Blog oluştur
router.post(
  "/",
  authMiddleware,
  [
    body("title").notEmpty().withMessage("Başlık zorunlu"),
    body("content").isLength({ min: 10 }).withMessage("İçerik en az 10 karakter olmalı"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      const blog = new Blog({
        title: req.body.title,
        content: req.body.content,
        author: req.user.userId,
      });
      await blog.save();
      res.status(201).json(blog);
    } catch (err) {
      res.status(500).json({ msg: "Sunucu hatası" });
    }
  }
);

// Blog beğenme (like)
router.post("/:id/like", authMiddleware, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ msg: "Blog bulunamadı" });

    if (blog.likes.includes(req.user.userId)) {
      return res.status(400).json({ msg: "Zaten beğendiniz" });
    }
    blog.likes.push(req.user.userId);
    await blog.save();
    res.json({ msg: "Beğenildi", likesCount: blog.likes.length });
  } catch (err) {
    res.status(500).json({ msg: "Sunucu hatası" });
  }
});

module.exports = router;
