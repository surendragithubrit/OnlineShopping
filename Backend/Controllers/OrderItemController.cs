using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NuGet.Protocol.Core.Types;
using OnlineShoppingAppAPI.Entities;
using OnlineShoppingAppAPI.Repositories;

namespace OnlineShoppingAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderItemController : ControllerBase
    {
       
        
            private readonly IOrderItemRepository _repository;
            private IConfiguration _configuration;

        public OrderItemController(IOrderItemRepository repository, IConfiguration configuration)
        {
            _repository = repository;
            _configuration = configuration;
        }

        [HttpGet("GetAllOrderItems")]
            public async Task<IActionResult> GetAll()
            {
                try
                {
                    var orderItems = await _repository.GetAllAsync();
                    return StatusCode(200, orderItems);
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }

        [HttpGet("GetById/{id}")]
        public async Task<IActionResult> Get([FromRoute] string id)
        {
            try
            {
                var orderItem = await _repository.GetByIdAsync(id);
                if (orderItem != null)
                {
                    return StatusCode(200, orderItem);
                }
                else
                {
                    return StatusCode(404, "Invalid Id");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpPost("AddOrderItem")]
        public async Task<IActionResult> Add([FromBody] OrderItem orderItem)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    orderItem.OrderItemId = "OI" + new Random().Next(1000, 9999);
                    await _repository.AddAsync(orderItem);
                    return StatusCode(200, orderItem);
                }
                else
                {
                    return BadRequest("Enter Valid Details!!");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
        [HttpPut("Edit")]
            public async Task<IActionResult> Edit([FromBody] OrderItem orderItem)
            {
                try
                {
                    await _repository.UpdateAsync(orderItem);
                    return StatusCode(200, orderItem);
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }

            [HttpDelete("DeleteOrderItem")]
            public async Task<IActionResult> Delete(string id)
            {
                try
                {
                    await _repository.DeleteByIdAsync(id);
                    return Ok();
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
        }
    }

