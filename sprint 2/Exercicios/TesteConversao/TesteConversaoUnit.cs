using Conversao;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TesteConversao
{
    public class TesteConversaoUnit
    {
        [Fact]
        public void TestarConversaoCelsiusFa()
        {
            var c = 100;

            var valorEsperado = 212;

            var calculo = ConverterCelsiusParaFahrenheit.ConverterCelsiusFahrenheit(c);

            Assert.Equal(valorEsperado, calculo);
        }
    }
}
