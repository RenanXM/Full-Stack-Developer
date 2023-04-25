/*
Object.values
Object.entries
Object.getOwnPropertyDescriptor(o, 'prop')
Object.assign(des, any)
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/


//copiando um objeto noutro usando spread operator
const produto = {nome: 'Caneca', preco: 1.8};

const outraCoisa = {
  ...produto,
  material: 'porcelana'
};

outraCoisa.nome = 'renan';
outraCoisa.preco = 2.5;
console.log(produto);
console.log(outraCoisa);

//Ver a descrição das propriedades.
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

