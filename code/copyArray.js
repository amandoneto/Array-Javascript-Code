const nomes = ['Ana', 'Paulo', 'Simone'];
const outros = nomes;
outros[2] = 'Roberta';
//Ao imprimir nomes e outros temos esse resultado
//Nomes = [ 'Ana', 'Paulo', 'Roberta']
//outros [ 'Ana', 'Paulo', 'Roberta']
//Isso ocorre porque objetos são copiados por referência e não por valor.
