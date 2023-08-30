using PokemonReviewApp.Models;

namespace PokemonReviewApp.Interfaces
{
    public interface IVehicleRepository
    {
        ICollection<Vehicle> GetVehicles();
    }
}
