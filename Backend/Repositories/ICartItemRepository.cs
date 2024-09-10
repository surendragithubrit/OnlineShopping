
using OnlineShoppingAppAPI.Entities;
using OnlineShoppingAppAPI.Models;

namespace OnlineShoppingAppAPI.Repositories
{
    public interface ICartItemRepository
    {
       
        Task<List<CartItem>> GetAllCartItemsAsync();
        //  Task<CartDTO> GetCartItemByIdAsync(string uid);
        Task<IEnumerable<CartDTO>> GetCartItemsByUserIdDTO(string userId);
        Task AddCartItemAsync(CartItem cartitem);
        Task UpdateCartItemAsync(CartItem cartitem);
        Task DeleteCartItemAsync(int id);
    }
}
