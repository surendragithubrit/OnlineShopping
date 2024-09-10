import { useState } from "react"
import axios from "axios"
const AddWishList=()=>{
    const[fav,setFav]=useState({
        favoriteId:'',
        userId:'',
        productId:''
        
    });
    const save=(e)=>{
        e.preventDefault();
        console.log(fav);
        axios
        .post("http://localhost:5290/api/WishList/AddWishList",fav)
        .then((res)=>{
             console.log(res.data)
        })
        .catch((err)=>console.log(err));
       
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
                            }))} />
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
                <button type="submit">AddWishList</button>

            </form>

        </div>
    )


}
export default AddWishList