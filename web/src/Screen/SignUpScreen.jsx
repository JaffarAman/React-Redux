import React from "react";
import "./signup.css";
import SignUpImg from "../images/signUP.svg";
import InputTextFeild from "../Components/InputField";
import { Formik, Form } from "formik";
import FormButton from "../Components/Button";
import * as Yup from "yup";
import { Link } from "react-router-dom";
// import axios from "axios"

const SignUpScreen = () => {
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
    .min(6,"Password should be of minimum 8 characters length")
    .required("Required"),
    confirmPassword : Yup.string()
    .oneOf([Yup.ref("password"), null] , "Password Must be Match")
    .required("Required")
  });

  return (
    <div className="signUpBox">
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
          onSubmit={(values) => console.log( "Submit valuess" ,values)}
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
                <Link to="/" > 
                <small>Already have an Account? Sign In </small>
                </Link>

              <FormButton value="Sign Up" />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUpScreen;
