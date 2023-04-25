const Cachorro = require('./mod');

const cachorrinho = new Cachorro('dog');
cachorrinho.latir();


//Outra parte da aula

const path = require('path');
console.log(path.resolve(__dirname));
console.log(__filename);
console.log(__dirname);