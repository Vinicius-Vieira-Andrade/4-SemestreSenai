using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Testes_Unit
{
    public static class Calculo
    {
        public static double Somar(double x, double y)
        {
            return y + x;
        }

        public static double Subtrair(double x, double y)
        {
            return x - y;
        }

        public static double Multiplicar(double x, double y)
        {
            return x * y;
        }

        public static double Dividir(double x, double y)
        {
            return x / y;
        }
    }
}
