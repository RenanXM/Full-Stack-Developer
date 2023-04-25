//GAMBIARRA DO JAVASCRIPT PRA DEIXAR ATRIBUTOS PRIVADOS
const _velocidade = Symbol('velocidade');

class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  set velocidade(valor) {
    if(typeof valor !== 'number') return;
    if(valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  get velocidade() {
    return this[_velocidade];
  }

  acelerar() {
    if(this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  freiar() {
    if(this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }

}

const c1 = new Carro('Fusca');
//o ato de usar '=' já chama o meu método setter.
//nao preciso usar setVelocidade() como em outras
//linguagens. Assim como nao preciso de getVelocidade()
//o próprio JS entende o que eu vou fazer.
c1.velocidade = 99;
console.log(c1.velocidade); //Acesso essa FUNÇÃO como ATRIBUTO