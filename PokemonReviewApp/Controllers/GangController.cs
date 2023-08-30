using Microsoft.AspNetCore.Mvc;
using PokemonReviewApp.Interfaces;
using PokemonReviewApp.Models;

namespace PokemonReviewApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GangController : Controller
    {
        private readonly IGangRepository _gangRepository;
        public GangController(IGangRepository gangRepository)
        {
            _gangRepository = gangRepository;
        }

        [HttpGet]
        [Route("getGangDetailsByGangID")]
        public IActionResult getGangDetailsByGangID(int gangID)
        {
            return _gangRepository.getGangDetailsByGangID(gangID);
        }
    }
}
