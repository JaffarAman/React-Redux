import React, { useState } from "react";
import "./signup.css";
import SignUpImg from "../images/signUP.svg";
import InputTextFeild from "../Components/InputField";
import { Formik, Form } from "formik";
import FormButton from "../Components/Button";
import * as Yup from "yup";
import { Link ,useHistory } from "react-router-dom";
import axios from "axios";
import {BASE_URI} from "../core"

const SignUpScreen = () => {
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorBoxClass , setErrorBoxClass ] = useState("errorBOx")
  const validate_Schema = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    emailAddress: Yup.string()
      .email("Enter a valid Email")
      .required("Required"),
    password: Yup.string()
      .min(6, "Password should be of minimum 8 characters length")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password Must be Match")
      .required("Required"),
  });

  
  const signUp = (values) => {
    setLoading(true);
    axios
      .post(`${BASE_URI}/api/v1/signup`, {
        firstName: values.firstName,
        lastName: values.lastName,
        emailAddress: values.emailAddress,
        password: values.password,
        confirmPassword: values.confirmPassword,
      })
      .then((res) => {
        console.log(res.data);
        setLoading(false)
        if(res.data === `This Email Address is Already Exist`){
          console.log(res.data)
          setErrorBoxClass("errorBOx show")
          setTimeout(()=>{
          setErrorBoxClass("errorBOx")

          } , 3000)
        }else{
          
          setIsSignUp(true)
        }

      })
      .catch((err) => {
        console.log(err)
         setLoading(false) });
    console.log(values.firstName);
  };
  const history  = useHistory()
  const loginPage = ()=>{
        history.replace('/')
  }
  return (
    <div className="signUpBox">
      <h3 className={errorBoxClass}>Email Address is Already Exist</h3>
      <div className="signUpImg">
        <img src={SignUpImg} width="100%" alt="" />
      </div>

      <div className="upFOrmBOx">
        <h2>
          <span> Sign Up </span> Form
        </h2>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            emailAddress: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => signUp(values)}
          validationSchema={validate_Schema}
        >
          {(values) => (
            <Form>
              <InputTextFeild label="First Name" type="text" name="firstName" />
              <InputTextFeild label="Last Name" type="text" name="lastName" />
              <InputTextFeild
                label="Email Address"
                type="text"
                name="emailAddress"
              />
              <InputTextFeild
                label="Password"
                type="password"
                name="password"
              />
              <InputTextFeild
                label="Confirm Password"
                type="password"
                name="confirmPassword"
              />
              <Link to="/">
                <small>Already have an Account? Sign In </small>
              </Link>

              {!isSignUp ?
              <FormButton value={loading ? true : "Sign Up"} /> :
              <FormButton  addFun={loginPage} value={"User Succesfully Signup"} />
              }
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUpScreen;
