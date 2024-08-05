using Products.Domains;

namespace Products.Interfaces
{
    public interface IProductsRepository
    {
        public List<Productss> Get();

        public Productss GetById(Guid id);

        public void PostProduct(Productss p);
        
        public void DeleteProduct(Guid id);

        public void Put(Productss p, Guid id);
    }
}
