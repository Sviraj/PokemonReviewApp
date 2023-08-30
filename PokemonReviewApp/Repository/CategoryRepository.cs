using PokemonReviewApp.Data;
using PokemonReviewApp.Interfaces;
using PokemonReviewApp.Models;

namespace PokemonReviewApp.Repository
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly DataContext _context;
        public CategoryRepository(DataContext context) 
        { 
            _context = context;
        }

        public bool CategoryExists(int pokeId)
        {
            throw new NotImplementedException();
        }

        public bool CreateCategory(Category category)
        {
            _context.Add(category);
            return Save();  
        }
        public ICollection<Category> GetCategory()
        {
            return _context.Categories.OrderBy(c => c.Id).ToList();
        }

        public ICollection<Category> GetCategories()
        {
            return _context.Categories.OrderBy(c => c.Id).ToList();
        }

        public Category GetCategory(int id)
        {
            throw new NotImplementedException();
        }

        public Category GetCategoryName(string name)
        {
            throw new NotImplementedException();
        }

        public decimal GetCategoryRating(int pokeId)
        {
            throw new NotImplementedException();
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }

        public bool UpdateCategory(Category category)
        {
            _context.Update(category);
            return Save();
        }
    }
}
