//Importa tudo do mod1
//com isso temos tudo que exportamos do mod1.
const mod1 = require('./mod1');
const {Pessoa} = require('./mod1');

//Se eu quisesse só a função:
//const mod1 = require('./mod1').falaNome;

//Por desestruturação: (pq é um objeto normal)
//const {nome, sobrenome, falaNome} = require('./mod1);

console.log(mod1);
console.log(mod1.falaNome()); 

const p1 = new Pessoa('Luiz', 'Miranda');
console.log(p1);