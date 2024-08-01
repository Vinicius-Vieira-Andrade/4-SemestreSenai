using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ValidarEmail
{
    public static class ValidarEEmail
    {
        public static bool ValidarOEmail(string email)
        {
            if (email.Contains("@") && email.Contains("."))
            {
                return true;
            }
            else { return false; }
        }

    }
}
