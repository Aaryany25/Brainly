import { Router } from "express";
import { UserRegistrationSchema } from "../validators/validation.js";
// import {UserRegis}
import User from "../modals/User.modal.js";
const router = Router();

router.post("/signup",async(req,res)=>{
console.log("working")
const {username,password} = UserRegistrationSchema.parse(req.body);

const existUser = await User.findOne({username})

if(existUser){
    res.status(400).json({
        success:false,
        message:"User Already Exist"
    })
}

 const newUser = await User.create({username,password})

res.status(200).json({
    success:true,
    message:"User Registered Successfully",
    data:newUser})
})

router.post("/login",async (req,res)=>{

    const {username,password} = UserRegistrationSchema.parse(req.body);

    const existUser = await User.findOne({username})
    if(!existUser){
        res.status(400).json({
            success:false,
            message:"User Not Found"
        })
    }

    const correctPassword = await existUser.ComparePassword(password)
    if(!correctPassword){
        res.status(400).json({
            success:false,
            message:"Invalid Password"
        })
    }
        const {accesstoken,refreshtoken} = await GenerateToken(existUser._id)
        const loggedInUser = await User.findById(existUser._id).select("-password -refreshToken")

        return res.status(200).json({
            message:"User Logged In Successfully",
            data:loggedInUser,
        })

})
export default router