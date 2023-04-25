//modo paisagem : imagem deitada (largura > altura)
//modo em retrato : imagem em pé (altura > largura)

function ePaisagem (largura, altura) {
  return largura > altura ? true : false;
  //return largura > altura (também daria certo)
}

//arrow function 
const ePaisagem2 = (largura, altura) => largura>altura;
console.log(ePaisagem(5,10));