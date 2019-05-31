const pessoas = [
    {'nome': 'Paulo', 'idade': 17},
    {'nome': 'Ana', 'idade': 19},
    {'nome': 'Roberto', 'idade': 23},
];

//Retorna true
const resultado = pessoas.every(p => p.idade >= 18 );
