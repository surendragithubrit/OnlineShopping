using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OnlineShoppingAppAPI.Entities
{
    public class User
    {
        [Key]
        public string  UserId { get; set; }

        [Required(ErrorMessage = "Name is required")]
        [MaxLength(25, ErrorMessage = "Name can't exceed 25 characters")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Email is required")]
        [MaxLength(40, ErrorMessage = "Email can't exceed 40 characters")]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [MinLength(6, ErrorMessage = "Password must be at least 6 characters long")]
        public string Password { get; set; }

        [MaxLength(15, ErrorMessage = "Role can't exceed 15 characters")]
        public string? Role { get; set; } = "User";

        [Required(ErrorMessage = "Address is required")]
        [MaxLength(200, ErrorMessage = "Address can't exceed 200 characters")]
        public string Address { get; set; }

        [Required(ErrorMessage = "Phone number is required")]
        [MaxLength(10, ErrorMessage = "Phone number can't exceed 10 characters")]
        [Phone(ErrorMessage = "Invalid Phone Number")]
        public string PhoneNumber { get; set; }
    }
}
