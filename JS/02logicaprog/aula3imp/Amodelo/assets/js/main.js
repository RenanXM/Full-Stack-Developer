// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

//MUITO IMPORTANTE E RECORRENTE.
//addEventListener(evento, função q recebe o evento capturado
//e faz alguma coisa no caso desse evento)
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso inválido (aha)', false);
    return;
  }

  if (!altura) {
    setResultado('Altura inválida (renan é foda dms)', false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);


  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  if (nivelImc == 'DESNUTRIDO') {
    setResultado(msg, true, true);
  } else setResultado(msg, true, false);
});


function getNivelImc (imc) {
  const nivel = ['DESNUTRIDO','Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return nivel[6]; //obesidade grau 3
  if (imc >= 34.9) return nivel[5]; //obesidade grau 2
  if (imc >= 29.9) return nivel[4]; //obesidade grau 1
  if (imc >= 24.9) return nivel[3]; //sobrepeso
  if (imc >= 18.5) return nivel[2]; //peso normal
  if (imc >= 13.5) return nivel[1]; //abaixo do peso
  if (imc < 13.5) return nivel[0]   //DESNUTRIDO
}


function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}


function criaP () {
  const p = document.createElement('p');
  return p;
}

//Função pra mostrar o resultado na tela(usando innerhtml),
//criando parágrafo com classes que dependendo do booelan
//is valid vai deixar vermelho ou verde(css)

function setResultado (msg, isValid, isDesnutrid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();

  if (isValid) {
    if(isDesnutrid) {
      p.classList.add('desnutrido');
    } else{
      p.classList.add('paragrafo-resultado');
    }
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}