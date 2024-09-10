namespace OnlineShoppingAppAPI.Models
{
    public class CartDTO
    {
        public int CartItemId { get; set; }
        public string ProductId { get; set; }
        public string CategoryName { get; set; }
        public string Name { get; set; }
        public string Brand { get; set; }
        public double Price { get; set; }
        public int Quantity { get; set; }
        public double TotalPrice { get; set; }



    }
}
