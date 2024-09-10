using OnlineShoppingAppAPI.Entities;
using OnlineShoppingAppAPI.Models;

namespace OnlineShoppingAppAPI.Repositories
{
    public interface IProductRepository
    {
        Task Add(Product product);
        Task<Product> GetProductById(string productId);
        Task<List<Product>> GetAllProducts();
        Task<IEnumerable<ProductDTO>> GetAllProductsAsync();
       
        Task<IEnumerable<Product>> GetItemsByFilterAsync(
        double? minPrice,
        double? maxPrice,
        string categoryName,
        string name,
        string color,
        string brand,
        string size);
        Task Delete(string id);
        Task Update(Product product);


    }
}

