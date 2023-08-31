using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using PokemonReviewApp.Data;
using PokemonReviewApp.Interfaces;
using PokemonReviewApp.Models;
using PokemonReviewApp.Dto;
using Microsoft.EntityFrameworkCore;
using System.Data;
using Microsoft.Data.SqlClient;

namespace PokemonReviewApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IUserRepository _userRepository;
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public UserController(IUserRepository userRepository, DataContext context, IMapper mapper)
        {
            _userRepository = userRepository;
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<User>))]
        public IActionResult GetUsers()
        {
            var users = _mapper.Map<List<UserDto>>(_userRepository.GetUsers());

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(users);
        }

        [HttpGet]
        [Route("Get_User")]
        public async Task<IActionResult> Get_Users()
        {
            var userList = await _context.User.FromSqlRaw("[Administration].[GetUser]").ToListAsync();
            return Ok(userList);
        }

        [HttpGet]
        [Route("GetUserById")]
        public async Task<IActionResult> GetById(int Id)
        {
            var Sqlstr = "EXEC [Administration].[GetUser] @Id=" + Id;
            var studentList = await _context.User.FromSqlRaw(Sqlstr).ToListAsync();
            return Ok(studentList);

        }

        //[HttpGet]
        //[Route("GetUserByUserName")]
        //public async Task<IActionResult> GetUserByUserName(string userName)
        //{
        //        var Sqlstr = "EXEC [Administration].[GetUserByName] @UserName=" + userName;
        //        var userList = await _context.User.FromSqlRaw(Sqlstr).ToListAsync();
        //        return Ok(userList);  
        //}

        [HttpGet]
        [Route("GetUserByUserName")]
        public async Task<IActionResult> GetUserByUserName(string userName)
        {
            var userList = await _context.User
                .FromSqlRaw("EXEC [Administration].[GetUserByName] @UserName", new SqlParameter("@UserName", userName))
                .ToListAsync();

            return Ok(userList);
        }


        [HttpPost]
        [Route("Mkakhaer")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateUserID([FromBody] UserDto userCreate)
        {
            if (userCreate == null)
                return BadRequest(ModelState);

            var userValidation = _userRepository.GetUsers()
                .Where(c => c.Name.Trim().ToUpper() == userCreate.Name.TrimEnd().ToUpper())
                .FirstOrDefault();
            var passwordValidation = _userRepository.GetUsers()
                .Where(c => c.Password == userCreate.Password)
                .FirstOrDefault();

            if (userValidation == null)
            {
                ModelState.AddModelError("", "User invalid or Not Registered");
                return StatusCode(422, ModelState);
            }
            else 
            {
                if (passwordValidation != null)
                {
                    return Ok("Successfully Login");
                }
                else 
                {
                    ModelState.AddModelError("", "Password incorrect");
                    return StatusCode(500, ModelState);
                }
                
            }  
        }


        [HttpPost]
        [Route("Login")]
        public IActionResult LoginUser([FromBody] UserDto _user)
        {
            try
            {
                if (_user == null)
                    return BadRequest("Invalid user data.");

                var result = _context.User
                    .Where(u => u.Name == _user.Name && u.Password == _user.Password)
                    .FirstOrDefault();

                if (result != null)
                {
                    // Successful login
                    return Ok("Login successful.");
                }
                else
                {
                    // Invalid credentials
                    return Unauthorized("Invalid username or password.");
                }
            }
            catch (Exception ex)
            {
                // Log the exception and provide a generic error message
               // _logger.LogError(ex, "An error occurred during login.");
                return StatusCode(500, "An error occurred during login.");
            }
        }


        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateUser([FromBody] UserDto userCreate)
        {
            if(userCreate == null)
                return BadRequest(ModelState);

            var user = _userRepository.GetUsers()
                .Where(c => c.Name.Trim().ToUpper() == userCreate.Name.TrimEnd().ToUpper())
                .FirstOrDefault();

            if (user != null)
            {
                ModelState.AddModelError("", "User Already Exists");
                return StatusCode(422, ModelState);
            }

            var userMap = _mapper.Map<User>(userCreate);

            if (!_userRepository.CreateUser(userMap))
            {
                ModelState.AddModelError("", "Samething went wrong while saving");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully Created");
        }
    }
}
