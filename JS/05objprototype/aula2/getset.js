// defineProperty -> Getter e Setter

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;


  Object.defineProperty(this, 'estoque', {
    enumerable: true,

    configurable: true,

    get: function() {
      return estoquePrivado;
    },

    set: function() {
      if(typeof valor !== 'number') {
        throw new TypeError('Ops');
      }
      estoquePrivado = valor;
    }


  });
}


function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(outroNome) {
      nome = outroNome;
    }
  }
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);