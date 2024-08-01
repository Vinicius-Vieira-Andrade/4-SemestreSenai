using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ValidarEmail;

namespace TesteConversao
{
    public class TesteValidarEmail
    {
        [Theory]
        [InlineData("mathes@oi.com", true)]
        [InlineData("lucasdsd.com", false)]
        public void TestarValidarEmail(string email, bool valorEsperado)
        {
            // usando o InLineData e o Theory é só passar no parametro do metodo
            //var email = "vini@gmail.com";
            //var valorEsperado = true;

            var validar = ValidarEEmail.ValidarOEmail(email);
            Assert.Equal(valorEsperado, validar);
        }
    }
}
