const express = require("express");
const PORT = process.env.PORT || 8000 ;
const app = express();
const path = require("path");
const mongoose = require("mongoose")
var bcrypt = require('bcryptjs');

const cors = require('cors');
///body allow///
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors());

// const DB_URI = `mongodb+srv://jaffaraman:jaffar12345@cluster0.agegk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
// mongoose.connect(DB_URI) 


app.use("/" ,express.static(path.join(__dirname , "./web/build")))


app.get("/api/v1/signup" , (req ,res)=>{
    res.send("<h1> GET Request </h1> ")
    console.log("hot horhi hai ")
})

app.post("/api/v1/signup" , (req ,res)=>{
        const body  = req.body
        console.log(body)

        const userObj = {
            firstName : body.firstName,
            lastName : body.lastName,
            emailAddress : body.emailAddress,
            password : bcrypt.hashSync(body.password ,10),
            confirmPassword : body.confirmPassword,
        }
        if(!userObj.emailAddress || !userObj.firstName || !userObj.password || 
            !userObj.confirmPassword || !userObj.lastName
             ){
                 res.send("required field missing")
             }
             else{
                console.log("res araha hai " , userObj)
                res.send("Successfully SignUp")
             }





})



app.get("/**" , (req,res)=>{
    res.redirect("/")
})

app.listen(PORT , ()=>console.log(`Server is Running on localhost:${PORT} ` ))