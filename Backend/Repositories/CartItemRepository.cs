using Microsoft.EntityFrameworkCore;
using OnlineShoppingAppAPI.Entities;
using OnlineShoppingAppAPI.Models;

namespace OnlineShoppingAppAPI.Repositories
{
    public class CartItemRepository : ICartItemRepository
    {
        private readonly OnlineShopContext _context;
        private readonly IConfiguration _configuration;

        public CartItemRepository(OnlineShopContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public async Task AddCartItemAsync(CartItem cartitem)
        {
            try
            {
                await _context.CartItems.AddAsync(cartitem);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

        }

        public async Task DeleteCartItemAsync(int id)
        {
            try
            {
                var item = await _context.CartItems.FindAsync(id);
                if (item != null)
                {
                    _context.CartItems.Remove(item);
                    await _context.SaveChangesAsync();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        public async Task<List<CartItem>> GetAllCartItemsAsync()
        {
            try
            {
                return await _context.CartItems.ToListAsync();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        //public async Task<CartDTO> GetCartItemByIdAsync(string uid)
        //{
        //    var cartItem = await (from p in _context.Products
        //                          join c in _context.CartItems
        //                          on p.ProductId equals c.ProductId
        //                          where c.ProductId == p.ProductId // filter by cart item ID
        //                          select new CartDTO()
        //                          {   
        //                              Name = p.Name,
        //                              Brand = p.Brand,
        //                              Price=c.Price,
        //                              Quantity=c.Quantity,
        //                              TotalPrice=c.TotalPrice,

        //                              // Add other properties if necessary
        //                          }).FirstOrDefaultAsync(); // Get the first matching item or null if none found

        //    return cartItem; // This will return null if no matching item is found
        //}
        public async Task<IEnumerable<CartDTO>> GetCartItemsByUserIdDTO(string userId)
        {
            var cartItems = await (from cart in _context.CartItems
                                   join product in _context.Products on cart.ProductId equals product.ProductId
                                   join category in _context.Categories on product.CategoryId equals category.CategoryId
                                   where cart.userId == userId
                                   select new CartDTO
                                   {
                                       CartItemId = cart.CartItemId,
                                       ProductId = product.ProductId,
                                       CategoryName = category.CategoryName,
                                       Name = product.Name,
                                       Brand = product.Brand,
                                       Price = product.Price,
                                       Quantity = cart.Quantity,
                                       TotalPrice = cart.Quantity * product.Price
                                   }).ToListAsync();

            return cartItems;
        }
        public async Task UpdateCartItemAsync(CartItem cartitem)
        {
            try
            {
                _context.CartItems.Update(cartitem);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }



    }
}