using minimalAPIMongoDB.Domains;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.Text.Json.Serialization;

namespace minimalAPIMongoDB.ViewModel
{
    public class ClientViewlModel
    {
        [BsonId]
        [BsonElement("_id"), BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("cpf")]
        public string Cpf { get; set; }

        [BsonElement("phone")]
        public string Phone { get; set; }

        [BsonElement("address")]
        public string Address { get; set; }

        [BsonElement("userID")]
        public string? UserId { get; set; }

        [BsonIgnore]
        [JsonIgnore]
        public User? User { get; set; }

        public Dictionary<string, string> AdditionalAttributes { get; set; }

        public ClientViewlModel()
        {
            AdditionalAttributes = new Dictionary<string, string>();
        }
    }
}
