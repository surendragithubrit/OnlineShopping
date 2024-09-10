using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OnlineShoppingAppAPI.Entities;
using OnlineShoppingAppAPI.Repositories;
using System.Threading.Tasks;

namespace OnlineShoppingAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _repository;
        private IConfiguration _configuration;

        

        public CategoryController(ICategoryRepository repository, IConfiguration configuration)
        {
            _repository = repository;
            _configuration = configuration;
        }

        // GET: api/Category/GetAll
        [HttpGet, Route("GetAllCategories")]
        [AllowAnonymous]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var category = await _repository.GetAllCategoriesAsync();
                return StatusCode(200, category);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET: api/Category/GetById/{id}
        [HttpGet, Route("GetById/{id}")]
        public async Task<IActionResult> Get([FromRoute] string id)
        {
            try
            {
                var category = await _repository.GetCategoryByIdAsync(id);
                if (category != null)
                {
                    return StatusCode(200, category);
                }
                else
                    return StatusCode(404, "Invalid Id");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST: api/Category/AddCategory
        [HttpPost, Route("AddCategory")]

        public async Task<IActionResult> Add([FromBody] Category category)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    await _repository.AddCategoryAsync(category);
                    return StatusCode(200, category);
                }
                else
                {
                    return BadRequest("Enter Valid Details");
                }
            }
            catch (Exception ex)

            {
                return BadRequest(ex.Message);
            }


        }     

        // PUT: api/Category/Edit
        [HttpPut, Route("Edit")]
        
        public async Task<IActionResult> Edit([FromBody] Category category)
        {
            try
            {
                await _repository.UpdateCategoryAsync(category);
                return StatusCode(200, category);
            }
            catch (Exception ex)
            { return BadRequest(ex.ToString()); }

        }

        // DELETE: api/Category/Delete/{id}
        [HttpDelete, Route("Delete")]
       
        public async Task<IActionResult> Delete([FromQuery] string id)
        {
            try
            {
                await _repository.DeleteCategoryAsync(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
;
        }
    }
}
