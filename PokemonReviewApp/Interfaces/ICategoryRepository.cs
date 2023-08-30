using PokemonReviewApp.Models;

namespace PokemonReviewApp.Interfaces
{
    public interface ICategoryRepository
    {
        ICollection<Category> GetCategory();
        ICollection<Category> GetCategories();
        Category GetCategory(int id);
        Category GetCategoryName(string name);
        decimal GetCategoryRating(int pokeId);
        bool CategoryExists(int pokeId);
        bool CreateCategory(Category category);
        bool UpdateCategory(Category category);
        bool Save();
    }
}
