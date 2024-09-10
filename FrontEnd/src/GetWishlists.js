import { useEffect, useState } from "react";
import axios from "axios";

const GetWishLists = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
          .get("http://localhost:5290/api/WishList/GetWishList")
          .then((response) => {
            console.log(response.data);
            setItems(response.data);
          })
          .catch((error) => console.log(error));
      }, []);
  const removeWishList = (favoriteId) => {
    console.log(favoriteId);
    axios
      .delete("http://localhost:5290/api/WishList/DeleteWishList?id=" + favoriteId)
      .then((res) => {
        // Remove the deleted category from the state
        setItems(items.filter(item => item.favoriteId !== favoriteId));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <table className="table table-bordered">
        <thead className="table table-dark">
          <tr>
            <td>FavoriteId</td>
            <td>UserId</td>
            <td>ProductId</td>
          </tr>
        </thead>
        <tbody>
          {items.map((i) => (
            <tr key={i.favoriteId}>  {/* Ensure key is set here */}
              <td>{i.userId}</td>
              <td>{i.productId}</td>
              <td>
                <button onClick={() => removeWishList(i.favoriteId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default GetWishLists