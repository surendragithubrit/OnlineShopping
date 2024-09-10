

// import React, { useState } from "react";
// import axios from "axios";
// import "./custom1.css"
// import { useNavigate } from "react-router-dom"; // Import useNavigate hook

// const Register = () => {
//   const [user, setUser] = useState({
//     userId: "",
//     name: "",
//     email: "",
//     password: "",
//     role: "",
//     address: "",
//     phoneNumber: "",
//   });

//   const navigate = useNavigate(); // Initialize navigate hook

//   const save = (e) => {
//     e.preventDefault(); // Prevent the default form submission

//     console.log(user);

//     axios
//       .post("http://localhost:5290/API/Auth/Register", user)
//       .then((res) => {
//         console.log(res.data);
//         // Navigate to the login page after successful registration
//         navigate("/");
//       })
//       .catch((error) => console.log(error));
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-lg-6 col-md-8">
//           <div className="card p-4 shadow-sm">
//             <h2 className="text-center mb-4">Create Account</h2>
//             <form onSubmit={save}>
//               <div className="mb-3">
//                 <label className="form-label">User ID</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={user.userId}
//                   onChange={(e) =>
//                     setUser((prevObj) => ({
//                       ...prevObj,
//                       userId: e.target.value,
//                     }))
//                   }
//                 />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={user.name}
//                   onChange={(e) =>
//                     setUser((prevObj) => ({
//                       ...prevObj,
//                       name: e.target.value,
//                     }))
//                   }
//                 />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Email</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   value={user.email}
//                   onChange={(e) =>
//                     setUser((prevObj) => ({
//                       ...prevObj,
//                       email: e.target.value,
//                     }))
//                   }
//                 />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   value={user.password}
//                   onChange={(e) =>
//                     setUser((prevObj) => ({
//                       ...prevObj,
//                       password: e.target.value,
//                     }))
//                   }
//                 />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Address</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={user.address}
//                   onChange={(e) =>
//                     setUser((prevObj) => ({
//                       ...prevObj,
//                       address: e.target.value,
//                     }))
//                   }
//                 />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Phone Number</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={user.phoneNumber}
//                   onChange={(e) =>
//                     setUser((prevObj) => ({
//                       ...prevObj,
//                       phoneNumber: e.target.value,
//                     }))
//                   }
//                 />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Role</label>
//                 <div>
//                   <label className="form-check-label me-3">
//                     <input
//                       type="radio"
//                       name="role"
//                       value="Admin"
//                       checked={user.role === "Admin"}
//                       onChange={(e) =>
//                         setUser((prevObj) => ({
//                           ...prevObj,
//                           role: e.target.value,
//                         }))
//                       }
//                       className="form-check-input"
//                     />
//                     Admin
//                   </label>
//                   <label className="form-check-label">
//                     <input
//                       type="radio"
//                       name="role"
//                       value="user"
//                       checked={user.role === "user"}
//                       onChange={(e) =>
//                         setUser((prevObj) => ({
//                           ...prevObj,
//                           role: e.target.value,
//                         }))
//                       }
//                       className="form-check-input"
//                     />
//                     User
//                   </label>
//                 </div>
//               </div>
//               <button type="submit" className="btn btn-warning w-100 mt-3">
//                 Register
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React from "react";
import axios from "axios";
import "./custom1.css";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  userId: Yup.string().required("User ID is required"),
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().required("Password is required"),
  address: Yup.string().required("Address is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  role: Yup.string().required("Role is required")
});

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    axios
      .post("http://localhost:5290/API/Auth/Register", values)
      .then((res) => {
        console.log(res.data);
        navigate("/"); // Navigate to the login page after successful registration
      })
      .catch((error) => {
        console.error("Error during registration", error);
        // Handle registration error here
      });
  };

  return (
    <Formik
      initialValues={{
        userId: "",
        name: "",
        email: "",
        password: "",
        address: "",
        phoneNumber: "",
        role: ""
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="card p-4 shadow-sm">
                <h2 className="text-center mb-4">Create Account</h2>
                <Form>
                  <div className="mb-3">
                    <label className="form-label">User ID</label>
                    <Field type="text" name="userId" className="form-control" />
                    <ErrorMessage name="userId" component="div" className="text-danger" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <Field type="text" name="name" className="form-control" />
                    <ErrorMessage name="name" component="div" className="text-danger" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <Field type="email" name="email" className="form-control" />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <Field type="password" name="password" className="form-control" />
                    <ErrorMessage name="password" component="div" className="text-danger" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Address</label>
                    <Field type="text" name="address" className="form-control" />
                    <ErrorMessage name="address" component="div" className="text-danger" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <Field type="text" name="phoneNumber" className="form-control" />
                    <ErrorMessage name="phoneNumber" component="div" className="text-danger" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Role</label>
                    <div>
                      <label className="form-check-label me-3">
                        <Field type="radio" name="role" value="Admin" className="form-check-input" />
                        Admin
                      </label>
                      <label className="form-check-label">
                        <Field type="radio" name="role" value="user" className="form-check-input" />
                        User
                      </label>
                    </div>
                    <ErrorMessage name="role" component="div" className="text-danger" />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-warning w-100 mt-3"
                    disabled={isSubmitting}
                  >
                    Register
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Register;
