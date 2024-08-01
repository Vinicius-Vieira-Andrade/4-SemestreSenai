using Livros;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TesteConversao
{
    public class TesteGerenciarLivro
    {
        [Fact]
        public void TestarLivroAdiciona()
        {
            var nomeLivro = "Diario de um banana";
            var valorEsperado = true;

            var validar = Livross.AdicionarLivro(nomeLivro);

            Assert.Equal(valorEsperado, validar);
        }
    }
}
