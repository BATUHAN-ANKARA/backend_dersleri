const router = require("express").Router();
const controller = require("../controller/user.controller");

router.post("/register", controller.register);

module.exports = {
  user: router,
};
