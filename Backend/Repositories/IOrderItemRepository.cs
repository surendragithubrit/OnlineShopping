using OnlineShoppingAppAPI.Entities;

namespace OnlineShoppingAppAPI.Repositories
{
    public interface IOrderItemRepository
    {
        Task<List<OrderItem>> GetAllAsync();
        Task<OrderItem> GetByIdAsync(string orderItemId);
        Task UpdateAsync(OrderItem orderItem);
        Task DeleteByIdAsync(string orderItemId);
        Task AddAsync(OrderItem orderItem);
    }
}
