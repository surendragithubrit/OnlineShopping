using OnlineShoppingAppAPI.Entities;

namespace OnlineShoppingAppAPI.Repositories
{
    public class WishListRepository : IWishListRepository
    {
        private readonly OnlineShopContext _context;
        private IConfiguration _configuration;

        public WishListRepository(OnlineShopContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public void Add(Wishlist wishlist)
        {
            try
            {
                _context.Wishlists.Add(wishlist);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        public void Delete(string id)
        {
            try
            {
                var favorite = _context.Wishlists.Find(id);
                _context.Wishlists.Remove(favorite);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        public List<Wishlist> GetAllFavorites()
        {
            return _context.Wishlists.ToList();
        }

        public Wishlist GetFavoriteById(string favoriteId)
        {

            var favorite = _context.Wishlists.Find(favoriteId);
            return favorite;
        }

        public void Update(Wishlist wishlist)
        {
            try
            {
                _context.Wishlists.Update(wishlist);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}
