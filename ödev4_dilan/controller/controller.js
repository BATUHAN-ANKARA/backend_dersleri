const md5 = require("md5");
const User = require("../model/user.model");

exports.register = async (req, res) => {
    try {
        const { name, surname, email, password } = req.body;
        
        if (await User.exists({ email })) {
            return res.status(400).json({ error: true, success: false, message: "Bu email önceden kullanılmış" });
        }

        const user = new User({ name, surname, email, password: md5(password) });
        await user.save();

        res.status(201).json({ error: false, success: true, message: "Kullanıcı kaydı başarılı", data: user });
    } catch (error) {
        res.status(500).json({ error: true, success: false, message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password: md5(password) });
        
        if (!user) {
            return res.status(401).json({ error: true, success: false, message: "Giriş başarısız" });
        }

        res.status(200).json({ error: false, success: true, message: "Giriş başarılı" });
    } catch (error) {
        res.status(500).json({ error: true, success: false, message: error.message });
    }
};

exports.createUser = async (req, res) => {
    try {
        const { name, surname, email, password } = req.body;
        const user = new User({ name, surname, email, password: md5(password) });
        await user.save();

        res.status(201).json({ error: false, success: true, message: "Kayıt başarılı", data: user });
    } catch (error) {
        res.status(500).json({ error: true, success: false, message: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const { name, surname } = req.body;
        const updatedUser = await User.findByIdAndUpdate(userId, { name, surname }, { new: true });
        
        if (!updatedUser) {
            return res.status(404).json({ error: true, success: false, message: "Kullanıcı bulunamadı" });
        }

        res.status(200).json({ error: false, success: true, message: "Güncelleme başarılı", data: updatedUser });
    } catch (error) {
        res.status(500).json({ error: true, success: false, message: error.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId);
        
        if (!user) {
            return res.status(404).json({ error: true, success: false, message: "Kullanıcı bulunamadı" });
        }

        res.status(200).json({ error: false, success: true, message: "Kullanıcı listelendi", data: user });
    } catch (error) {
        res.status(500).json({ error: true, success: false, message: error.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ error: false, success: true, message: "Kullanıcılar listelendi", data: users });
    } catch (error) {
        res.status(500).json({ error: true, success: false, message: error.message });
    }
};

exports.deleteUserById = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findByIdAndDelete(userId);
        
        if (!user) {
            return res.status(404).json({ error: true, success: false, message: "Kullanıcı bulunamadı" });
        }

        res.status(200).json({ error: false, success: true, message: "Kullanıcı silindi" });
    } catch (error) {
        res.status(500).json({ error: true, success: false, message: error.message });
    }
};

exports.updatePassword = async (req, res) => {
    try {
        const { userId } = req.params;
        const { newPassword } = req.body;
        const updatedUser = await User.findByIdAndUpdate(userId, { password: md5(newPassword) }, { new: true });
        
        if (!updatedUser) {
            return res.status(404).json({ error: true, success: false, message: "Kullanıcı bulunamadı" });
        }

        res.status(200).json({ error: false, success: true, message: "Şifre güncellendi", data: updatedUser });
    } catch (error) {
        res.status(500).json({ error: true, success: false, message: error.message });
    }
};

