using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace Livros
{
    public static class Livross
    {
        // Exercício 1: Teste de Gerenciamento de Livros  
        // Crie um teste unitário para o método AdicionarLivro que verifica se um livro é adicionado corretamente a uma lista de livros.
        public static bool AdicionarLivro(string nomeLivro)
        {
            //List<string> Livros = ["livro1", "livro2"];
            List<string> Livross = [];

            Livross.Add(nomeLivro);

            if (Livross.Contains("Diario de um banana"))
            {
                return true;
            }

            return false;
        }   


      
    }
}
