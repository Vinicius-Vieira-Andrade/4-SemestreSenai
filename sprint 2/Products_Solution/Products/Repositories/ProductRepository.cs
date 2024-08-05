using Microsoft.AspNetCore.Http.HttpResults;
using Products.Context;
using Products.Domains;
using Products.Interfaces;

namespace Products.Repositories
{
    public class ProductRepository : IProductsRepository
    {
        private readonly _ProdContext _context;

        public ProductRepository()
        {
            _context = new _ProdContext();
        }

        public void DeleteProduct(Guid id)
        {
            try
            {
                Productss produtoBuscado = _context.Products.FirstOrDefault(x => x.IdProduct == id)!;

                if (produtoBuscado != null) 
                { 
                    _context.Products.Remove(produtoBuscado);

                    _context.SaveChanges();
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<Productss> Get()
        {
            try
            {
                return _context.Products.ToList();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public Productss GetById(Guid id)
        {
            try
            {
                return _context.Products.FirstOrDefault(x => x.IdProduct == id)!;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void PostProduct(Productss p)
        {
            try
            {
                _context.Products.Add(p);

                _context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Put(Productss p, Guid id)
        {
            try
            {
                Productss produtoBuscado = _context.Products.Find(id)!;

                if (produtoBuscado != null)
                {
                    produtoBuscado.Name = p.Name;
                    produtoBuscado.Price = p.Price;
                }

                _context.Products.Update(produtoBuscado);

                _context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
