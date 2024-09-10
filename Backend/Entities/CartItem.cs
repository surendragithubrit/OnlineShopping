using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace OnlineShoppingAppAPI.Entities
{
    public class CartItem
    {
        [Key]
        [Required(ErrorMessage = "cartitemId is required")]
        public int CartItemId { get; set; }
        
        

        [ForeignKey("Product")]
        public string ProductId { get; set; }
        [Required(ErrorMessage = "Price is Required")]
        [ForeignKey("User")]
        public string userId { get; set; }

        

        public double Price { get; set; }

        [Required(ErrorMessage = "Quantity is Required")]
        public int Quantity { get; set; }

        [Required(ErrorMessage="Price is Required")]
        public double TotalPrice {  get; set; }


        [JsonIgnore]
        public Product? Product { get; set; }
        [JsonIgnore]
       
        public User? User { get; set; }
        
        
    }
}
