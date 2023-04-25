///For in -> lê os índices ou chavess do objeto
const frutas = ['Pera, Maçã, Uva'] ;

for (let i in frutas) {
  console.log(frutas[i]);
}


const pessoa = {
  nome: 'Luiz',
  sobrenome:'Otávio',
  idade:30,
};

for (let index in pessoa) {
  console.log(index, pessoa[index]);
}
