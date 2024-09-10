
import React, { useState } from "react";
import axios from "axios";
import "./custom.css";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  // Formik's onSubmit handler
  const handleSubmit = (values) => {
    let user = { email: values.email, password: values.password };
    axios
      .post("http://localhost:5290/API/Auth/Validate", user)
      .then((response) => {
        if (response.data.token == null) {
          setErr("Invalid User Credentials"); 
        } else {
          let user = response.data;
          sessionStorage.setItem("token", user.token);
          sessionStorage.setItem("userId",user.userId);
          
          if (user.role === "Admin") {
            navigate("/admin-dashboard");
          } else if (user.role === "user") {
            navigate("/user-dashboard");
          }
        }
      })
      .catch((error) => {
        console.error("Error during login", error);
        setErr("An error occurred during login. Please try again.");
      });
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <div className="login-background d-flex justify-content-center align-items-center vh-100">
          <div className="card shadow-lg" style={{ width: "22rem", borderRadius: "1rem" }}>
            <div className="card-header bg-dark text-white text-center" style={{ borderRadius: "1rem 1rem 0 0" }}>
              <h4 className="m-0">Login</h4>
            </div>
            <div className="card-body">
              <Form>
                <div className="form-group mb-3">
                  <label className="form-label">Email</label>
                  <Field type="text" name="email" className="form-control" />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label">Password</label>
                  <Field type="password" name="password" className="form-control" />
                  <ErrorMessage name="password" component="div" className="text-danger" />
                </div>
                <div className="form-group mb-3">
                  <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting} style={{ backgroundColor: "#ff3f6c", borderColor: "#ff3f6c" }}>
                    Login
                  </button>
                </div>
                {err && (
                  <div className="form-group mb-3">
                    <span className="text-danger">{err}</span>
                  </div>
                )}
                <div className="form-group">
                <p style={{ fontSize: '12px', color: 'red' }}>Do you have an account?</p> 
                  <button type="button" className="btn btn-outline-secondary w-100" onClick={goToRegister}>
                    Register
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;
