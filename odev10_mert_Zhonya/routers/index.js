const blogRouter = require("./blog.router").blog;
const userRouter = require("./user.router").user;
const zodiacRouter = require("./zodiac.router").zodiac;
const relationshipRouter = require("./relationship.router").relationship;
const tarotRouter = require("./tarot.router").tarot

module.exports = {
  blogRouter,
  userRouter,
  zodiacRouter,
  relationshipRouter,tarotRouter,
};
