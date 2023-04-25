//Dobre os números

const numeros = [50,80,1,2,3,5,11,15,22];
//map assim como filter sempre retorna (valor, indice,array)
const numerosEmDobro = numeros.map(valor => valor*2);
//console.log(numerosEmDobro);




//Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const nomePessoas = pessoas.map(pessoa => pessoa.nome);
const idadePessoas = pessoas.map(pessoa => pessoa.idade);

const comIdsCopia = pessoas.map(function(obj, indice) {
  const newObj = {... obj};
  newObj.id = indice;
  return newObj;
})

console.log(comIdsCopia);
console.log(pessoas); //não alterei o original


const comIds = pessoas.map(function(pessoa, indice) {
  pessoa.id = indice; //eu atribuo e o bagulho ja cria o atributo
  return pessoa;
  //O problema é q ele ta mudando meu array original, pq 
  //os objetos foram passados por referência. Caso eu n queira
  //q isso ocorra, faço uma copia.(em cima)
});
//console.log(comIds);