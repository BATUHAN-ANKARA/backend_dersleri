const blogService = require("./blog.service");
const userService = require("./user.service");
const zodiacService = require("./zodiac.service");

module.exports = {
  blog: blogService,
  user: userService,
  zodiac: zodiacService,
};
