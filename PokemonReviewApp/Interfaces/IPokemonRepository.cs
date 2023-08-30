using PokemonReviewApp.Models;

namespace PokemonReviewApp.Interfaces
{
    public interface IPokemonRepository
    {
        ICollection<Pokemon> GetPokemons();
        //ICollection<PokemonDto> GetPokemonsDto();
        Pokemon GetPokemon(int id);
        Pokemon GetPokemonName(string name);
        decimal GetPokemonRating(int pokeId);
        bool PokemonExists(int pokeId);
        bool CreatePokemon(Pokemon pokemon);
        bool Save();
    }
}
