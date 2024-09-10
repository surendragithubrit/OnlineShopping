// import React from "react";
// import { Link, Outlet } from "react-router-dom";
// import "./Layout.css"
// export default function Layout() {
//   return (
//     <div>
//       {/* <header>
//         <h1>E APP</h1>
//       </header> */}
//       <nav>
//         <ul>
//           <li>
//             <Link to="home">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/products">products</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//         </ul>
        
//       </nav>
//       <main>
//         <Outlet />
//         {/* Outlet is like a placeholder and all requested routes are render to Outlet element  */}
//       </main>
//       <footer>
//         <h2>
//           All Rights Reserver@<a href="#">STLYEHUB</a> 2024-25
//         </h2>
//       </footer>
//     </div>
//   );
// }

import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Layout.css";
import logo from './logo.png'; // Import the logo

export default function Layout() {
  return (
    <div>
      <nav>
        <div className="nav-container">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <p style={{color:"white"}}>STYLEHUB</p>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <h2>
          All Rights Reserved @<a href="#">STYLEHUB</a> 2024-25
        </h2>
      </footer>
    </div>
  );
}
