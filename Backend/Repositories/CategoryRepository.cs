using Microsoft.EntityFrameworkCore;
using OnlineShoppingAppAPI.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineShoppingAppAPI.Repositories
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly OnlineShopContext _context;
        private IConfiguration _configuration;

       

        public CategoryRepository(OnlineShopContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public async Task<List<Category>> GetAllCategoriesAsync()
        
        {
            try
            {
                return await _context.Categories.ToListAsync();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<Category> GetCategoryByIdAsync(string id)
        {
            try
            {
                var category = await _context.Categories.FindAsync(id);
                return category;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }

        public async Task AddCategoryAsync(Category category)
        {
            try
            {
                await _context.Categories.AddAsync(category);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task UpdateCategoryAsync(Category category)
        {
            try
            {
                _context.Categories.Update(category);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task DeleteCategoryAsync(string id)
        {
            try
            {
                var category = await _context.Categories.FindAsync(id);
                _context.Categories.Remove(category);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
