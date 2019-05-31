const pessoas = [
    {'nome': 'Paulo', 'idade': 17},
    {'nome': 'Roberto', 'idade': 23},
    {'nome': 'Ana', 'idade': 19}
];

//Resultado:
// [ { nome: 'Ana', idade: 19 },
// {Nome: 'Paulo', idade: 17},
// {nome: 'Roberto', idade: 23}]
//Tente fazer a ordenação pela idade, decrescente
pessoas.sort((p1, p2) => {
    if (p1.nome > p2.nome ){
        return 1;
    }
    else if (p1.nome < p2.nome ){
        return -1;
    }
    return 0;
});
