import { useEffect, useState } from "react";
import axios from "axios";

const GetCartItems = () => {
    const [items, setItems] = useState([]);

    
  useEffect(() => {
    
    axios
      .get("http://localhost:5290/api/CartItem/GetCartItems")
      .then((response) => {
        console.log(response.data);
        console.log('items', items)
        setItems(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <table className="table table-bordered">
        <thead className="table table-dark">
          <tr>
            
            <td>ProductId</td>
            <td>Price</td>
          
            <td>Quantity</td>
            <td>TotalPrice</td>

          
          </tr>
        </thead>
        <tbody>
          {items.map((i) => (
            <tr key={i.cartItemId}>  {/* Ensure key is set here */}
             
              <td>{i.productId}</td>
              <td>{i.price}</td>
          
              <td>{i.quantity}</td>
              <td>{i.totalPrice}</td>
              
   
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetCartItems;




