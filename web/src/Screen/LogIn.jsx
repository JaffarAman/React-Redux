import React from "react";
import "./login.css";
import LoginPic from "../images/logIn.svg";
import { Form, Formik } from "formik";
import InputTextFeild from "../Components/InputField";
import FormButton from "../Components/Button";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const LogIn = () => {
  const validate = Yup.object({
    userEmail: Yup.string().required("Required").email("Enter a valid Email"),
    password: Yup.string()
      .required("Required")
      .min(6, "Password should be of minimum 8 characters length"),
  });

  return (
    <div className="loginBox">
      <div className="LoginPic">
        <img src={LoginPic} width="100%" alt="" />
      </div>

      <div className="loginForm">
        <h2>Hello,</h2>
        <h2>Welcome Back</h2>

        <Formik
          initialValues={{
            userEmail: "",
            password: "",
          }}
          onSubmit={(values) => console.log("login values", values)}
          validationSchema={validate}
        >
          {(values) => (
            <Form>
              <InputTextFeild
                label="User Email Address"
                type="email"
                name="userEmail"
              />
              <InputTextFeild
                label="Password"
                type="password"
                name="password"
              />
              <small className="forgetDiv">Forget Password?</small>
              <FormButton value="Login" />
            </Form>
          )}
        </Formik>
            <Link to="signup">
        <small className="notAcc">Don't have An Account? Click Here</small>
            </Link>
      </div>
    </div>
  );
};

export default LogIn;
