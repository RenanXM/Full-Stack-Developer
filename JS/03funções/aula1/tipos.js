// Declaração de função (Function hoisting)
falaOi();
function falaOi() {
  console.log('Oie');
}

// First-class objects (Objetos de primeira classe)
// Function expression muito usado pra passar funções
// como parâmetro
const souUmDado = function() {
  console.log('Sou um dado.');
};
souUmDado();

/* function executaFuncao(funcao) {
  console.log('vou executar')
  funcao();
}
executaFuncao(souUmDado); */


// Arrow function ((THIS!!!!))
const funcaoArrow = () => {
  console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
  falar() {
    console.log('Estou falando...');
  }
};
obj.falar();