using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace OnlineShoppingAppAPI.Entities
{
    public class Product
    {
        [Key] //set Id as a Primary Key
      
        public string ProductId { get; set; }
       
        public string Name { get; set; }
        public double Price { get; set; }
        
        [ForeignKey("Category")]
        public string CategoryId {  get; set; }
        [JsonIgnore]
        public Category? Category { get; set; }
        
        [Column(TypeName = "varchar")]
        [StringLength(20)]
        public string Colour {  get; set; } 
        public string Brand { get; set; }
        public string Size {  get; set; }   
         
        

                          
    }
}
