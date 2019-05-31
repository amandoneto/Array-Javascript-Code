const animaisDup = ['cachorro', 'gato', 'leão', 'cachorro', 'gato', 
'leão'];

//Removendo as duplicidades
const unico = new Set(animaisDup);

//Agora temos uma array com os seguintes animais: [ 'cachorro', 'gato', 'leão']
const animaisArr = Array (...unico);
