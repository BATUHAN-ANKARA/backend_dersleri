const express = require("express");
const router = express.Router();
const { zodiacSigns, getHoroscope, getCompatibility } = require("../services/zodiacService");

// Tüm burçlar
router.get("/signs", (req, res) => {
  res.json(zodiacSigns);
});

// Burç yorumu: günlük, haftalık, aylık, yıllık
router.get("/horoscope", (req, res) => {
  const { sign, period } = req.query;

  if (!sign || !zodiacSigns.includes(sign)) {
    return res.status(400).json({ msg: "Geçerli bir burç girin" });
  }

  if (!["daily", "weekly", "monthly", "yearly"].includes(period)) {
    return res.status(400).json({ msg: "Geçerli bir periyot girin (daily, weekly, monthly, yearly)" });
  }

  const horoscope = getHoroscope(sign, period);
  res.json({ sign, period, horoscope });
});

// İki burcun uyumu
router.get("/compatibility", (req, res) => {
  const { sign1, sign2 } = req.query;

  if (!sign1 || !sign2 || !zodiacSigns.includes(sign1) || !zodiacSigns.includes(sign2)) {
    return res.status(400).json({ msg: "Geçerli iki burç girin" });
  }

  const compatible = getCompatibility(sign1, sign2);
  res.json({ sign1, sign2, compatible });
});

module.exports = router;
