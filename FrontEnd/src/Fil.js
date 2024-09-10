// 
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from './images/online-shopping-apps.webp'

const ProductFilter = () => {
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    categoryName: '',
    name: '',
    color: '',
    brand: '',
    size: '',
  });

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:5290/api/Product/GetProductsByFilter', {
        params: filters,
      });
      setProducts(response.data);
      setError(null);
    } catch (err) {
      setError('Error fetching products. Please try again later.');
    }
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Filter Products</h2>
      <form onSubmit={handleFilterSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Min Price:</label>
          <input
            type="number"
            className="form-control"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Max Price:</label>
          <input
            type="number"
            className="form-control"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Category Name:</label>
          <input
            type="text"
            className="form-control"
            name="categoryName"
            value={filters.categoryName}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Product Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={filters.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Color:</label>
          <input
            type="text"
            className="form-control"
            name="color"
            value={filters.color}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Brand:</label>
          <input
            type="text"
            className="form-control"
            name="brand"
            value={filters.brand}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Size:</label>
          <input
            type="text"
            className="form-control"
            name="size"
            value={filters.size}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary w-100">Filter</button>
        </div>
      </form>

      {error && <p className="text-danger mt-3">{error}</p>}

      <h3 className="text-center my-4">Filtered Products</h3>
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-md-4" key={product.productId}>
              <div className="card mb-4">
                <div className="card-body">
                <img src={Image} alt="Image" width="250" height="250"/>
                  <h4 className="card-title">{product.name}</h4>
                  <p className="card-text">Category: {product.categoryName}</p>
                  <p className="card-text">Price: ₹{product.price}</p>
                  <p className="card-text">Brand: {product.brand}</p>
                  <p className="card-text">Color: {product.colour}</p>
                  <p className="card-text">Size: {product.size}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;
