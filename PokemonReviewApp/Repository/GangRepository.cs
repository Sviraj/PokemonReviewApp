using Microsoft.AspNetCore.Mvc;
using PokemonReviewApp.Data;
using PokemonReviewApp.Interfaces;
using PokemonReviewApp.Models;
using System.Data;

namespace PokemonReviewApp.Repository
{
    public class GangRepository : IGangRepository
    {
        private readonly DataContext _context;
        private readonly AgriGenERPResponse _agriGenERPResponse;
        public GangRepository(DataContext context, AgriGenERPResponse agriGenERPResponse)
        {
            _context = context;
            _agriGenERPResponse = agriGenERPResponse;
        }
        public IActionResult getGangDetailsByGangID(int gangID)
        {
            throw new NotImplementedException();
        }

             //Dictionary<string, Tuple<string, DbType, ParameterDirection>> parameters = new Dictionary<string, Tuple<string, DbType, ParameterDirection>>
             //{
             //     { "DivisionID", Tuple.Create(gangID.ToString(), DbType.Int32, ParameterDirection.Input) },
             //};

             //var result = _context.Pokemon.OrderBy(p => p.Id).ToList();

             //return _context.Pokemon.Where(p => p.Id == gangID).FirstOrDefault(); 

             //= await Repository<GangModel>().GetEntitiesBySPAsync("[]");

        //return _agriGenERPResponse.GenerateResponseMessage1(statusCode, message);

        //throw new NotImplementedException();
    }
}
