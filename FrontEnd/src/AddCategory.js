import { useState } from "react"
import axios from "axios"
const AddCategory=()=>{
    const[category,setCategory]=useState({
        categoryId:'',
        categoryName:'',
        
    })
    const save=(e)=>{
        e.preventDefault();
        console.log(category);
        axios
        .post("http://localhost:5290/api/Category/AddCategory",category)
        .then((res)=>{
             console.log(res.data)
        })
        .catch((err)=>console.log(err));
       
    };

    const removeCategory = (categoryId) => {
        console.log(categoryId);
        axios
          .delete("http://localhost:5290/api/Category/Delete?id="+categoryId)
          .then((res) => {
            // Remove the deleted category from the state
            setCategory(category.filter(category => category.categoryId !== categoryId));
          })
          .catch((err) => console.log(err));
      };
    

      return (
        <div className="container mt-5">
          <form onSubmit={save}>
            <div className="card">
              <div className="card-header">
                <h4>Add Category</h4>
              </div>
              <div className="card-body">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>
                        <label htmlFor="categoryId">Category ID</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          id="categoryId"
                          value={category.categoryId}
                          onChange={(e) =>
                            setCategory((prevObj) => ({
                              ...prevObj,
                              categoryId: e.target.value,
                            }))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="categoryName">Name</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          id="categoryName"
                          value={category.categoryName}
                          onChange={(e) =>
                            setCategory((prevObj) => ({
                              ...prevObj,
                              categoryName: e.target.value,
                            }))
                          }
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="card-footer text-end">
                <button type="submit" className="btn btn-primary me-2">
                  Add Category
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removeCategory(category.categoryId)}
                >
                  Delete
                </button>
              </div>
            </div>
          </form>
        </div>
      );
    };
export default AddCategory;