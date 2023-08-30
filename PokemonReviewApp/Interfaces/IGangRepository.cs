using Microsoft.AspNetCore.Mvc;
using PokemonReviewApp.Models;

namespace PokemonReviewApp.Interfaces
{
    public interface IGangRepository
    {
        IActionResult getGangDetailsByGangID(int gangID);
    }
}
