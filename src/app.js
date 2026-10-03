import express from "express";
// import AuthMiddleware from "./Middleware/AuthMiddleware.js";
import UserRouter from "./routes/User.routes.js";
import cookieParser from "cookie-parser";
import NotesRouter from "./routes/Notes.routes.js";
import ShareRouter from "./routes/Share.routes.js";
// app.use(express.json());
const app =express();

app.use(express.json())
app.use(cookieParser());


app.get("/",(req,res)=>{
    res.send("Hello World");
});


app.use("/api/v1/user",UserRouter)
// app.post("/api/v1/login",User)
app.post("/api/v1/logout",(req,res)=>{

})
app.use('api/v1/notes',NotesRouter)
app.use('api/v1/share',ShareRouter)
// app.get("/api/v1/create-note",AuthMiddleware,(req,res)=>{
// res.status(200).json({
//     success:true,
//     message:"Note Created Successfully"
// })})
// app.get("/api/v1/get-notes",(req,res)=>{

// })

// app.put("/api/v1/update-note",(req,res)=>{

// })

// app.delete("/api/v1/delete-note",(req,res)=>{
// })

// app.patch("/api/v1/share",(req,res)=>{

// })



app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})

export { app }