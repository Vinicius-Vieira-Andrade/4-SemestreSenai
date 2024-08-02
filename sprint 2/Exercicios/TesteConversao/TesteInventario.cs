using Inventario;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TesteConversao
{
    public class TesteInventario
    {
        [Fact]
        public void AdicionarProduto_AdicionaONovoProduto_AoInventario()
        {
            // Arrange
            var inventario = new ProdutoInventario();
            string nomeProduto = "Uva";
            int quantidade = 12;

            // Act
            inventario.AdicionarProduto(nomeProduto, quantidade);

            // Assert
            int quantidadeEsperada = 12;
            int quantidadeAtual = inventario.ObterQuantProduto(nomeProduto);
            Assert.Equal(quantidadeEsperada, quantidadeAtual);
        }

        [Fact]
        public void AdicionarProduto_IncrementaQuantidade_DoProdutoExistente()
        {
            // Arrange
            var inventario = new ProdutoInventario();
            string nomeProduto = "Feijão";
            int quantidadeInicial = 5;
            int quantidadeAdicional = 3;

            // Act
            inventario.AdicionarProduto(nomeProduto, quantidadeInicial);
            inventario.AdicionarProduto(nomeProduto, quantidadeAdicional);

            // Assert
            int quantidadeEsperada = quantidadeInicial + quantidadeAdicional;
            int quantidadeAtual = inventario.ObterQuantProduto(nomeProduto);
            Assert.Equal(quantidadeEsperada, quantidadeAtual);
        }

        [Fact]
        public void ObterQuantidadeProduto_RetornaZero_SeProdutoNaoExiste()
        {
            // Arrange
            var inventario = new ProdutoInventario();

            // Act & Assert
            int quantidadeAtual = inventario.ObterQuantProduto("ProdutoInexistente");
            Assert.Equal(0, quantidadeAtual);
        }
    }
}
