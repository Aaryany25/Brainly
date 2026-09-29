import express from "express";

import UserRouter from "./routes/User.routes.js";
const app =express();

app.use(express.json())


const GenerateToken = async function(UserId){
try{
    const user = await User.findById(UserId);
    const accessToken = await user.generateToken()
    const refreshToken = await user.generateRefreshToken()
    user.refreshToken=refreshToken;
    await user.save({validateBeforeSave:false})
    return {accessToken,refreshToken}
}
catch(error){
    console.error(error);
}
}
app.get("/",(req,res)=>{
    res.send("Hello World");
});


app.use("/api/v1/user",UserRouter)
// app.post("/api/v1/login",User)
app.post("/api/v1/logout",(req,res)=>{

})
app.post("/api/v1/create-note",(req,res)=>{

})
app.get("/api/v1/get-notes",(req,res)=>{

})

app.put("/api/v1/update-note",(req,res)=>{

})

app.delete("/api/v1/delete-note",(req,res)=>{
})

app.patch("/api/v1/share",(req,res)=>{

})



app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})

export { app }