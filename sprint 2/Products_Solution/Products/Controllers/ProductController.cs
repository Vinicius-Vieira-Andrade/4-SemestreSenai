using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Products.Domains;
using Products.Interfaces;
using Products.Repositories;

namespace Products.webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class ProductController : ControllerBase
    {
        private IProductsRepository? _productRepository { get; set; }

        public ProductController()
        {
            _productRepository = new ProductRepository();
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_productRepository.Get());
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpGet("GetById")]
        public IActionResult GetById(Guid id)
        {
            try
            {
                return Ok(_productRepository.GetById(id));
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public IActionResult Post(Productss p)
        {
            try
            {
                _productRepository.PostProduct(p);
                return Ok("Criado com sucesso");
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpDelete]
        public IActionResult Delete(Guid id)
        {
            try
            {
                _productRepository.DeleteProduct(id);

                return Ok("Produto deletado com sucesso");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut]
        public IActionResult Put(Productss p, Guid id)
        {
            try
            {
                _productRepository.Put(p, id);
                return NoContent();
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }
    }
}
