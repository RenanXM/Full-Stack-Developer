//IIFE -> Immediately invoked function expression
//Motivação: normalmente queremos evitar de utilizar
//o escopo global do navegador, então normalmente 
//colocamos tudo dentro de uma funçãozona e chamamos ela
//depois. Para resolvermos esse problema temos os IIFE.

(function(idade, peso, altura) {

  const sobrenome = 'Miranda';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('Luiz'));
  }

  falaNome();
  console.log(idade, peso, altura);

})(30, 80, 1.80);