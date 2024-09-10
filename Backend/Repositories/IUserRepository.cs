using OnlineShoppingAppAPI.Entities;
namespace OnlineShoppingAppAPI.Repositories
{
    public interface IUserRepository
    {
        void Register(User user);
        User ValidUser(string email, string password);
        List<User> GetAllUsers();
        void Edit(User user);
        void Delete(String UserId);

    }
}   
