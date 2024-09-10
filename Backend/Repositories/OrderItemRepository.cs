using Microsoft.EntityFrameworkCore;
using OnlineShoppingAppAPI.Entities;

namespace OnlineShoppingAppAPI.Repositories
{
    public class OrderItemRepository:IOrderItemRepository
    {
        private readonly OnlineShopContext _context;
       // private readonly IOrderItemRepository _orderItemRepository;

        public OrderItemRepository(OnlineShopContext context)
        {
            _context = context;
            
        }

        public async Task AddAsync(OrderItem orderItem)
        {
            try
            {
                _context.OrderItems.AddAsync(orderItem);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        public async Task DeleteByIdAsync(string id)
        {
            try
            {
                var orderItem = await _context.OrderItems.FindAsync(id);
                _context.OrderItems.Remove(orderItem);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        public async Task UpdateAsync(OrderItem orderItem)
        {
            try
            {
                _context.OrderItems.Update(orderItem);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        public async Task<List<OrderItem>> GetAllAsync()
        {

            return await _context.OrderItems.ToListAsync();
        }

        public async Task<OrderItem> GetByIdAsync(string id)
        {
            var OrderItems=await _context.OrderItems.FindAsync(id);
            return OrderItems;
        }
    }
}
    

