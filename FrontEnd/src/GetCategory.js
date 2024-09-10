import { useEffect, useState } from "react";
import axios from "axios";

const GetCategories = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5290/api/Category/GetAllCategories")
      .then((response) => {
        console.log(response.data);
        setItems(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const removeCategory = (categoryId) => {
    console.log(categoryId);
    axios
      .delete("http://localhost:5290/api/CartItem/DeleteCartItem?id=" + categoryId)
      .then((res) => {
        // Remove the deleted category from the state
        setItems(items.filter(item => item.categoryId !== categoryId));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <table className="table table-bordered">
        <thead className="table table-dark">
          <tr>
          
            <td>Name</td>
          
          </tr>
        </thead>
        <tbody>
          {items.map((i) => (
            <tr key={i.categoryId}>  {/* Ensure key is set here */}
            
              <td>{i.categoryName}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetCategories;



