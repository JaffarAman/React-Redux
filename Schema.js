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

const SignUPModel = mongoose.model("users" , SignUpSchema)

module.exports = SignUPModel;