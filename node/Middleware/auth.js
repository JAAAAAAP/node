const jwt = require("jsonwebtoken");
exports.auth = async(req,res,next) => {
    try{
        const token = req.headers["authtoken"]
        if(!token){
            return res.send('mai mee token')
        }
        const decoded = jwt.verify(token,'jwtsecret')
        req.user = decoded.user
        next();
    }catch(err){
        console.log(err)
        res.send('err na ja')
    }
}