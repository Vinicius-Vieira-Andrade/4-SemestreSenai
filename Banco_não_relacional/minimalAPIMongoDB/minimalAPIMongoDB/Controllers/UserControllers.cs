using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using minimalAPIMongoDB.Domains;
using minimalAPIMongoDB.Services;
using MongoDB.Driver;

namespace minimalAPIMongoDB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class UserControllers : ControllerBase
    {
        private readonly IMongoCollection<User> _user;

        public UserControllers(MongoDbService mongoDbService)
        {
            _user = mongoDbService.GetDatabase.GetCollection<User>("user");
        }

        [HttpGet]
        public async Task<ActionResult<List<User>>> Get() 
        {
            try
            {
                var users = await _user.Find(FilterDefinition<User>.Empty).ToListAsync();
                return Ok(users);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult> Post(User u)
        {
            try
            {
                //o insertoneasync insere um documento. no caso um user
                await _user.InsertOneAsync(u);
                return StatusCode(200, u);
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpGet("id")]
        public async Task<ActionResult<User>> GetById(string id)
        {
            try
            {
                //buscar o user pelo primeiro id correspondente encontrado
                var user = await _user.Find(x => x.Id == id).FirstOrDefaultAsync();
                //se user n for achado, retorna not found, se nao ele retorna o user
                return user is not null ? Ok(user) : NotFound();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut]
        public async Task<ActionResult> Put(User u)
        {
            try
            {
                var filter = Builders<User>.Filter.Eq(x => x.Id, u.Id);

                if (filter != null)
                {
                    await _user.ReplaceOneAsync(filter, u);

                    return Ok();
                }

                return NotFound();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(User u)
        {
            try
            {
                var filter = Builders<User>.Filter.Eq(x => x.Id, u.Id);

                if (filter != null)
                {
                    await _user.DeleteOneAsync(filter);

                    return Ok();
                }

                return NotFound();
            }
            catch (Exception e )
            {
                return BadRequest(e.Message);
            }
        }
    }
}
