import { useEffect, useState } from "react";
import axios from "axios";


const MyOrders = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios
          .get("http://localhost:5290/api/Order/GetOrders")
          .then((response) => {
            console.log(response.data);
            setItems(response.data);
            
          })
          .catch((error) => console.log(error));
      }, []);
         
    
    return (
        <div className="container">
          <table className="table table-bordered">
            <thead className="table table-dark">
              <tr>
                <td>Id</td>
                <td>UserId</td>
                <td>OrderDate</td>
                <td>DeliveryDate</td>
              </tr>
            </thead>
            <tbody>
              {items.map((i) => (
                <tr key={i.orderId}>  {/* Ensure key is set here */}
                  <td>{i.orderId}</td>
                  <td>{i.userId}</td>
                  <td>{i.orderDate}</td>
                  <td>{i.deliveryDate}</td>
            
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
      export default MyOrders