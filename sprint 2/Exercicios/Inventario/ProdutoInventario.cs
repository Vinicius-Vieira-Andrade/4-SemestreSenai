using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Inventario
{
    public class ProdutoInventario
    {
        private Dictionary<string, Produto> _prod;

        public ProdutoInventario()
        {
            _prod = new Dictionary<string, Produto>();
        }

        public void AdicionarProduto(string nome, int quantidade)
        {
            if (_prod.ContainsKey(nome))
            {
                _prod[nome].Quantidade += quantidade;
            }
            else
            {
                _prod.Add(nome, new Produto(nome, quantidade));
            }
        }

        public int  ObterQuantProduto(string nome)
        {
            if (_prod.TryGetValue(nome, out var produto))
            {
                return produto.Quantidade;
            }
            return 0;
        }
    }
}
