using System.ComponentModel.DataAnnotations;

namespace OnlineShoppingAppAPI.Entities
{
    public class Category
    {
        [Key]
        public string CategoryId { get; set; }
        [Required] // Set Name as not null
        [StringLength(50)]
        public string CategoryName { get; set; }

    }
}
