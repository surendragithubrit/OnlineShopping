using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using OnlineShoppingAppAPI.Entities;
using OnlineShoppingAppAPI.Models;
using OnlineShoppingAppAPI.Repositories;
using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace OnlineShoppingAppAPI.Controllers
{
    [Route("API/[controller]")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly IUserRepository _userRepository;
        private IConfiguration _configuration;

        public AuthController(IUserRepository userRepository, IConfiguration configuration)
        {
            _userRepository = userRepository;
            _configuration = configuration;
        }

        [HttpGet, Route("GetUsers")]
       // [Authorize(Roles = "Admin")]
        public IActionResult GetAllUsers()
        {//Get All Users details
            try
            {
                var users = _userRepository.GetAllUsers();
                return StatusCode(200, users);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost, Route("Register")]
       // [AllowAnonymous]
        public IActionResult Register([FromBody] User user)
        {
            try
            {
                _userRepository.Register(user);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
        [HttpPut, Route("Edit")]
        //[AllowAnonymous]
        public IActionResult Edit([FromBody] User user)
        {
            try
            {
                {
                    _userRepository.Edit(user);
                    return StatusCode(200, user);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
    [HttpDelete, Route("Delete")]
       // [AllowAnonymous]
        public IActionResult Delete([FromQuery]string UserId) {
            try
            {
                _userRepository.Delete(UserId);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost, Route("Validate")]
       // [AllowAnonymous]
        public IActionResult ValidUser(Login login)
        {
            try
            {
                AuthResponse authResponse = new AuthResponse();
                var user = _userRepository.ValidUser(login.Email, login.Password);
                if (user != null)
                {
                    authResponse = new AuthResponse()
                    {
                        UserId = user.UserId,
                        Role = user.Role,
                        Token = GetToken(user),


                    };
                }
                return Ok(authResponse);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        private string GetToken(User user)
        {
            var issuer = _configuration["Jwt:Issuer"];
            var audience = _configuration["Jwt:Audience"];
            var key = Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]);
            //Header section
            var signingCredentials = new SigningCredentials(
                new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha512Signature
            );
            //Payload section
            var subject = new ClaimsIdentity(new[]
            {
                        new Claim(ClaimTypes.Name,user.Name),
                        new Claim(ClaimTypes.Role, user.Role),
                    });

            var expires = DateTime.UtcNow.AddMinutes(10);//token will expire after 10min

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = subject,
                Expires = expires,
                Issuer = issuer,
                Audience = audience,
                SigningCredentials = signingCredentials
            };



            //generate token using tokenDescription
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var jwtToken = tokenHandler.WriteToken(token);
            return jwtToken;
        }
    }
}
