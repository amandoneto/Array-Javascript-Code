const estados = ['DF', 'MG', 'SP', 'CE'];

//estados = ['DF', 'MG', 'SP', 'CE', 'MT']
const adicionaItemUltimaPosicao = estados.push('MT');

//estados = ['RJ', 'DF', 'MG', 'SP', 'CE', 'MT']
const adicionaItemPrimeiraPosicao = estados.unshift('RJ');

//remove o último item da array MT, estados = ['RJ', 'DF', 'MG', 'SP', 'CE']
const removeUltimoItem = estados.pop();

//remove o primeiro item da array RJ, estados = ['DF', 'MG', 'SP', 'CE']
const removePrimeiroItem = estados.shift();

//Splice adiciona/remove itens da array, pode retornar o item removido quando for o caso.
//Nesse exemplo, é adicionado o estado RS na posição 2 da array e nenhum estado é removido.
//estados = ['DF', 'MG', 'RS', SP', 'CE']
const novoEstado = estados.splice(2,0,'RS');

//Remove estado a apartir da posição 2 até a posição 4,
//Estados removidos = [ 'RS', 'SP', 'CE'] 
//estados = [ 'DF', 'MG']
const removeEstado = estados.splice(2,4);

//Estado removido MG, estados = [ 'DF', 'BA']
const adicionaRemoveEstado = estados.splice(1,1, 'BA');
