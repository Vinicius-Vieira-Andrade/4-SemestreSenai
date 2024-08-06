using Moq;
using Products.Domains;
using Products.Interfaces;
using Products.Repositories;

namespace testApiUnit
{
    public class testApi
    {
        /// <summary>
        /// Teste para a funcionalidade de listar todos os produtos
        /// </summary>
        [Fact]
        public void Get()
        {
            // ARRANGE / organizar

            // lista de produtos
            var productList = new List<Productss>
            {
                new Productss { IdProduct = Guid.NewGuid(),Name = "Produto 1", Price = 50 },
                new Productss { IdProduct = Guid.NewGuid(), Name = "Produto 2", Price = 100 },
                new Productss { IdProduct = Guid.NewGuid(), Name = "Produto 3", Price = 450 }
            };

            // criar um objeto de simulação do tipo ProductRepository, com o pacote que baixamos do MOQ, não serão dados do banco, do sistema de fato
            var mockRepository = new Mock<IProductsRepository>();

            // configura o método "Get" para quando for acionado retorne a lista mockada
            mockRepository.Setup(x => x.Get()).Returns(productList);

            // ACT / ação

            //executando o método "Get" e atribue a resporta em "result"
            var result = mockRepository.Object.Get();

            // ASSERT 
            
            Assert.Equal(3, result.Count);
        }

        [Fact]
        public void Post()
        {
            // ARRANGE
            var productList = new List<Productss>
            {

            };

            var product1 = new Productss
            {
                IdProduct = Guid.NewGuid(),
                Name = "produto1",
                Price = 50,
            };

            var mockRepository = new Mock<IProductsRepository>();

            mockRepository.Setup(x => x.PostProduct(product1)).Callback(new Action<Productss>(p =>
            {
                productList.Add(p);

            })).Verifiable();



            // ACT

            mockRepository.Object.PostProduct(product1);

            // ASSERT

            mockRepository.Verify(x => x.PostProduct(product1), Times.Once());

            Assert.True(productList.Count != 0);
        }

        [Fact]
        public void GetById()
        {
            var id = Guid.NewGuid();

            var productList = new List<Productss>
            {
                new Productss { IdProduct = id,Name = "Produto 1", Price = 50 },
                //new Productss { IdProduct = Guid.NewGuid(), Name = "Produto 2", Price = 100 },
                //new Productss { IdProduct = Guid.NewGuid(), Name = "Produto 3", Price = 450 }
            };

            var mockRepository = new Mock<IProductsRepository>();

            var produtoAchado = productList.FirstOrDefault(x => x.IdProduct == id);

            mockRepository.Setup(x => x.GetById(id)).Returns(produtoAchado);


            var result =  mockRepository.Object.GetById(id);


            Assert.Equal(produtoAchado, result);
           
        }

        [Fact]
        public void DeleteProduct()
        {

            var productList = new List<Productss>
            {
                 new Productss { IdProduct = Guid.NewGuid(),Name = "Produto 1", Price = 50 },
            };

            var produtoParaDeletar = productList.First();
            var mockRepository = new Mock<IProductsRepository>();

            mockRepository.Setup(x => x.DeleteProduct(produtoParaDeletar.IdProduct)).Callback(() =>
            {
                productList.Remove(produtoParaDeletar);
            }).Verifiable();

            mockRepository.Object.DeleteProduct(produtoParaDeletar.IdProduct);

            mockRepository.Verify(x => x.DeleteProduct(produtoParaDeletar.IdProduct), Times.Once());

            Assert.True(productList.Count == 0);

        }

        [Fact]
        public void Put()
        {
            Productss p = new Productss { IdProduct = Guid.NewGuid(), Name = "Arroz", Price = 10 };
            Productss newProduct = new Productss { Name = "Arrozin", Price = 10 };

            var mockRepository = new Mock<IProductsRepository>();

            mockRepository.Setup(x => x.Put(newProduct, p.IdProduct)).Callback(() => p.Name = newProduct.Name);

            mockRepository.Object.Put(newProduct, p.IdProduct);

            Assert.Equal(p.Name, newProduct.Name);
        }


    }
}