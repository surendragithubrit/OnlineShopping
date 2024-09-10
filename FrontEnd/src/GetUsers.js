import React, { useEffect, useState } from "react";
import axios from "axios";

const GetUsers = () => {
    const [user, setUser] = useState([]);

useEffect(() => {
    axios
      .get("http://localhost:5290/API/Auth/GetUsers")
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const removeUsers = (userId) => {
    console.log(userId);
    axios
      .delete("http://localhost:5290/API/Auth/Delete?UserId="+userId)
      .then((res) => {
        // Remove the deleted category from the state
        setUser(user.filter(user => user.userId !== userId));
      })
      .catch((err) => console.log(err));
  };


  return (
    <div className="container">
      <table className="table table-bordered">
        <thead className="table table-dark">
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Password</td>
            <td>address</td>
            <td>PhoneNumber</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody>
          {user.map((i) => (
            <tr key={i.userId}>  {/* Ensure key is set here */}
              <td>{i.userId}</td>
              <td>{i.name}</td>
              <td>{i.email}</td>
              <td>{i.password}</td>
              <td>{i.address}</td>
              <td>{i.phoneNumber}</td>
              <td>
                <button onClick={() => removeUsers(i.userId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetUsers;
