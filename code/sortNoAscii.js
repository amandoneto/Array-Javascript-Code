const pessoas = [
    {'nome': 'André', 'idade': 17},
    {'nome': 'Fábio', 'idade': 23},
    {'nome': 'Fabrício', 'idade': 34},
    {'nome': 'Fernando', 'idade': 24},
    {'nome': 'Ana', 'idade': 19}
];

//Resultado:
//[ { nome: 'Ana', idade: 19 },
// { nome: 'André', idade: 17 },
// { nome: 'Fábio', idade: 23 },
// { nome: 'Fabrício', idade: 34 },
// { nome: 'Fernando', idade: 24 } ]
pessoas.sort((p1, p2) => {
    return p1.nome.localeCompare(p2.nome);
});
