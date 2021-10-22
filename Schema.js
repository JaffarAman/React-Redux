const mongoose = require("mongoose")

const SignUpSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    emailAddress : String,
    password : String,
    confirmPassword : String,
    created_on : {
        type:Date,
        default : Date.now
    }
})

const postSchema = mongoose.Schema({
        userId : String,
        userName : String,
        postCapture : String,
        date : String,
        created_on: {
            type : Date,
            default : Date.now
        }
})

const signUPModel = mongoose.model("users" , SignUpSchema)
const postModel = mongoose.model("posts" , postSchema)

module.exports = {signUPModel, postModel };