import { useEffect, useState } from "react";
import axios from "axios";
import './GetViewProducts.css';
import Image from './images/online-shopping-apps.webp';

const GetViewProducts = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5290/api/Product/GetAllProducts")
      .then((response) => {
        console.log(response.data);
        setItems(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

//   const removeViewProducts = (productId) => {
//     console.log(productId);
//     axios
//       .delete(`http://localhost:5290/api/Product/DeleteProduct?id=${productId}`)
//       .then((res) => {
//         // Remove the deleted product from the state
//         setItems(items.filter((item) => item.productId !== productId));
//       })
//       .catch((err) => console.log(err));
//   };
  return(
    <div className="container">
      <div className="card-container">
        {items.map((i) => (
          <div className="card" key={i.productId}>
            {/* <div className="card-header">
              <h3>{i.name}</h3>
              <span className="card-price">{i.price}</span>
            </div> */}
            <div className="card-body">
            <img src={Image} alt="Image" width="250" height="250"/>
              <p><strong> {i.name}</strong></p>
            
              <p>Colour: {i.colour}</p>
              <p>Brand: {i.brand}</p>
              <p>Size: {i.size}</p>
            </div>
            {/* <div className="card-footer">
              <button onClick={() => removeViewProducts(i.productId)} className="remove-button">
                Remove
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetViewProducts;