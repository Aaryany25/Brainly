import {mongoose ,Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const UserSchema = new Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    refreshToken:{type:String}
})

UserSchema.pre("save",async function(next){
    if(!this.isModified("password")) return 
    const HashPassword = await bcrypt.hash(this.password,10);
    this.password = HashPassword;
    // next();

})
 UserSchema.methods.ComparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
 }
UserSchema.methods.generateToken = async function(){
    jwt.sign({
        id:this.id,
        username:this.username
    },process.env.JWT_SECRET,{expiresIn:"1day"
    })
}
UserSchema.methods.generateRefreshToken = async function(){
    jwt.sign({
        id:this.id
    },process.env.REFRESH_SECRET,{expiresIn:"7days"
    })
}
 const User = mongoose.model("User",UserSchema)
export default User;