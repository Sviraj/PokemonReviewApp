using PokemonReviewApp.Data;
using PokemonReviewApp.Interfaces;
using PokemonReviewApp.Models;

namespace PokemonReviewApp.Repository
{
    public class VehicleRepository : IVehicleRepository
    {
        private readonly DataContext _context;

        public VehicleRepository(DataContext context)
        {
            _context = context;
        }

        public ICollection<Vehicle> GetVehicles()
        {
            return _context.Vehicles.OrderBy(x => x.Id).ToList();
        }
    }
}
