using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NuGet.Protocol.Core.Types;
using OnlineShoppingAppAPI.Entities;
using OnlineShoppingAppAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineShoppingAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly IPaymentRepository _paymentRepository;
        private readonly IConfiguration _configuration;

        public PaymentController(IPaymentRepository paymentRepository, IConfiguration configuration)
        {
            _paymentRepository = paymentRepository;
            _configuration = configuration;
        }

        [HttpGet, Route("GetAllTransactions")]
        public async Task<IActionResult> GetAllPayments()
        {
            try
            {
                var payments = await _paymentRepository.GetAllPaymentsAsync();
                return StatusCode(200, payments);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet, Route("GetById/{id}")]
        public async Task<IActionResult> GetPayments([FromRoute] Guid id)
        {
            try
            {
                var payment = await _paymentRepository.GetPaymentByIdAsync(id);
                if (payment != null)
                {
                    return StatusCode(200, payment);
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

        [HttpPost, Route("AddPayment")]
        public async Task<IActionResult> Add([FromBody] Payment payment)
        {
            try
            {
                await _paymentRepository.AddPaymentAsync(payment);
                return StatusCode(200, payment);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete, Route("DeletePayment")]
        public async Task<IActionResult> Delete([FromQuery] Guid id)
        {
            try
            {
                await _paymentRepository.DeletePaymentAsync(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
