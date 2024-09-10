import { useState } from "react";
import axios from "axios";
const UpdateCategory=()=>{
    const[category,setCategory]=useState({
        categoryId:'',
        name:''

    })
    const [err, setError] = useState("");
    const save=(e)=>{
       e.preventDefault();
       axios
         .put("http://localhost:5290/api/Category/Edit",category)
         .then((res)=>{
            console.log(res);
         })
         .catch((err)=>console.log(err))

         
    }

    const search = (e) => {
        let categoryId = category.categoryId;
        console.log(categoryId);
        axios
          .get("http://localhost:5290/api/Category/GetById/"+categoryId)
          .then((res) => {
            console.log(res);
            if (res.statusText !== "No Content") setCategory(res.data);
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
                            <input type="text" value={category.categoryId} onChange={(e)=>setCategory((prevObj)=>({
                                ...prevObj,categoryId:e.target.value,
                            }))}  readonly />
                        </td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input type="text" value={category.name} onChange={(e)=>setCategory((prevObj)=>({
                                ...prevObj,name:e.target.value,
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
export default UpdateCategory;

