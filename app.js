
const express = require("express");
const app = express();
const path = require ("path");

app.get ("/",(req,res)=> {
    res.sendFile(path.join(__dirname,"views/index.html"))
});

app.get ("/about",(req,res)=> {
    res.sendFile(path.join(__dirname,"views/about.html"))
});

app.get ("/music",(req,res)=> {
    res.sendFile(path.join(__dirname,"views/music.html"))
});

app.get ("/contact",(req,res)=> {
    res.sendFile(path.join(__dirname,"views/contact.html"))
});

app.use(express.static("public"));
//app.use (express.static("./public")); //(path donde express busca los archivos o imagenes)

app.listen(3030,()=>{
    console.log("Sevidor ejecutandose en el puerto 3030");
});
