export const nome = 'Luiz';
export const sobrenome = 'Miranda';
export const idade = 30;
const cpf = 'dededed';

export function soma(x,y) {
  return x + y;
}

export default class Pessoa {
  constructor(nome , sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}