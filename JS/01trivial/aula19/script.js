//básico de objetos


const pessoa1 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade:25,

  falar() {
    console.log(`${this.nome} ${this.sobrenome} está falando oi`);
  },

  incrementaIdade() {
    this.idade++;
  }

};

console.log(pessoa1.nome);
pessoa1.falar();
console.log(pessoa1.idade);
pessoa1.incrementaIdade();
console.log(pessoa1.idade);


/*
function criaPessoa(nome, sobrenome, idade) {
  return {
    nome: nome, //nome (poderia ser)
    sobrenome: sobrenome, //sobrenome (poderia ser)
    idade: idade //idade (poderia ser)(ele entende...)
  };
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
console.log(pessoa1.nome);
*/