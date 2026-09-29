import { UserRegistrationSchema } from "../validators/validation.js";
import User from "../modals/User.modal.js";


const GenerateToken = async function(UserId){
try{
    const user = await User.findById(UserId);
    const accessToken = await user.generateToken()
    const refreshToken = await user.generateRefreshToken()
    // console.log("Refresh token:", refreshToken);
    user.refreshToken=refreshToken;
    // console.log("User before save:", user);
    await user.save({validateBeforeSave:false})
    return {accessToken,refreshToken}
}
catch(error){
    console.error(error);
}
}


const Signup = async(req,res)=>{
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
}

const Login= async (req,res)=>{

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

        return res.status(200).cookie("accesstoken",accesstoken,cookieOptions)
    .cookie("refreshtoken",refreshtoken,cookieOptions).json({
            message:"User Logged In Successfully",
            data:loggedInUser,
        })

}

export {Signup,Login}