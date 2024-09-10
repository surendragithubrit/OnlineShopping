using Microsoft.EntityFrameworkCore;

namespace OnlineShoppingAppAPI.Entities
{
    public class OnlineShopContext:DbContext
    {
        private IConfiguration _configuration;

        public OnlineShopContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        //Entity Set
        public DbSet<User>Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }    
        public DbSet<Category> Categories { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<Wishlist> Wishlists { get; set; }
        public DbSet<CartItem> CartItems { get; set; } 
        public DbSet<OrderItem> OrderItems { get; set; }
       
       
        //Configure Connectionstring
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            optionsBuilder.UseSqlServer(_configuration.GetConnectionString("OSConnection"));
        }
    }
}
