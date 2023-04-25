function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;
  //chave = atributo do objeto.
  Object.defineProperty(this, 'estoque', {
    enumerable: true, //mostra a chave(atributo)
    value: estoque,   //valor
    writable: false,  //pode alterar 
    configurable: true //pode reconfigurar a chave?
  });

  Object.defineProperties(this, {
    nome: {    
      enumerable: true, //mostra a chave(atributo)
      value: nome,   //valor
      writable: true,  //pode alterar 
      configurable: true //pode reconfigurar a chave?},
    },

    preco: {
      enumerable: true, //mostra a chave(atributo)
      value: preco,   //valor
      writable: true,  //pode alterar 
      configurable: true //pode reconfigurar a chave?
    }

    //...

  })
}

const p1 = new Produto('Camiseta',20,3);
p1.estoque = 50000;
console.log(p1);
