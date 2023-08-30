using PokemonReviewApp.Data;
using PokemonReviewApp.Interfaces;
using PokemonReviewApp.Models;

namespace PokemonReviewApp.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;
        public UserRepository(DataContext context)
        {
            _context = context;
        }

        public bool CreateUser(User user)
        {
            _context.Add(user);
            return Save();
        }

        public User GetUser(int id)
        {
            throw new NotImplementedException();
        }

        public User GetUserName(string name)
        {
            throw new NotImplementedException();
        }

        public ICollection<User> GetUsers()
        {
            return _context.User.OrderBy(p => p.Id).ToList();
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true: false;
        }

        public bool UserExists(int userId)
        {
            throw new NotImplementedException();
        }
    }
}
