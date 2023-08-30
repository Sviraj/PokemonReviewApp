using PokemonReviewApp.Models;

namespace PokemonReviewApp.Interfaces
{
    public interface IAgriGenERPResponse
    {
        AgriGenERPResponse GenerateResponseMessage(string statusCode, string message, Dictionary<string, object> dataHoldDictionary);
        AgriGenERPResponse GenerateResponseMessage(string statusCode, string message, object data);
        AgriGenERPResponse GenerateResponseMessage1(string statusCode, string message);
        AgriGenERPResponse GenerateResponseMessage(object data);
    }
}
