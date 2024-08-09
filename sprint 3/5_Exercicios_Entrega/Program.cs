// Exercício 1
// Escreva um programa que peça ao usuário para digitar um número inteiro e informe se o
// número é par ou ímpar. Utilize uma estrutura condicional if/else para realizar o teste.

// Console.WriteLine($"insira uma número: ");
// int numero = int.Parse(Console.ReadLine()!);

// if (numero % 2 == 0)
// {
//     Console.WriteLine($"O número fornecido '{numero}' é par");
// }
// else
// {
//     Console.WriteLine($"O número fornecido '{numero} é impar'");
// }


// Exercício 2
// Crie um programa que permita que o usuário cadastre 5 nomes em um vetor. Após o
// cadastro, o programa deve imprimir na tela os nomes cadastrados em ordem alfabética.
// Utilize um laço for para o cadastro e um método de ordenação de sua preferência (por
// exemplo, bubble sort) para ordenar os nomes.

// string[] nomes = new string[5];


// Console.WriteLine($"Cadastre 5 nomes");
// for (int i = 0; i < 5 ; i++)
// {
//     Console.WriteLine($"Cadastre o {i+1}° nome:");
//     nomes[i] = Console.ReadLine()!;
// }

// Array.Sort(nomes);

// Console.WriteLine($"Nomes cadastrados:");

// foreach(string nome in nomes){
//     Console.WriteLine($"Nome: {nome}");
// }


// Exercício 3
// Crie um programa que calcule a soma dos números pares de um vetor de 10 elementos.
// Utilize um laço for para percorrer o vetor e uma estrutura condicional if para identificar
// os números pares.

// int soma = 0;
// int[] numeros = [11, 20, 31, 40, 51, 61, 70, 81, 91, 100];

// for (int i = 0; i < numeros.Count(); i++)
// { 
//     if (numeros[i] % 2 == 0)
//     {
//         // Console.WriteLine($"{numeros[i]}");
//         soma += numeros[i];
//     }
// }
// Console.WriteLine($"a soma dos numeros pares é: {soma}");




// Exercício 4
// Crie uma função que recebe um número como parâmetro e retorna a tabuada desse
// número até o número 10. Utilize um laço for para gerar os múltiplos do número.
// void Tabuada(int n)
// {
//     for (int i = 0; i <= 10; i++)
// {
//     Console.WriteLine($"{n} x {i} = {n * i}");
// }
// }

// Tabuada(2);





// Exercício 5
// Crie um programa que peça ao usuário para digitar um texto e conte quantas vezes cada
// letra do alfabeto aparece no texto.

// Console.WriteLine($"Insira um texto qualquer, pode ser uma palavra também: ");
// string texto = Console.ReadLine()!;
// string result = string.Empty;
// while (texto.Length > 0)
// {
// int count = 0;
// for (int i = 0; i < texto.Length; i++)
// {
// if (texto[0] == texto[i])
// {
// count++;
// }
// }
// result += texto[0] + " = " + count + "\n";
// texto = texto.Replace(texto[0].ToString(), string.Empty);
// }
// Console.WriteLine($"{result}");