const nome = 'Renan';
const sobrenome = 'Xerez';
const idade = 19;
const peso = 88;
const alturaemM = 1.80;
let imc;
let anoNascimento;

imc = peso / (alturaemM * alturaemM);
anoNascimento = 2022 - idade;

console.log (nome, sobrenome, 'tem', idade, 'anos, pesa', peso,
'kg');
console.log('tem', alturaemM, 'de altura e seu IMC é de', imc);

//template strings
console.log(`tem ${alturaemM} de altura e seu IMC é de
 ${imc}`);

console.log(nome, 'nasceu em', anoNascimento,'.');