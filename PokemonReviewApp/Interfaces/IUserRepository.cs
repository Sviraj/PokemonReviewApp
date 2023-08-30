using PokemonReviewApp.Models;

namespace PokemonReviewApp.Interfaces
{
    public interface IUserRepository
    {
        ICollection<User> GetUsers();
        User GetUser(int id);
        User GetUserName(string name);
        bool UserExists(int userId);
        bool CreateUser(User user);
        bool Save();
    }
}
