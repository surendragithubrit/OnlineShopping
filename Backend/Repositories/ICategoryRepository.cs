using OnlineShoppingAppAPI.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineShoppingAppAPI.Repositories
{
    public interface ICategoryRepository
    {
        Task<List<Category>> GetAllCategoriesAsync();
        Task<Category> GetCategoryByIdAsync(string categoryId);
        Task AddCategoryAsync(Category category);
        Task UpdateCategoryAsync(Category category);
        Task DeleteCategoryAsync(string categoryId);
    }
}
