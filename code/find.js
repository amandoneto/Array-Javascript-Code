const numeros = [2, 5, 8, 10, 15];

//Retorna o primeiro número maior que 3, o resultado = 5.
const maiorQueTres = numeros.find(n => n > 3);

//Nesse caso retorna o indice = 1
const maiorQueTresIndice = numeros.findIndex(n => n > 3);
