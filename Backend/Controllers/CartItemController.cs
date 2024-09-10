using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineShoppingAppAPI.Entities;
using OnlineShoppingAppAPI.Repositories;
using System.Threading.Tasks;

namespace OnlineShoppingAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartItemController : ControllerBase
    {
        private readonly ICartItemRepository _cartItemRepository;
        private readonly IConfiguration _configuration;
        private readonly IProductRepository _productRepository;
        public CartItemController(ICartItemRepository cartItemRepository, IConfiguration configuration)
        {
            _cartItemRepository = cartItemRepository;
            _configuration = configuration;
           
        }

        [HttpGet, Route("GetCartItems")]
        public async Task<IActionResult> GetAllAsync()
        {
            try
            {
                var items = await _cartItemRepository.GetAllCartItemsAsync();
                return StatusCode(200, items);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        

        [HttpPost, Route("AddCartItem")]
        public async Task<IActionResult> AddAsync([FromBody] CartItem cartItem)
        {
            try
            {
                await _cartItemRepository.AddCartItemAsync(cartItem);
                return StatusCode(200, cartItem);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut, Route("EditCartItem")]
        public async Task<IActionResult> EditAsync([FromBody] CartItem cartItem)
        {
            try
            {
                await _cartItemRepository.UpdateCartItemAsync(cartItem);
                return StatusCode(200, cartItem);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.ToString());
            }
        }

        [HttpDelete, Route("DeleteCartItem")]
        public async Task<IActionResult> DeleteAsync([FromQuery] int id)
        {
            try
            {
                await _cartItemRepository.DeleteCartItemAsync(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet, Route("GetCartItemsByUserIdDTO/{userId}")]
        public async Task<IActionResult> GetCartItemsByUserIdDTO([FromRoute] string userId)
        {
            try
            {
                var cartItems = await _cartItemRepository.GetCartItemsByUserIdDTO(userId);
                return Ok(cartItems);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }


    }
}
