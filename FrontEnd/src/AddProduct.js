import { useState } from "react"
import axios from "axios"

const AddProduct=()=>{
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
    const save=(e)=>{
        e.preventDefault();
        console.log(product);
        axios
        .post("http://localhost:5290/api/Product/AddProduct",product)
        .then((res)=>{
             console.log(res.data)
        })
        .catch((err)=>console.log(err));
       
    };

    const removeProduct = (productId) => {
        console.log(productId);
        axios
          .delete("http://localhost:5290/api/Product/DeleteProduct?id="+productId)
          .then((res) => {
            // Remove the deleted category from the state
            setProduct(product.filter(product => product.productId !== productId));
          })
          .catch((err) => console.log(err));
      };

    return(
        
            <div className="container my-4">
              <form onSubmit={save}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="productId" className="form-label">ProductId</label>
                      <input
                        type="text"
                        id="productId"
                        className="form-control"
                        value={product.productId}
                        onChange={(e) => setProduct(prevObj => ({
                          ...prevObj,
                          productId: e.target.value,
                        }))}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        value={product.name}
                        onChange={(e) => setProduct(prevObj => ({
                          ...prevObj,
                          name: e.target.value,
                        }))}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="price" className="form-label">Price</label>
                      <input
                        type="number"
                        id="price"
                        className="form-control"
                        value={product.price}
                        onChange={(e) => setProduct(prevObj => ({
                          ...prevObj,
                          price: e.target.value,
                        }))}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="categoryId" className="form-label">CategoryId</label>
                      <input
                        type="text"
                        id="categoryId"
                        className="form-control"
                        value={product.categoryId}
                        onChange={(e) => setProduct(prevObj => ({
                          ...prevObj,
                          categoryId: e.target.value,
                        }))}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="colour" className="form-label">Colour</label>
                      <input
                        type="text"
                        id="colour"
                        className="form-control"
                        value={product.colour}
                        onChange={(e) => setProduct(prevObj => ({
                          ...prevObj,
                          colour: e.target.value,
                        }))}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="brand" className="form-label">Brand</label>
                      <input
                        type="text"
                        id="brand"
                        className="form-control"
                        value={product.brand}
                        onChange={(e) => setProduct(prevObj => ({
                          ...prevObj,
                          brand: e.target.value,
                        }))}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="size" className="form-label">Size</label>
                      <input
                        type="text"
                        id="size"
                        className="form-control"
                        value={product.size}
                        onChange={(e) => setProduct(prevObj => ({
                          ...prevObj,
                          size: e.target.value,
                        }))}
                      />
                    </div>
                    <div className="d-flex justify-content-between">
                      <button type="submit" className="btn btn-primary">Add Product</button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => removeProduct(product.productId)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
    )


}
export default AddProduct;


