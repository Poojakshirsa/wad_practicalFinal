const express = require("express");
const app = express();


app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/public/index.html");
})

app.get("/home",(req,res)=>{
    res.sendFile(__dirname+"/public/about.html");
})

app.get("/contact",(req,res)=>{
    res.sendFile(__dirname+"/public/contact.html");
})


app.listen(5000);