using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineShoppingAppAPI.Entities;
using OnlineShoppingAppAPI.Repositories;
using System.Diagnostics.Contracts;

namespace OnlineShoppingAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IConfiguration _configuration;

        public OrderController(IOrderRepository orderRepository, IConfiguration configuration)
        {
            _orderRepository = orderRepository;
            _configuration = configuration;
        }
        [HttpGet, Route("GetOrders")]
        public IActionResult GetAlOrdersl()
        {
            try
            {
                var orders = _orderRepository.GetAllOrders();
                return StatusCode(200, orders);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet, Route("GetById/{id}")]
        public IActionResult GetOrders([FromRoute] Guid id)
        {
            try
            {
                var order = _orderRepository.GetOrder(id);
                if (order != null)
                {
                    return StatusCode(200, order);
                }
                else
                {
                    return StatusCode(404, "Invalid Code");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost, Route("AddOrder")]
        public IActionResult Add([FromBody] Order order)
        {
            try
            {
                order.OrderId = Guid.NewGuid();
                order.DeliveryDate = order.OrderDate.AddDays(2);
                _orderRepository.Add(order);

                return StatusCode(200, order);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
        [HttpDelete, Route("DeleteOrder")]
        public IActionResult Delete([FromQuery] Guid id)
        {
            try
            {
                _orderRepository.Delete(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



    }
}