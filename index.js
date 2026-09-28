import express from "express";

const app =express();

app.get("/",(req,res)=>{
    res.send("Hello World");
});
app.post("api/v1/signup",(req,res)=>{

})
app.post("api/v1/login",(req,res)=>{

})
app.post("api/v1/logout",(req,res)=>{

})
app.post("api/v1/create-note",(req,res)=>{

})
app.get("api/v1/get-notes",(req,res)=>{

})

app.put("api/v1/update-note",(req,res)=>{

})

app.delete("api/v1/delete-note",(req,res)=>{
})

app.patch("api/v1/share",(req,res)=>{

})



app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})