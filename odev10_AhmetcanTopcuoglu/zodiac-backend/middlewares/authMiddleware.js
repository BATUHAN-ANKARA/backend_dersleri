const jwt = require("jsonwebtoken");

const authMiddleware = (req,res,next)=>{

    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) return res.status(401).json({msg:"Token bulunamadı, yetkilendirme reddedildi."});

    try {

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded; //Userid içeriyor

        next();

    } catch(err){
        return res.status(401).json({msg:"Token geçersiz."});
    }
};

module.exports = authMiddleware;