using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace OnlineShoppingAppAPI.Entities
{
    public class Order
    {
        [Key]
       
        public Guid OrderId { get; set; }
       
        [ForeignKey("User")]
        public string UserId { get; set; } // Set as ForeignKey
        //[ForeignKey("Product")]
        //public string ProductId { get; set; }
        [Column(TypeName ="varchar")]
        [StringLength(100)]
        public string Address {  get; set; }
         
        [Column(TypeName = "varchar")]
        [StringLength(100)]
        public string OrderStatus {  get; set; }
        [Column(TypeName = "Date")]
        [Required(ErrorMessage="OrderDate is Required")]
        public DateTime OrderDate { get; set; }
        
       
        [Column(TypeName = "Date")]
        [Required(ErrorMessage = "DeliveryDatee is Required")]

        public DateTime DeliveryDate { get; set; }
        [JsonIgnore]
        public User? User { get; set; }
        //[JsonIgnore]
        //public Product? Product { get; set; }
       
        
        

        
    }
}
