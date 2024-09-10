import { useState } from "react";
import axios from "axios";
const UpdateWishList=()=>{
    const[fav,setFav]=useState({
        favoriteId:'',
        userId:'',
        productId:''

    })

    const [err, setError] = useState("");
    const save=(e)=>{
       e.preventDefault();
       axios
         .put("http://localhost:5290/api/WishList/EditWishList",fav)
         .then((res)=>{
            console.log(res);
         })
         .catch((err)=>console.log(err))

         
    }
    const search = (e) => {
        let favoriteId = fav.favoriteId;
        console.log(favoriteId);
        axios
          .get("http://localhost:5290/api/WishList/GetWishList/"+favoriteId)
          .then((res) => {
            console.log(res);
            if (res.statusText !== "No Content") setFav(res.data);
            else {
              setError("Invalid Id");
            }
          });
        e.preventDefault();
      };
      return(
        <div className="container">
            <form onSubmit={save}>
                <table className="table">
                    <tbody>
                    <tr>
                        <td>FavoriteId</td>
                        <td>
                            <input type="text" value={fav.favoriteId} onChange={(e)=>setFav((prevObj)=>({
                                ...prevObj,favoriteId:e.target.value,
                            }))}  readonly />
                        </td>
                    </tr>
                    <tr>
                        <td>UserId</td>
                        <td>
                            <input type="text" value={fav.userId} onChange={(e)=>setFav((prevObj)=>({
                                ...prevObj,userId:e.target.value,
                            }))} />
                        </td>
                    </tr>
                    <tr>
                        <td>ProductId</td>
                        <td>
                            <input type="text" value={fav.productId} onChange={(e)=>setFav((prevObj)=>({
                                ...prevObj,productId:e.target.value,
                            }))} />
                        </td>
                    </tr>
                    
                   
                    </tbody>
                </table>
                <button type="submit">Edit</button>
             
                <button onClick={search}>Search</button>

            </form>

        </div>
    )


}
export default UpdateWishList