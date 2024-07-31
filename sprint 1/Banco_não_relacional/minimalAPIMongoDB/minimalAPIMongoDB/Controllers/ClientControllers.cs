using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using minimalAPIMongoDB.Domains;
using minimalAPIMongoDB.Services;
using minimalAPIMongoDB.ViewModel;
using MongoDB.Driver;

namespace minimalAPIMongoDB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class ClientControllers : ControllerBase
    {
        private readonly IMongoCollection<Client> _client;
        private readonly IMongoCollection<User> _user;
        public ClientControllers(MongoDbService mongoDbService)
        {
            _client = mongoDbService.GetDatabase.GetCollection<Client> ("client");
            _user = mongoDbService.GetDatabase.GetCollection<User> ("user");
        }

        [HttpGet]
        public async Task<ActionResult<List<Client>>> Get()
        {
            try
            {
                var clients = await _client.Find(FilterDefinition<Client>.Empty).ToListAsync();
                return Ok(clients);
            }
            catch (Exception e )
            {

                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult> Post(ClientViewlModel c)
        {
            try
            {
                Client client = new Client();
                client.Id = c.Id;
                client.Address = c.Address;
                client.Cpf = c.Cpf;
                client.Phone = c.Phone;
                client.UserId = c.UserId;

                var user = await _user.Find(x => x.Id == client.UserId).FirstOrDefaultAsync();
                if (user == null)
                {
                    return NotFound();
                }

                client.User = user;

                await _client.InsertOneAsync(client);

                return Ok(client);
                //await _client.InsertOneAsync(c);
                //return StatusCode(200, c);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("id")]
        public async Task<ActionResult> GetById(string id)
        {
            try
            {
                var client = await _client.Find(x => x.Id == id).FirstOrDefaultAsync();
                return client is not null ? Ok(client) : NotFound();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut]
        public async Task<ActionResult> Put(Client c)
        {
            try
            {
                var filter = Builders<Client>.Filter.Eq(x => x.Id, c.Id);
                if (filter != null)
                {
                    await _client.ReplaceOneAsync(filter, c);

                    return Ok();
                }
                return NotFound();
            }
            catch (Exception e )
            {

                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(string id)
        {
            try
            {
                var filter = Builders<Client>.Filter.Eq(x => x.Id, id);

                if (filter != null)
                {
                    await _client.DeleteOneAsync(filter);

                    return Ok();
                }

                return NotFound();
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }
    }
}
