import { useState,useEffect } from "react"
import axios from "axios"
const UpdateProduct=()=>{
    const[product,setProduct]=useState({
        productId:'',
        name:'',
        price:0,
        categoryId:'',
        rating:0,
        colour:'',
        brand:'',
        size:''
    })
    // useEffect(() => {
    //     axios.get("http://localhost:5287/API/controller/GetProduct/5").then((res) => {
    //       console.log(res);
    //       setProduct(res.data);
    //     });
    //   }, []);

      const [err, setError] = useState("");
    const save=(e)=>{
        e.preventDefault();
        console.log(product);
        axios
        .put("http://localhost:5290/api/Product/EditProduct",product)
        .then((res)=>{
             console.log(res.data)
        })
        .catch((err)=>console.log(err));
       
    };

   

      const search = (e) => {
        let productId = product.productId;
        console.log(productId);
        axios
          .get("http://localhost:5290/api/Product/GetProduct/" + productId)
          .then((res) => {
            console.log(res);
            if (res.statusText !== "No Content") setProduct(res.data);
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
                        <td>Id</td>
                        <td>
                            <input type="text" value={product.productId} onChange={(e)=>setProduct((prevObj)=>({
                                ...prevObj,productId:e.target.value,
                            }))}  readonly />
                        </td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input type="text" value={product.name} onChange={(e)=>setProduct((prevObj)=>({
                                ...prevObj,name:e.target.value,
                            }))} />
                        </td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>
                            <input type="number" value={product.price} onChange={(e)=>setProduct((prevObj)=>({
                                ...prevObj,price:e.target.value
                            }))} />
                        </td>
                    </tr>
                    <tr>
                        <td>CategoryId</td>
                        <td>
                            <input type="text" value={product.categoryId} onChange={(e)=>setProduct((prevObj)=>({
                                ...prevObj,categoryId:e.target.value,
                            }))} />
                        </td>
                    </tr>
                    <tr>
                        <td>Rating</td>
                        <td>
                            <input type="number" value={product.rating} onChange={(e)=>setProduct((prevObj)=>({
                                ...prevObj,rating:e.target.value,
                            }))} />
                        </td>
                    </tr>
                    <tr>
                        <td>Colour</td>
                        <td>
                            <input type="text" value={product.colour} onChange={(e)=>setProduct((prevObj)=>({
                                ...prevObj,colour:e.target.value,
                            }))} />
                        </td>
                    </tr>
                    <tr>
                        <td>Brand</td>
                        <td>
                            <input type="text" value={product.brand} onChange={(e)=>setProduct((prevObj)=>({
                                ...prevObj,brand:e.target.value,
                            }))} />
                        </td>
                    </tr>
                    <tr>
                        <td>Size</td>
                        <td>
                            <input type="text" value={product.size} onChange={(e)=>setProduct((prevObj)=>({
                                ...prevObj,size:e.target.value,
                            }))} />
                        </td>
                    </tr>
                   
                    </tbody>
                </table>
                <button type="submit" className="btn btn-primary me-2" >Edit</button>
             
                <button onClick={search} className="btn btn-primary me-2">Search</button>

            </form>

        </div>
    )


}
export default UpdateProduct;