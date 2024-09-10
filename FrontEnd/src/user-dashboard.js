

import React from "react";
import { Link, Outlet } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

const UserDashboard = () => {
  const userId=sessionStorage.getItem("userId")
  return (
    <div>
      <header>
        <h1>STYLEHUB</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="search">Products</Link>
          </li>

          {/* <li>
            <Link to="filter">ApplyFilter</Link>
          </li> */}

          <li>
            <Link to="filter">
              <i className="bi bi-funnel"></i> Apply Filter
            </Link>
          </li>
        
        
          

          {/* <li>
            <Link to="view-cart">ViewCart</Link>
          </li> */}

          <li>
            <Link to="view-cart">
              <i className="bi bi-cart"></i> MyCart
            </Link>
          </li>

          <li>
            <Link to="myorders">MyOrders</Link>
          </li>

          <li>
            <Link to="/login">LogOut</Link>
          </li>



          <li>
            <h4 style={{color:"white", textAlign: "right"}} >User: {userId}</h4>
          </li>

        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      {/* <footer>
        <h2>
          All Rights Reserver@<a href="#">AbcShool</a> 2024-25
        </h2>
      </footer> */}
      {/* Outlet is like a placeholder and all requested routes are render to Outlet element  */}
    </div>
  );
};
export default UserDashboard;
