using OnlineShoppingAppAPI.Entities;
using System.Linq.Expressions;

namespace OnlineShoppingAppAPI.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly OnlineShopContext _context;
        private IConfiguration _configuration;

        public UserRepository(OnlineShopContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public List<User> GetAllUsers()
        {
                return _context.Users.ToList(); 
        }

        public void Register(User user)
        {
            try
            {
                _context.Users.Add(user);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        public User ValidUser(string email, string password)
        {
            
            
                return _context.Users.SingleOrDefault(a => a.Email == email && a.Password == password);
            
           
        }
        public void Edit(User user)
        {
            try
            {
                _context.Users.Update(user);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

        }
        public void Delete(string UserId)
        {
            try
            {
                var user = _context.Users.Find(UserId);
                _context.Users.Remove(user);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}
