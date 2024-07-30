using minimalAPIMongoDB.Domains;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.Text.Json.Serialization;

namespace minimalAPIMongoDB.ViewModel
{
    public class OrderViewModel
    {
        [BsonId]
        [BsonElement("_id"), BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("date")]
        public DateTime Date { get; set; }

        [BsonElement("status")]
        public string? Status { get; set; }


        // referencia dos produtos no pedido, um pedido pode conter varios produtos
        [BsonElement("ProductID")]
        public List<string>? IdProduct { get; set; }

        [BsonIgnore]
        [JsonIgnore]
        public List<Product>? Product { get; set; }


        // referencia do cliente no pedido, somente um cliente por estar atrelado a um pedido por vez
        [BsonElement("ClientID")]
        public string? IdClient { get; set; }

        [BsonIgnore]
        [JsonIgnore]
        public Client? Client { get; set; }
    }
}
