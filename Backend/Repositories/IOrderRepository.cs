using OnlineShoppingAppAPI.Entities;

namespace OnlineShoppingAppAPI.Repositories
{
    public interface IOrderRepository
    {
        void Add(Order order);
        Order GetOrder(Guid orderId);
        List<Order> GetAllOrders();
        void Delete (Guid id);  

    }
}
