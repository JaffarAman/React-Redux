const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const path = require("path");
const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

///SIGNUP SCHEMA///
const {signUPModel , postModel} = require("./Schema");

const cors = require("cors");
///body allow///
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const DB_URI = `mongodb+srv://jaffaraman:jaffar12345@cluster0.agegk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(DB_URI);

app.use("/", express.static(path.join(__dirname, "./web/build")));

/////login API////

app.post("/api/v1/signin", (req, res) => {
  const body = req.body;
  console.log(body);
  try {
    const userObj = {
      emailAddress: body.emailAddress,
      password: body.password,
    };
    if (!userObj.emailAddress || !userObj.password) {
      throw `Required Fields is missing`;
    } else {
      signUPModel.findOne(
        { emailAddress: userObj.emailAddress },
        async (err, data) => {
          if (err) {
            throw err;
          } else {
                if(data){
                    const isMatch = await bcrypt.compare(userObj.password, data.password)
                    .then(response=>{
                        if(response){
                            console.log(response)
                            res.send({status:"login successfully" , data})
                            
                        }else{
                            res.send("password is not match")
                            console.log("isMatch not")
                        }
                    })
                    .catch(err=>console.log(err))
                    
                }else{
                    res.send("incorrect Email Address")
                }

          }
        }
      );
    }
  } catch (error) {
    res.send(error.message);
  }


});

/////SIGNUP API////

app.post("/api/v1/signup", async (req, res) => {
  const body = req.body;
  const passHash = await bcrypt.hash(body.password, 10);
  const confrmHash = await bcrypt.hash(body.confirmPassword, 10);

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
    ) {
      console.log(`Required Fields is missing`);
    } else {
      if (body.password !== body.confirmPassword) {
        console.log(
          `Your password's is not match`,
          body.password,
          body.confirmPassword
        );
      } else {
        signUPModel.findOne(
          { emailAddress: userObj.emailAddress },
          (err, data) => {
            if (err) {
              throw err;
            } else {
              if (data) {
                res.send("This Email Address is Already Exist");
              } else {
                signUPModel.create(userObj, (err, data) => {
                    if (err) {
                      throw err;
                    } else {
                      console.log("create data=>>", data);
                      res.send("User SuccessFully SignUp...");
                        
                    }
                  });
              }
            }
          }
        );

      }
    }
  } catch (error) {
    console.log(`Get a error During a SignUp ${error}`);
  }
});



app.get("/api/v1/post" , (req,res)=>{
      // const body = req.body
      // console.log(body)
      try {

          postModel.find({} , (err,data)=>{
              if(err){
                throw err
              }else{
                res.send(data)
                console.log(data);
              }
          })

      } catch (error) {
        
      }
  // res.send("get")
})

app.post("/api/v1/post" , (req,res)=>{
        const body = req.body
        console.log(body)
        try {
            const userPost = {
              userId : body.userId,
              userName : body.userName,
              postCapture : body.postCapture,
              date : body.date,
            };

           postModel.create(userPost , (err, data)=>{
             if(err){
               throw err
             }else{
                res.send("SUCCESSFFULLY YOUR POST IS CREATE")
                console.log(data)
             }
           }) 


        } catch (error) {
            console.log(error);
        }
        
})

app.put("/api/v1/post" , (req,res)=>{
    const {postCap, uPostId} = req.body;
    // console.log(body);
    // console.log(req.params)
    console.log(postCap)
    console.log(uPostId)

    // const postObj = {
    //   postCapture : body.postCap,
    //   _id : body.uPostId
    // }
    try {
        postModel.findOneAndUpdate({_id : uPostId} , {postCapture : postCap} , (err,data)=>{
            if(err){
              throw err
            }else{
              res.send("update")
              console.log(data)
            }
        })
    } catch (error) {
      
    }
})

app.delete("/api/v1/post/:id" , (req,res)=>{
  // const  body  = req.body;
  // console.log(body.uPostId);
  // console.log(req.params) 
  const delObj = {
    _id : req.params.id
  } 
  console.log(delObj)
  try {
      postModel.deleteOne( delObj  , (err,data)=>{
          if(err){
            throw err
          }else{
            res.send("delete")
            console.log(data)
          }
      })
  } catch (error) {
    
  }
})



app.get("/**", (req, res) => {
  res.redirect("/");
});

mongoose.connection.on("connected", () => console.log("mongoose connected"));
mongoose.connection.on("error", (error) =>
  console.log("mongoose error", error)
);
app.listen(PORT, () => console.log(`Server is Running on localhost:${PORT} `));
    