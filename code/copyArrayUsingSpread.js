//Usando operador spread
const outros = [...nomes];
outros[2] = 'Roberta';
//Ao imprimir nomes e outros temos esse resultado
//Nomes = [ 'Ana', 'Paulo', 'Simone']
//outros [ 'Ana', 'Paulo', 'Roberta']
//Teremos o mesmo resultado usando const outros = nomes.slice(0,2);
