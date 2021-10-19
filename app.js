const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const path = require("path");
const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

///SIGNUP SCHEMA///
const signUpModel = require('./Schema')


const cors = require("cors");
///body allow///
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const DB_URI = `mongodb+srv://jaffaraman:jaffar12345@cluster0.agegk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.connect(DB_URI)

app.use("/", express.static(path.join(__dirname, "./web/build")));

app.get("/api/v1/signup", (req, res) => {
    signUpModel.findOne({emailAddress : "amanjaffar50@gmail.com"} ,  (err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    if(data){
                        console.log("this email is already exists")
                    }else{
                        console.log("new email address")
                    }
                }
    })
    res.send("<h1> GET Request </h1> ");
//   console.log("hit horhi hai ");
});

app.post("/api/v1/signup", async (req, res) => {
   
    const body = req.body;
    const passHash = await bcrypt.hash(body.password , 10)
    const confrmHash = await bcrypt.hash(body.confirmPassword , 10)
 
    // console.log(body);
    try {
        const userObj = {
            firstName: body.firstName,
            lastName: body.lastName,
            emailAddress: body.emailAddress,
            password: passHash,
            confirmPassword: confrmHash,
          };
          if (
            !userObj.firstName ||
            !userObj.lastName ||
            !userObj.emailAddress ||
            !userObj.password ||
            !userObj.confirmPassword
          ){
              console.log(`Required Fields is missing`); 
          }else{
                  if( body.password !== body.confirmPassword) {
                          console.log(`Your password's is not match` , body.password , body.confirmPassword); 
      
                  }else{
                    signUpModel.findOne({emailAddress : userObj.emailAddress} , (err,data)=>{
                            if(err){
                                throw err
                            }else{
                                if(data){
                                    throw "This Email Address is Already Exist"
                                }else{

                                }
                            }
                    })
                    signUpModel.create(userObj, (err,data)=>{
                        if(err){
                                 throw err
                        }else{
                            console.log("create data=>>" ,data)
                            res.send("User SuccessFully SignUp...")
                        }
                    })
                      console.log("USER OBJECT ==>>" ,userObj)
                  } 
      }       
    }
 
    catch (error) {
                console.log(`Get a error During a SignUp ${error}` );    
    }

});

app.get("/**", (req, res) => {
  res.redirect("/");
});


mongoose.connection.on("connected" , ()=>console.log("mongoose connected"))
mongoose.connection.on("error" , (error)    =>console.log("mongoose error" , error))
app.listen(PORT, () => console.log(`Server is Running on localhost:${PORT} `));
