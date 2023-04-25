/*
// new Object -> Object.prototype
const objA = {
  chaveA: 'A'
  //__proto__: Object.prototype
};

// new Object -> Object.prototype
const objB = {
  chaveB: 'B'
  //__proto__: objA****
};

Object.setPrototypeOf(objB, objA); //****
console.log(objB.chaveA);
*/

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

//Funções protótipas de Produto
Produto.prototype.desconto = function(percent) {
  this.preco = this.preco - (this.preco * (percent / 100));
}
Produto.prototype.aumento = function(percent) {
  this.preco = this.preco + (this.preco * (percent / 100));
}

const p1 = new Produto('Camiseta', 50);

//Literal (um produto feito na mao, mas nao se conhece os m
//métodos de desconto e aumento desse objeto. Mas podemos setar o prototype
//dele com Object.setPrototypeOf(p2, Produto,prototype). Daí ele vai
//entender que existem os métodos desconto e aumento.)
const p2 = {
  nome: 'Caneca',
  preco:15
};
Object.setPrototypeOf(p2, Produto.prototype);

//Criar ja setando o prototype do Objeto.
const p3 = Object.create(Produto.prototype, {
  tamanho: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 113,
  },
  tamanho2: {

  }
});






console.log(p1);
console.log(p2);