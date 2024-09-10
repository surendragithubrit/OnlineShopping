using OnlineShoppingAppAPI.Entities;

namespace OnlineShoppingAppAPI.Repositories
{
    public interface IWishListRepository
    {
        void Add(Wishlist wishlist);
        Wishlist GetFavoriteById(string favoriteId);
        List<Wishlist> GetAllFavorites();
        void Delete(string id);
        void Update(Wishlist wishlist);
    }
}
