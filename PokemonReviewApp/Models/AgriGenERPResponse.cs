using PokemonReviewApp.Interfaces;

namespace PokemonReviewApp.Models
{
    public class AgriGenERPResponse : IAgriGenERPResponse
    {
        public string StatusCode { get; set; }
        public string Message { get; set; }
        public object Data { get; set; }

        //public AgriGenERPResponse GenerateResponseMessage(string statusCode, string message)
        //{
        //    this.StatusCode = statusCode;
        //    this.Message = message;
        //    //this.Data = dataHoldDictionary;

        //    return this;
        //}
        public AgriGenERPResponse GenerateResponseMessage(string statusCode, string message, Dictionary<string, object> dataHoldDictionary)
        {
            this.StatusCode = statusCode;
            this.Message = message;
            this.Data = dataHoldDictionary;

            return this;
        }

        public AgriGenERPResponse GenerateResponseMessage(string statusCode, string message, object data)
        {
            this.StatusCode = statusCode;
            this.Message = message;
            this.Data = data;
            return this;
        }

        public AgriGenERPResponse GenerateResponseMessage(object data)
        {
            this.Data = data;
            return this;
        }

        public AgriGenERPResponse GenerateResponseMessage1(string statusCode, string message)
        {
            this.StatusCode = statusCode;
            this.Message = message;
            return this;
        }
    }
}
