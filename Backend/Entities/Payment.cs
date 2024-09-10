using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace OnlineShoppingAppAPI.Entities
{
    public class Payment
    {
        [Key]
        public Guid PaymentId { get; set; }

        [ForeignKey("Order")]
        [Required(ErrorMessage = "OrderId is required")]
        public Guid OrderId { get; set; }
        //[ForeignKey("Product")]
        //public string ProductId {  get; set; }
       

       
        [StringLength(50, ErrorMessage = "Payment method can't exceed 50 characters")]
        public string PaymentMethod { get; set; }

        
        [StringLength(50, ErrorMessage = "Payment status can't exceed 50 characters")]
        public string PaymentStatus { get; set; }

        [Required]
        public DateTime PaymentDate { get; set; } = DateTime.Now;
        [JsonIgnore]

        public Order? Order { get; set; }
        //[JsonIgnore]
        //public Product? Product { get; set; }
    }
}
