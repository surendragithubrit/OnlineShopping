// /*import { useState, useEffect } from "react";
// import axios from "axios";
// import { useCart } from "./CartContext"; // Import CartContext

// const AddOrder = () => {
//   const { cartItems } = useCart(); // Access cartItems from CartContext

//   // State to hold order details for each cart item
//   const [orderDetails, setOrderDetails] = useState([]);
  
//   // State to hold the default address
//   const [defaultAddress, setDefaultAddress] = useState("");

//   // State to track whether to use the default address
//   const [useDefaultAddress, setUseDefaultAddress] = useState(false);

//   useEffect(() => {
//     if (cartItems && cartItems.length > 0) {
//       // Initialize order details based on cart items
//       setOrderDetails(
//         cartItems.map((item) => ({
//           productId: item.productId,
//           userId: "your-logged-in-user-id", // Replace with actual userId
//           address: "",
//           orderStatus: "Pending", // Default status
//           orderDate: new Date().toISOString().slice(0, 10), // Default to today's date
//           quantity: item.quantity,
//           deliveryDate: "",
//         }))
//       );
//     }
//   }, [cartItems]);

//   const handleOrderChange = (index, field, value) => {
//     const newOrderDetails = [...orderDetails];
//     newOrderDetails[index][field] = value;
//     setOrderDetails(newOrderDetails);
//   };

//   const handleAddressChange = (index, value) => {
//     handleOrderChange(index, "address", value);

//     // If using default address, update the default address as well
//     if (useDefaultAddress) {
//       setDefaultAddress(value);
//     }
//   };

//   const handleSaveOrder = (index, e) => {
//     e.preventDefault();
//     const order = orderDetails[index];
//     console.log(order);
//     axios
//       .post("http://localhost:5290/api/Order/AddOrder", order)
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((err) => console.log(err));
//   };

//   if (cartItems.length === 0) {
//     return <div>Your cart is empty.</div>;
//   }

//   return (
//     <div className="container">
//       <h2>Your Cart Items</h2>
//       <div className="mb-4">
//         <h4>Default Address</h4>
//         <input
//           type="text"
//           value={defaultAddress}
//           onChange={(e) => setDefaultAddress(e.target.value)}
//           placeholder="Set your default address here"
//         />
//         <label className="ms-2">
//           <input
//             type="checkbox"
//             checked={useDefaultAddress}
//             onChange={(e) => setUseDefaultAddress(e.target.checked)}
//           />{" "}
//           Use this address for all orders
//         </label>
//       </div>
//       {cartItems.map((item, index) => (
//         <div key={item.productId} className="mb-4">
//           <h4>Product: {item.name}</h4>
//           <p>Quantity: {item.quantity}</p>
//           <p>Price: {item.price}</p>
//           <p>Total Price: {item.price * item.quantity}</p>

//           <form onSubmit={(e) => handleSaveOrder(index, e)}>
//             <table className="table">
//               <tbody>
//                 <tr>
//                   <td>Address</td>
//                   <td>
//                     <input
//                       type="text"
//                       value={useDefaultAddress ? defaultAddress : orderDetails[index]?.address || ""}
//                       onChange={(e) => handleAddressChange(index, e.target.value)}
//                       placeholder="Enter delivery address"
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Order Status</td>
//                   <td>
//                     <input
//                       type="text"
//                       value={orderDetails[index]?.orderStatus || ""}
//                       onChange={(e) => handleOrderChange(index, "orderStatus", e.target.value)}
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Order Date</td>
//                   <td>
//                     <input
//                       type="date"
//                       value={orderDetails[index]?.orderDate || ""}
//                       onChange={(e) => handleOrderChange(index, "orderDate", e.target.value)}
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Delivery Date</td>
//                   <td>
//                     <input
//                       type="date"
//                       value={orderDetails[index]?.deliveryDate || ""}
//                       onChange={(e) => handleOrderChange(index, "deliveryDate", e.target.value)}
//                     />
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <button type="submit">Add Order for {item.name}</button>
//           </form>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AddOrder;
// */



// // import { useState, useEffect } from "react";
// // import axios from "axios";
// // import { useCart } from "./CartContext"; // Import CartContext

// // const AddOrder = () => {
// //   const { cartItems } = useCart(); // Access cartItems from CartContext

// //   // State to hold order details for each cart item
// //   const [orderDetails, setOrderDetails] = useState([]);

// //   // State to hold the default address
// //   const [defaultAddress, setDefaultAddress] = useState("");

// //   // State to track whether to use the default address
// //   const [useDefaultAddress, setUseDefaultAddress] = useState(false);

// //   useEffect(() => {
// //     if (cartItems && cartItems.length > 0) {
// //       // Initialize order details based on cart items
// //       setOrderDetails(
// //         cartItems.map((item) => ({
// //           productId: item.productId,
// //           userId: "your-logged-in-user-id", // Replace with actual userId
// //           address: "",
// //           orderStatus: "Pending", // Default status
// //           orderDate: new Date().toISOString().slice(0, 10), // Default to today's date
// //           quantity: item.quantity,
// //           deliveryDate: calculateDeliveryDate(new Date()), // Calculate delivery date 2 days after order date
// //         }))
// //       );
// //     }
// //   }, [cartItems]);

// //   const calculateDeliveryDate = (orderDate) => {
// //     const deliveryDate = new Date(orderDate);
// //     deliveryDate.setDate(deliveryDate.getDate() + 2); // Set delivery date to 2 days after order date
// //     return deliveryDate.toISOString().slice(0, 10); // Format as YYYY-MM-DD
// //   };

// //   const handleOrderChange = (index, field, value) => {
// //     const newOrderDetails = [...orderDetails];
// //     newOrderDetails[index][field] = value;
// //     setOrderDetails(newOrderDetails);
// //   };

// //   const handleAddressChange = (index, value) => {
// //     handleOrderChange(index, "address", value);

// //     // If using default address, update the default address as well
// //     if (useDefaultAddress) {
// //       setDefaultAddress(value);
// //     }
// //   };

// //   const handleSaveOrder = (index, e) => {
    
// //     e.preventDefault();
// //     const order = orderDetails[index];
// //     const userId = sessionStorage.getItem('userId')
// //     console.log(order);
// //     axios
// //       .post("http://localhost:5290/api/Order/AddOrder", order)
// //       .then((res) => {
// //         console.log(res.data);
// //       })
// //       .catch((err) => console.log(err));
// //   };

// //   if (cartItems.length === 0) {
// //     return <div>Your cart is empty.</div>;
// //   }

// //   return (
// //     <div className="container">
// //       <h2>Your Cart Items</h2>
// //       <div className="mb-4">
// //         <h4>Default Address</h4>
// //         <input
// //           type="text"
// //           value={defaultAddress}
// //           onChange={(e) => setDefaultAddress(e.target.value)}
// //           placeholder="Set your default address here"
// //         />
// //         <label className="ms-2">
// //           <input
// //             type="checkbox"
// //             checked={useDefaultAddress}
// //             onChange={(e) => setUseDefaultAddress(e.target.checked)}
// //           />{" "}
// //           Use this address for all orders
// //         </label>
// //       </div>
// //       {cartItems.map((item, index) => (
// //         <div key={item.productId} className="mb-4">
// //           <h4>Product: {item.name}</h4>
// //           <p>Quantity: {item.quantity}</p>
// //           <p>Price: {item.price}</p>
// //           <p>Total Price: {item.price * item.quantity}</p>

// //           <form onSubmit={(e) => handleSaveOrder(index, e)}>
// //             <table className="table">
// //               <tbody>
// //                 <tr>
// //                   <td>Address</td>
// //                   <td>
// //                     <input
// //                       type="text"
// //                       value={useDefaultAddress ? defaultAddress : orderDetails[index]?.address || ""}
// //                       onChange={(e) => handleAddressChange(index, e.target.value)}
// //                       placeholder="Enter delivery address"
// //                     />
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>Order Status</td>
// //                   <td>
// //                     <input
// //                       type="text"
// //                       value={orderDetails[index]?.orderStatus || "Pending"}
// //                       readOnly // Make this field unchangeable
// //                     />
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>Order Date</td>
// //                   <td>
// //                     <input
// //                       type="date"
// //                       value={orderDetails[index]?.orderDate || ""}
// //                       readOnly // Make this field unchangeable
// //                     />
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>Delivery Date</td>
// //                   <td>
// //                     <input
// //                       type="date"
// //                       value={orderDetails[index]?.deliveryDate || ""}
// //                       readOnly // Make this field unchangeable
// //                     />
// //                   </td>
// //                 </tr>
// //               </tbody>
// //             </table>
// //             <button type="submit">Add Order for {item.name}</button>
// //           </form>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default AddOrder;



// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useCart } from "./CartContext"; // Import CartContext

// const AddOrder = () => {
//   const { cartItems } = useCart(); // Access cartItems from CartContext

//   // State to hold order details for each cart item
//   const [orderDetails, setOrderDetails] = useState([]);

//   // State to hold the default address
//   const [defaultAddress, setDefaultAddress] = useState("");

//   // State to track whether to use the default address
//   const [useDefaultAddress, setUseDefaultAddress] = useState(false);

//   // Get userId from sessionStorage
//   const userId = sessionStorage.getItem('user');

//   useEffect(() => {
//     if (cartItems && cartItems.length > 0) {
//       // Initialize order details based on cart items
//       setOrderDetails(
//         cartItems.map((item) => ({
//           productId: item.productId,
//           userId: userId, // Use the fetched userId dynamically
//           address: "",
//           orderStatus: "Pending", // Default status
//           orderDate: new Date().toISOString().slice(0, 10), // Default to today's date
//           quantity: item.quantity,
//           deliveryDate: calculateDeliveryDate(new Date()), // Calculate delivery date 2 days after order date
//         }))
//       );
//     }
//   }, [cartItems, userId]);

//   const calculateDeliveryDate = (orderDate) => {
//     const deliveryDate = new Date(orderDate);
//     deliveryDate.setDate(deliveryDate.getDate() + 2); // Set delivery date to 2 days after order date
//     return deliveryDate.toISOString().slice(0, 10); // Format as YYYY-MM-DD
//   };

//   const handleOrderChange = (index, field, value) => {
//     const newOrderDetails = [...orderDetails];
//     newOrderDetails[index][field] = value;
//     setOrderDetails(newOrderDetails);
//   };

//   const handleAddressChange = (index, value) => {
//     handleOrderChange(index, "address", value);

//     // If using default address, update the default address as well
//     if (useDefaultAddress) {
//       setDefaultAddress(value);
//     }
//   };

//   const handleSaveOrder = (index, e) => {
//     e.preventDefault();
//     const order = orderDetails[index];
//     console.log("this is order details",order);
//     axios
//       .post("http://localhost:5290/api/Order/AddOrder", order)
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((err) => console.log(err));
//   };

//   if (cartItems.length === 0) {
//     return <div>Your cart is empty.</div>;
//   }

//   return (
//     <div className="container">
//       <h2>Your Cart Items</h2>
//       <div className="mb-4">
//         <h4>Default Address</h4>
//         <input
//           type="text"
//           value={defaultAddress}
//           onChange={(e) => setDefaultAddress(e.target.value)}
//           placeholder="Set your default address here"
//         />
//         <label className="ms-2">
//           <input
//             type="checkbox"
//             checked={useDefaultAddress}
//             onChange={(e) => setUseDefaultAddress(e.target.checked)}
//           />{" "}
//           Use this address for all orders
//         </label>
//       </div>
//       {cartItems.map((item, index) => (
//         <div key={item.productId} className="mb-4">
//           <h4>Product: {item.name}</h4>
//           <p>Quantity: {item.quantity}</p>
//           <p>Price: {item.price}</p>
//           <p>Total Price: {item.price * item.quantity}</p>

//           <form onSubmit={(e) => handleSaveOrder(index, e)}>
//             <table className="table">
//               <tbody>
//                 <tr>
//                   <td>Address</td>
//                   <td>
//                     <input
//                       type="text"
//                       value={useDefaultAddress ? defaultAddress : orderDetails[index]?.address || ""}
//                       onChange={(e) => handleAddressChange(index, e.target.value)}
//                       placeholder="Enter delivery address"
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Order Status</td>
//                   <td>
//                     <input
//                       type="text"
//                       value={orderDetails[index]?.orderStatus || "Pending"}
//                       readOnly // Make this field unchangeable
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Order Date</td>
//                   <td>
//                     <input
//                       type="date"
//                       value={orderDetails[index]?.orderDate || ""}
//                       readOnly // Make this field unchangeable
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Delivery Date</td>
//                   <td>
//                     <input
//                       type="date"
//                       value={orderDetails[index]?.deliveryDate || ""}
//                       readOnly // Make this field unchangeable
//                     />
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <button type="submit">Add Order for {item.name}</button>
//           </form>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AddOrder;
