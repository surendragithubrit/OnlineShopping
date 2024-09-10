// import { useState, useEffect } from "react";
// import axios from "axios";
// import GetCartItems from "./GetCart";
// const Search = () => {
//   const [items, GetItems] = useState([]);
//   useEffect(() => {
//     axios
//       .get("http://localhost:5290/api/Product/GetAllProducts", {
//         headers: {
//           Authorization: `Bearer ${sessionStorage.getItem("token")}`,
//         },
//       })
//       .then((response) => {
//         response.data.forEach(item => {
//           sessionStorage.setItem(`${item.cartItemId}_price`, item.price);
//         console.log("price",response.data.price)
//         console.log(response.data);
//         GetItems(response.data); //adding response data to items
//       })
//       .catch((error) => console.log(error));
//   }, []);})
//   const addToCart = (productId) => {
//     console.log(sessionStorage.getItem("userId"));
//     // e.preventDefault();
//     // calling the end point 
//     const getPriceFromSession = (cartItemId) => {
//       return sessionStorage.getItem(`${cartItemId}_price`);
//     };
//     const price = getPriceFromSession(productId);
//     let cart = {
//       cartItemId:0,
//       productId:productId,
//       userId: sessionStorage.getItem("userId"),
//       price:price,
//       quantity:1,
//       totalPrice:price*1,
//     };
//     console.log(productId);
//     axios
//       .post("http://localhost:5290/api/CartItem/AddCartItem",cart)
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => console.log(error));
//   };
//   return (
//     <div className="container">
//       <table className="table table-bordered table-hover">
//         <thead className="table-primary">
//           <tr>
//             <td>ProductId</td>
          
//             <td>Name</td>
//             <td>Brand</td>
//             <td>Price</td>
//             <td>Colour</td>
            
            

          
    
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((i) => (
//             <tr>
//               <td>{i.productId}</td>
              
//               <td>{i.name}</td>
//               <td>{i.brand}</td>

//               <td>{i.price}</td>
//               <td>{i.colour}</td>
//               <td>
//                 <button onClick={() => addToCart(i.productId)}>
//                   Add To Cart
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   ); }
// export default Search;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import GetCartItems from "./GetCart";

// const Search = () => {
//   const [items, GetItems] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5290/api/Product/GetAllProducts", {
//         headers: {
//           Authorization: `Bearer ${sessionStorage.getItem("token")}`,
//         },
//       })
//       .then((response) => {
//         response.data.forEach((item) => {
//           sessionStorage.setItem(`${item.productId}_price`, item.price); // Storing price using productId as key
//           console.log("price", item.price);
//         });
//         GetItems(response.data); // Adding response data to items
//       })
//       .catch((error) => console.log(error));
//   }, []); // Fixed useEffect closing

//   const addToCart = (productId) => {
//     console.log(sessionStorage.getItem("userId"));

//     const getPriceFromSession = (productId) => {
//       return sessionStorage.getItem(`${productId}_price`); // Use productId to retrieve price
//     };

//     const price = getPriceFromSession(productId);
//     let cart = {
//       cartItemId: 0,
//       productId: productId,
//       userId: sessionStorage.getItem("userId"),
//       price: price,
//       quantity: 1,
//       totalPrice: price * 1,
//     };

//     console.log(productId);

//     axios
//       .post("http://localhost:5290/api/CartItem/AddCartItem", cart)
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => console.log(error));
//   };

//   return (
//     <div className="container">
//       <table className="table table-bordered table-hover">
//         <thead className="table-primary">
//           <tr>
//             <td>ProductId</td>
//             <td>Name</td>
//             <td>Brand</td>
//             <td>Price</td>
//             <td>Colour</td>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((i) => (
//             <tr key={i.productId}>
//               <td>{i.productId}</td>
//               <td>{i.name}</td>
//               <td>{i.brand}</td>
//               <td>{i.price}</td>
//               <td>{i.colour}</td>
//               <td>
//                 <button onClick={() => addToCart(i.productId)}>
//                   Add To Cart
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Search;

import { useState, useEffect } from "react";
import axios from "axios";
import Image from './images/online-shopping-apps.webp'

const Search = () => {
  const [items, GetItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5290/api/Product/GetAllProducts", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        GetItems(response.data); // Adding response data to items
      })
      .catch((error) => console.log(error));
  }, []); // useEffect to fetch product data

  const addToCart = (productId, price) => {
    const userId = sessionStorage.getItem("userId");
    if (!userId) {
      console.log("User not logged in");
      return;
    }

    let cart = {
      cartItemId: 0, // Assuming cartItemId is autogenerated by the backend
      productId: productId,
      userId: userId,
      price: price,
      quantity: 1,
      totalPrice: price * 1,
    };

    axios
      .post("http://localhost:5290/api/CartItem/AddCartItem", cart, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log("Cart item added:", response.data);
      })
      .catch((error) => {
        console.log("Error adding cart item:", error);
      });
  };

  return (
    <div className="container">
    <div className="row">
      {items.map((item) => (
        <div className="col-md-4" key={item.productId}>
          <div className="card">
            <div className="card-body">
            <img src={Image} alt="Image" width="250" height="250"/>
              <h5 className="card-title"><strong>{item.name}</strong></h5>
              <h6 className="card-subtitle mb-2 text-muted">Brand:{item.brand}</h6>
              <p className="card-text">Price: {item.price}</p>
              <p className="card-text">Colour: {item.colour}</p>
              <button className="btn btn-primary" onClick={() => addToCart(item.productId, item.price)}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};
export default Search;
