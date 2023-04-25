const nome = 'Luiz'; //string
const nome1 = "Luiz";//string
const nome2 = `Luiz`;//string
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno //undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null; //Nulo -> não aponta para local nenhum na memória
const aprovado = true; //Boolean = true, false
const reprovado = false;

const a = [1,2];
const b = a;

console.log(a,b);
b.push(3);
//referência.
console.log(a,b); //o valor adicionado em B também foi adicionado em A.