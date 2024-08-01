using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Conversao
{
    public static class ConverterCelsiusParaFahrenheit
    {
        public static float ConverterCelsiusFahrenheit( float celsius)
        {
            return (celsius * 9 / 5) + 32;
        }
    }
}
