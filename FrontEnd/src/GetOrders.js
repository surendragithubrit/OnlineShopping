import { useEffect, useState } from "react";
import axios from "axios";


const GetOrders = () => {
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
         

      const removeOrder = (orderId) => {
        console.log(orderId);
        axios
        .delete(`http://localhost:5290/api/Order/DeleteOrder?id=${encodeURIComponent(orderId)}`)

          .then((res) => {

            // Remove the deleted category from the state
            setItems(items.filter(item => item.orderId !== orderId));
          })
          .catch((err) => console.log(err));
      };

      return (
        <div className="container">
          <table className="table table-bordered">
            <thead className="table table-dark">
              <tr>
                <td>Id</td>
          
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {items.map((i) => (
                <tr key={i.orderId}>  {/* Ensure key is set here */}
                  <td>{i.orderId}</td>
            
                  <td>
                    <button onClick={() => removeOrder(i.orderId)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    
    
   
    

}
export default GetOrders