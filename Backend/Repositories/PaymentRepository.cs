using Microsoft.EntityFrameworkCore;
using OnlineShoppingAppAPI.Entities;

namespace OnlineShoppingAppAPI.Repositories
{
    public class PaymentRepository : IPaymentRepository
    {
        private readonly OnlineShopContext _context;
        private IConfiguration _configuration;

        public PaymentRepository(OnlineShopContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public async Task AddPaymentAsync(Payment payment)
        {
            try
            {
                _context.Payments.Add(payment);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        public async Task DeletePaymentAsync(Guid id)
        {
            try
            {
                var payments = await _context.Payments.FindAsync(id);
                _context.Payments.Remove(payments);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        public async Task<List<Payment>> GetAllPaymentsAsync()
        {

            return await _context.Payments.ToListAsync();
        }

        public async Task<Payment> GetPaymentByIdAsync(Guid id)
        {
            var payment= await _context.Payments.FindAsync(id);
            return payment;
        }

        public async Task UpdatePaymentAsync(Payment payment)
        {
            try
            {
                _context.Payments.Update(payment);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}
