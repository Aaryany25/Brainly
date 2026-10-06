import dotenv from "dotenv"
dotenv.config()
import { app } from "./app.js";
// import ConnectDB from "./db/connectDB.js";
import ConnectDB from "./db/db.js";
ConnectDB().then(()=>{
    app.listen(process.env.PORT,()=>{
    console.log("Server Started !")
})
}).catch((error)=>{
console.error("Connection to MongoDB Server Failed!",error)
})