const router = require("express").Router();
const controller = require("../controller/user.controller");


router.post("/register",controller.register);   // kayıt olma

router.post("/login",controller.login);         // giriş 

router.put("/updateUser/:userId",controller.updateUser); // kullanıcıyı güncelle

router.put("/updatePassword/:userId",controller.updatePassword); // şifreyi güncelle

router.delete("/deleteUser/:userId",controller.deleteUser);  // kullanıcıyı sil

router.get("/getUserById/:userId",controller.getUserById);   // Id ile kullanıcı getir

router.get("/getAllUsers",controller.getAllUsers); // tüm kullanıcıları getir

router.get("/getUsersByName/:name",controller.getUsersByName)  // isim ile kullanıcı getir

router.get("/getUsersBySurname/:surname",controller.getUsersBySurname)  // soyisimle kullanıcı getir



module.exports = router;