using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineShoppingAppAPI.Entities;
using OnlineShoppingAppAPI.Repositories;

namespace OnlineShoppingAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WishListController : ControllerBase
    {
        private readonly IWishListRepository _wishListRepository;
        private IConfiguration _configuration;

        public WishListController(IWishListRepository wishListRepository, IConfiguration configuration)
        {
            _wishListRepository = wishListRepository;
            _configuration = configuration;
        }

        [HttpGet, Route("GetWishList")]
        public IActionResult GetAll()
        {
            try
            {
                var favorites = _wishListRepository.GetAllFavorites();
                return StatusCode(200, favorites);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet, Route("GetWishList/{id}")]
        public IActionResult Get([FromRoute] string id)
        {
            try
            {
                var favorite = _wishListRepository.GetFavoriteById(id);
                if (favorite != null)
                {
                    return StatusCode(200, favorite);
                }
                else
                    return StatusCode(404, "Invalid Id");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost, Route("AddWishList")]
        public IActionResult Add([FromBody] Wishlist wishlist)
        {
            try
            {
                _wishListRepository.Add(wishlist);
                return StatusCode(200, wishlist);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut, Route("EditWishList")]
        public IActionResult Edit([FromBody] Wishlist wishlist)
        {
            try
            {
                _wishListRepository.Update(wishlist);
                return StatusCode(200, wishlist);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpDelete, Route("DeleteWishList")]
        public IActionResult Delete([FromQuery] string id)
        {
            try
            {
                _wishListRepository.Delete(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
