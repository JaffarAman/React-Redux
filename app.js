const express = require("express");
const PORT = process.env.PORT || 5000 ;
const app = express();
const path = require("path");

app.use(   "/" ,express.static(path.join(__dirname , "./web/build")))


app.get("/api/v1/profile" , (req ,res)=>{
    res.send("<h1> GET Request </h1> ")
})



app.get("/**" , (req,res)=>{
    res.redirect("/")
})

app.listen(PORT , ()=>console.log(`Server is Running on localhost:${PORT} ` ))