using Microsoft.EntityFrameworkCore;
using OnlineShoppingAppAPI.Entities;
using OnlineShoppingAppAPI.Models;
using OnlineShoppingAppAPI.Repositories;
using System.Linq;

namespace OnlineShoppingAPI.Repository
{
    // The ProductRepository class provides methods to interact with Product entities in the database.
    public class ProductRepository : IProductRepository
    {
        private readonly OnlineShopContext _context;

        // Constructor to initialize the context through dependency injection.
        public ProductRepository(OnlineShopContext context)
        {
            _context = context;
        }


        public async Task<List<Product>> GetAllProducts()

        {
            
            
                return await _context.Products.ToListAsync();
            
            }

        // Method to add a new Product to the database.
        public async Task Add(Product product)
        {
            try
            {
                // Add the Product entity to the context and save changes to the database.
                await _context.Products.AddAsync(product);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                // Log the exception to the console.
                Console.WriteLine(ex.Message);
            }
        }

        // Method to delete an existing Product by its ID.
        public async Task Delete(string productid)
        {
            try
            {
                // Find the Product entity by its ID.
                var product = await _context.Products.FindAsync(productid);
                if (product != null)
                {
                    // Remove the Product entity and save changes to the database.
                    _context.Products.Remove(product);
                    await _context.SaveChangesAsync();
                }
                else
                {
                    // Log a message if the Product is not found.
                    Console.WriteLine("Product not found.");
                }
            }
            catch (Exception ex)
            {
                // Log the exception to the console.
                Console.WriteLine(ex.Message);
            }
        }


        public async Task<IEnumerable<Product>> GetItemsByFilterAsync(
      double? minPrice,
      double? maxPrice,
      string? categoryName,
      string? name ,
      string? color,
      string? brand,
      string? size)
        {
            var query = _context.Products
                                .Where(i =>
                                    (!minPrice.HasValue || i.Price >= minPrice.Value) &&
                                    (!maxPrice.HasValue || i.Price <= maxPrice.Value) &&
                                    (string.IsNullOrEmpty(categoryName) || i.Category.CategoryName.ToLower() == categoryName.ToLower()) &&
                                     (string.IsNullOrEmpty(name) || i.Name.ToLower() == name.ToLower()) &&
                                    (string.IsNullOrEmpty(color) || i.Colour.ToLower() == color.ToLower()) &&
                                    (string.IsNullOrEmpty(brand) || i.Brand.ToLower() == brand.ToLower()) &&
                                    (string.IsNullOrEmpty(size) || i.Size.ToLower() == size.ToLower()))
                                .Include(i => i.Category); // Include Category only after filtering


            return await query.ToListAsync();
        }

        // Method to retrieve a specific Product by its ID.
        public async Task<Product> GetProductById(string productId)
        {
            try
            {
                // Find and return the Product entity by its ID.
                var product = await _context.Products.FindAsync(productId);
                return product;
            }
            catch (Exception ex)
            {
                // Throw an exception if something goes wrong.
                throw new Exception(ex.Message);
            }
        }

        // Method to update an existing Product in the database.
        public async Task Update(Product product)
        {
            try
            {
                // Update the Product entity and save changes to the database.
                _context.Products.Update(product);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                // Log the exception to the console.
                Console.WriteLine(ex.Message);
            }
        }
        public async Task<IEnumerable<ProductDTO>> GetAllProductsAsync()
        {
            return await _context.Products
                .Include(p => p.Category)
                .Join(_context.CartItems,
                      product => product.ProductId,
                      cartItem => cartItem.ProductId,
                      (product, cartItem) => new { product, cartItem })
                .Select(pc => new ProductDTO
                {
                    ProductId = pc.product.ProductId,
                    CategoryName = pc.product.Category.CategoryName,
                    Name = pc.product.Name,
                    Brand = pc.product.Brand,
                    Price = pc.product.Price,
                    Quantity = pc.cartItem.Quantity,
                    TotalPrice = pc.cartItem.Quantity * pc.product.Price
                }).ToListAsync();
        }

    }
}