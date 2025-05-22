const zodiacRouter = require("./zodiac.router").zodiac;
const userRouter = require("./user.router").user;
const blogRouter = require("./blog.router").blog;
const compatibilityRouter = require("./compatibility.router").compatibility;
module.exports = {
  zodiacRouter,
  userRouter,
  blogRouter,
  compatibilityRouter,
};
