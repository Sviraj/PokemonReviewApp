using PokemonReviewApp.Models;

namespace PokemonReviewApp.Interfaces
{
    public interface IAuthRepository
    {
        Task<bool> Login(LoginRequestModel loginRequestModel);
    }
}
