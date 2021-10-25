import React, { useState } from "react";
import "./login.css";
import LoginPic from "../images/logIn.svg";
import { Form, Formik } from "formik";
import InputTextFeild from "../Components/InputField";
import FormButton from "../Components/Button";
import * as Yup from "yup";
import { Link , useHistory } from "react-router-dom";
import axios from "axios";
import {BASE_URI} from "../core"

const LogIn = () => {
  // const history = useHistory()
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null)
  const [errorBoxClass , setErrorBoxClass ] = useState("errorBOx")
  const history =  useHistory() 
  const validate = Yup.object({
    emailAddress: Yup.string()
      .required("Required")
      .email("Enter a valid Email"),
    password: Yup.string()
      .required("Required")
      .min(6, "Password should be of minimum 8 characters length"),
  });
  if(localStorage.getItem("data")){
    history.push("/dashboard")
  }

  const login = (values) => {
    // console.log(values);
    setLoading(true)
    axios
      .post(`${BASE_URI}/api/v1/signin`, {
        emailAddress: values.emailAddress,
        password: values.password,
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
        if(res.data.status == "login successfully"){
            localStorage.setItem("data",JSON.stringify(res.data.data))
          history.replace("/dashboard")
        }else{
            setErrorMsg(res.data)
            setErrorBoxClass("errorBOx show")
            setTimeout(()=>{
              setErrorBoxClass("errorBOx")
    
              } , 3000)
        }

      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="loginBox">
      <h3 className={errorBoxClass}>{errorMsg}</h3>
      <div className="LoginPic">
        <img src={LoginPic} width="100%" alt="" />
      </div>

      <div className="loginForm">
        <h2>Hello,</h2>
        <h2>Welcome Back</h2>

        <Formik
          initialValues={{
            emailAddress: "",
            password: "",
          }}
          onSubmit={(values) => login(values)}
          validationSchema={validate}
        >
          {(values) => (
            <Form>
              <InputTextFeild
                label="User Email Address"
                type="email"
                name="emailAddress"
              />
              <InputTextFeild
                label="Password"
                type="password"
                name="password"
              />
              <small className="forgetDiv">Forget Password?</small>
              <FormButton value={ loading ? true : "Login"} />
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
