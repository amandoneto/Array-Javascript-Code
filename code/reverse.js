//Criando uma array de números onde desejamos reverter os valores da array
const numeros = [1 ,2, 3, 4, 5];
//retorna [5, 4, 3, 2, 1]
numeros.reverse();

//Para reverter uma String, precisamos realizar alguns passos
//1) Converter a String em array
//2) Usar o método reverse()
//3) Fazer o join, que faz a junção dos dados da array para um objeto String
const palavra = "roma";

//Retorna amor
const novaPalavra = palavra.split('').reverse().join('');
