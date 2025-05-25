const blogService = require("./blog.service");
const userService = require("./user.service");
const zodiacService = require("./zodiac.service");
const complatibilityService = require("./compatibility.service");
const tarotService = require("./tarot.service");

module.exports = {
  blog: blogService,
  user: userService,
  zodiac: zodiacService,
  compatibility: complatibilityService,
  tarot: tarotService,
};
