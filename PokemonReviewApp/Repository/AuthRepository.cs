using PokemonReviewApp.Models;
using PokemonReviewApp.Interfaces;


namespace PokemonReviewApp.Repository
{
    public class AuthRepository : IAuthRepository
    {
        public Task<bool> Login(LoginRequestModel loginRequestModel)
        {
            throw new NotImplementedException();
        }
    }
}
