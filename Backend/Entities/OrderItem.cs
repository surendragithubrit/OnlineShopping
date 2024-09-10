using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace OnlineShoppingAppAPI.Entities
{
    public class OrderItem
    {
        [Key]
        public string OrderItemId { get; set; }
        [ForeignKey("Order")]
        public Guid OrderId { get; set; }
       
        [ForeignKey("Product")]
        public string ProductId { get; set; }
        [Required(ErrorMessage = "Price is Required")]
        public double Price { get; set; }
        [Required(ErrorMessage = "Quantity is Required")]
        public int Quantity { get; set; }


        public double TotalPrice => Quantity * Price;

        [JsonIgnore]
        public Product? Product { get; set; }

       


    }
}
