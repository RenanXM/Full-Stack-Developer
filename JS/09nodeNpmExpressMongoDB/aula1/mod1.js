const nome = 'luiz';
const sobrenome = 'miranda';

const falaNome = () => nome + ' ' + sobrenome;

/* module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;
console.log(module.exports);
*/

class Pessoa {
  constructor(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

exports.Pessoa = Pessoa;
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

console.log(exports);