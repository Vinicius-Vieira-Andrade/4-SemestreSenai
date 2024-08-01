using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Testes_Unit;

namespace xUnit_Teste
{
    public class CalculoUnitTest
    {

        // principio AAA : Act, Arrange, e Assert
        // principio AAA : Agir, Organizar e Provar
        [Fact]
        public void TestarSomaDeDoisNumeros()
        {
            //Organizar (Arrange)
            var n1 = 3.3;
            var n2 = 2.2;
            var valorEsperado = 5.5;
           
           //Agir (Act)
            var soma = Calculo.Somar(n1, n2);

            //Provar (Assert)
            Assert.Equal(soma, valorEsperado);
        }

        [Fact]
        public void TestarSubtracaoDeDoisNumeros()
        {
            var n1 = 5;
            var n2 = 3;
            var valorEsperado = 2;

            var subtracao = Calculo.Subtrair(n1, n2);

            Assert.Equal(subtracao, valorEsperado);
        }

        [Fact]
        public void TestarMultiplicacaoDeDoisNumeros()
        {
            var n1 = 2;
            var n2 = 2;
            var valorEsperado = 4;

            var multiplicacao = Calculo.Multiplicar(n1, n2);

            Assert.Equal(multiplicacao, valorEsperado);
        }

        [Fact]
        public void TestarDivisaoDeDoisNumeros()
        {
            var n1 = 6;
            var n2 = 2;
            var valorEsperado = 3;

            var divisao = Calculo.Dividir(n1, n2);

            Assert.Equal(divisao, valorEsperado);
        }
    }
}
