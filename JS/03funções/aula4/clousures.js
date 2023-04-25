function retornaFuncao() {
  const nome = 'renan';
  return function() {
    return nome;
  };
}

const funcao = retornaFuncao();
console.log(funcao);