using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace OnlineShoppingAppAPI.Entities
{
    public class Wishlist
    {
        [Key]
        [Required(ErrorMessage = "FavoriteId is Required")]
        
        [Column(TypeName = "varchar")]
        [StringLength(10)]
       
        public string FavoriteId { get; set; }
        
        
       
      
        [ForeignKey("User")]
        public string UserId { get; set; }
        
        [ForeignKey("Product")]
        public string ProductId { get; set; }
       
        [JsonIgnore]
        public User? User { get; set; }
        [JsonIgnore]
        public Product? Product { get; set; }
    }
}
