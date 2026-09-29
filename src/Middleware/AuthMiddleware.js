import jwt from "jsonwebtoken";
import User from "../modals/User.modal.js";
const AuthMiddleware = async(req,res,next)=>{
    try{
const token = req.cookies.accessToken || req.header("Authorization")?.replace("Bearer ","")
console.log("Token:", token);
if(!token){
    res.status(401).json({
        success:false,
        message:"Unauthorized"
    })
}
const decoded = jwt.verify(token,process.env.JWT_SECRET)
const user = await User.findById(decoded.id).select("-password -refreshToken")
if(!user){
    res.status(401).json({
        success:false,
        message:"Unauthorized"
    })
}
req.user = user;
next()
    }
    catch(error){
return res.status(401).json({
    success:false,
    message:error.message
})
    }
}

export default AuthMiddleware