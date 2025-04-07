const router = require("express").Router();
const controller = require("../controllers/user.controller");

router.post("/register", controller.register);
router.post("/login", controller.login);
router.put("/updateUser/:userId", controller.updateUser);
router.delete("/deleteUser/:userId", controller.deleteUser);
router.get("/getAllUsers", controller.getAllUsers);

router.get("/sorgu1", controller.sorgu1);
router.get("/sorgu2", controller.sorgu2);
router.get("/sorgu3", controller.sorgu3);
router.get("/sorgu4", controller.sorgu4);


module.exports = {
  user: router,
};
