using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PokemonReviewApp.Data;
using PokemonReviewApp.Interfaces;
using PokemonReviewApp.Models;

namespace PokemonReviewApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleController : Controller
    {
        private readonly IVehicleRepository vehicleRepository;
        private readonly DataContext _context;

        public VehicleController(IVehicleRepository vehicleRepository,DataContext context)
        {
            this.vehicleRepository = vehicleRepository;
            _context = context;

        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Vehicle>))]
        public IActionResult GetVehicles()
        { 
            var vehicles = vehicleRepository.GetVehicles();

            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(vehicles);
        }

        [HttpGet]
        [Route("GetAllVehicles")]
        public IActionResult GetAllVehicles()
        {
            var vehicles = vehicleRepository.GetVehicles();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(vehicles);
        }

        [HttpGet]
        [Route("GetAllVehicleUsingSp")]
        public IActionResult GetVehiclesBySp()
        {
            var result = _context.Vehicles.FromSqlRaw("[Administration].[GetAllVehicles]");
            return Ok(result);
        }
    }
}
