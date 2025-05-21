const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {validationResult}=require("express-validator");

exports.register = async (req,res)=> {
const errors = validationResult(req);
if(!errors.isEmpty())
    return res.status(400).json({errors:errors.array()});

const {name,email,password}=req.body;

try{
    let user = await User.findOne({email});

    if(user)
        return res.status(400).json({msg:"Email zaten kayıtlı"});

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    user = new User({
        name,
        email,
        password : hashedPassword,
    });

    await user.save();

    const payload = { userId: user._id};
    const token = jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn: "7d" ,
    });

    res.status(201).json({token});

}
    catch (err){
        console.error(err);
        res.status(500).send("Sunucu Hatası");
    }
};


exports.login = async (req,res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty())
        return res.status(400).json({erorrs:errors.array()});

    const {email,password} = req.body;

    try{
        const user =await User.findOne({email});
        if(!user)
            return res.status(400).json({msg:"Geçersiz email veya şifre"});

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch)
            return res.status(400).json({msg:"Geçersiz email veya şifre"});

        const payload = { userId : user._id};
        const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"7d",

        });
        
        res.json({token});
    }
    catch(err){
        console.error(err);
        res.status(500).send("Sunucu hatası");
    }

;}