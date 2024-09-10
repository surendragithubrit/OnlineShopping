using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NuGet.Protocol.Core.Types;
using OnlineShoppingAPI.Repository;
using OnlineShoppingAppAPI.Entities;
using OnlineShoppingAppAPI.Models;
using OnlineShoppingAppAPI.Repositories;

namespace OnlineShoppingAPI.Controllers
{
    // The ProductController handles CRUD operations for products in the online shopping system.
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _productRepository;
        private IConfiguration _configuration;

        // Constructor for dependency injection of the Product repository
        public ProductController(IProductRepository productRepository)
        {
            _productRepository = productRepository; // Inject the product repository
        }


        [HttpGet, Route("GetAllProducts")]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var product = await _productRepository.GetAllProducts();
                return StatusCode(200, product);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet,Route("GetAllProductsDTO")]

        public async Task<ActionResult<IEnumerable<ProductDTO>>> GetProducts()
        {
            var products = await _productRepository.GetAllProductsAsync();
            return Ok(products);
        }

        // Endpoint to get all products, accessible by Admin and Customer roles
        // [Authorize(Roles = "Admin,user")]
        [HttpGet, Route("GetProductsByFilter")]
        public async Task<IActionResult> GetProductsByFilterAsync(
            [FromQuery] double? minPrice,
            [FromQuery] double? maxPrice,
            [FromQuery] string? categoryName,
            [FromQuery] string? name,

            [FromQuery] string? color,
         
            [FromQuery] string? brand,
            [FromQuery] string? size)
        {
            try
            {
                var products = await _productRepository.GetItemsByFilterAsync(
                    minPrice, maxPrice, categoryName,name, color, brand, size);
                return Ok(products);
            }
            catch (Exception ex)
            {
                // Log the exception if necessary
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred while retrieving the filtered products: {ex.Message}");
            }
        }
        [HttpGet, Route("GetProduct/{id}")]
       // [Authorize(Roles = "Admin,user")]
        public async Task<IActionResult> Get([FromRoute] string id)
        {
            try
            {
                // Retrieve the product by ID from the repository
                var product = await _productRepository.GetProductById(id);
                if (product != null)
                {
                    return StatusCode(200, product); // Return the product with status 200
                }
                else
                {
                    return StatusCode(404, "Invalid Id"); // Return 404 if the product is not found
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message); // Return bad request if an exception occurs
            }
        }

        // Endpoint to add a new product, accessible only by Admins
        [HttpPost, Route("AddProduct")]
       // [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Add([FromBody] Product product)
        {
            try
            {
                // Check if the incoming model is valid
                if (ModelState.IsValid)
                {
                   
                    // Add the product to the repository
                    await _productRepository.Add(product);
                    return StatusCode(200, product); // Return the added product with status 200
                  
                }
                else
                {
                    return BadRequest("Enter Valid Details!"); // Return bad request if the model is invalid
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message); // Return bad request if an exception occurs
            }
        }

        // Endpoint to edit an existing product, accessible only by Admins
        [HttpPut, Route("EditProduct")]
       // [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Edit([FromBody] Product product)
        {
            try
            {
                // Update the product in the repository
                await _productRepository.Update(product);
                return StatusCode(200, product); // Return the updated product with status 200
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message); // Return bad request if an exception occurs
            }
        }

        // Endpoint to delete a product, accessible only by Admins
        [HttpDelete, Route("DeleteProduct")]
       // [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Delete([FromQuery] string id)
        {
            try
            {
                // Delete the product from the repository using the provided ID
                await _productRepository.Delete(id);
                return Ok(); // Return status 200 OK after successful deletion
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message); 
            }
        }
    }
}