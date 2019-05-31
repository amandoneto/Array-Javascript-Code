const numeros = [1,8,7,4,10];

/*
    Resultado: [1, 10, 4, 7, 8]
    Aqui a ordenação é considerada não estável. O principal motivo é que
    a função sort converte os valores para string. 
    Por isso, o número 10 aparece na segunda posição, seguindo o código unicode
*/
numeros.sort();
const numeros = [1,8,7,4,10];

//Resultado: [1, 4, 7, 8, 10]
numeros.sort((a,b) => a - b);
