using OnlineShoppingAppAPI.Entities;

namespace OnlineShoppingAppAPI.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly OnlineShopContext _context;
        private ICategoryRepository _categoryRepository;

        public OrderRepository(OnlineShopContext context, ICategoryRepository categoryRepository)
        {
            _context = context;
            _categoryRepository = categoryRepository;
        }

        public void Add(Order order)
        {
            try
            {
                _context.Orders.Add(order);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        public void Delete(Guid orderid)
        {
            try
            {
                var order = _context.Orders.Find(orderid);
                _context.Orders.Remove(order);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        public List<Order> GetAllOrders()
        {
            return _context.Orders.ToList();
        }

        public Order GetOrder(Guid orderId)
        {
            var orders = _context.Orders.Find(orderId);
            return orders;
        }
    }
}
