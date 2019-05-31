const pessoas = [
    {'nome': 'Paulo', 'idade': 17},
    {'nome': 'Ana', 'idade': 19},
    {'nome': 'Roberto', 'idade': 23},
];

//Retorna true
const resultado = pessoas.some(p => p.idade > 19 );
