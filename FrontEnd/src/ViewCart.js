
import axios from "axios";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
const ViewCart = () => {
  
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [err, setError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    
    axios
      .get(`http://localhost:5290/api/CartItem/GetCartItemsByUserIdDTO/${userId}`)
      .then((response) => {
        console.log("GetCartByID", response.data);
      
       

        setCartItems(response.data); // Set the cart items

        // Calculate total price
        let tot = response.data.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        setTotalPrice(tot);
      })
      .catch((error) => {
        console.log(error);
        setError("Failed to load cart items.");
      });
  }, []);

  const removeCartItem = (cartItemId) => {
    axios
      .delete(`http://localhost:5290/api/CartItem/DeleteCartItem?id=${cartItemId}`)
      .then((res) => {
        console.log(res.data);
        setCartItems(cartItems.filter((item) => item.cartItemId !== cartItemId));
        const updatedTotal = cartItems
          .filter((item) => item.cartItemId !== cartItemId)
          .reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalPrice(updatedTotal);
      })
      .catch((err) => console.log(err));
  };

  const makeOrder = () => {
    const order = {
      userId: sessionStorage.getItem("userId"),
      totalPrice: totalPrice,
    
      address: "Hyderabad",
      orderStatus: "pending",
      orderDate: new Date(),
      quantity:"1",
      deliveryDate: new Date(),

    };


    axios
      .post("http://localhost:5290/api/Order/AddOrder", order)
      .then((response) => {
        console.log(response);
        
        const orderId = response.data.orderId;
        localStorage.setItem("oid", orderId);
        for (let item of cartItems) {
          AddOrderItem(item, response.data.orderId); // Add each item as an order item
        }
      })
      .catch((error) => console.log(error));
      navigate('/user-dashboard/payment')
  };

  const AddOrderItem = (item, orderId) => {
    const orderItem = {
      orderItemId:"0",
      orderId: orderId,
      productId: item.productId,
      price: item.price,
      quantity: item.quantity,
      totalPrice: item.price * item.quantity,
    };
    console.log("oitem",orderItem)
    
    axios
      .post("http://localhost:5290/api/OrderItem/AddOrderItem",orderItem)
      .then((res) => {
   
        console.log("Order item added:", res.data);
      })
      .catch((error) => {
        console.log("Error adding order item:", error);
      });
  };


return (
  <div className="cart-container">
    {cartItems.length > 0 ? (
      <div className="card-container">
        {cartItems.map((cart) => (
          <div className="card" key={cart.cartItemId}>
            <div className="card-header">
              <h3>{cart.name}</h3>
            </div>
            <div className="card-body">
              
              <p><strong>Category:</strong> {cart.categoryName}</p>
              <p><strong>Brand:</strong> {cart.brand}</p>
              <p><strong>Price:</strong> {cart.price}</p>
              <p><strong>Quantity:</strong> {cart.quantity}</p>
              <p><strong>Total Price:</strong> {cart.price * cart.quantity}</p>
            </div>
            <div className="card-footer">
              <button onClick={() => removeCartItem(cart.cartItemId)} className="btn btn-danger">Remove</button>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p>No items in cart</p>
    )}
    <div className="total-price">
      <h3>Total Price: {totalPrice}</h3>
    </div>
    <button onClick={makeOrder} className="btn btn-success">Make Order</button>
    {err && <div className="error-message">{err}</div>}
  </div>
);
};



export default ViewCart;



