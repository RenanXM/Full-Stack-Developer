//SWITCH
const data = new Date('1987-04-22 00:00:00');
const diaSemana = data.getDay();
let diaSemanaTexto;
// '===' verifica o tipo e os valores.



//Checo uma variável só! (caso perfeito pro switch)
switch (diaSemana) {
case 0:
  diaSemanaTexto = 'Domingo';
  break;

case 1:
  diaSemanaTexto = 'Segunda';
  break;

case 2:
  diaSemanaTexto = 'Terça';
  break;

case 3:
  diaSemanaTexto = 'Quarta';
  break;

case 4:
  diaSemanaTexto = 'Quinta';
  break;

case 5:
  diaSemanaTexto = 'Sexta';
  break;

case 6:
  diaSemanaTexto = 'Sábado';
  break;

default:
  diaSemanaTexto = '';

}

//Checo uma variável só! (caso perfeito pro switch)
/* if (diaSemana === 0) {
  diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
  diaSemanaTexto = 'Segunda';
} else if (diaSemana === 2) {
  diaSemanaTexto = 'Terça';
} else if (diaSemana === 3) {
  diaSemanaTexto = 'Quarta';
} else if (diaSemana === 4) {
  diaSemanaTexto = 'Quinta';
} else if (diaSemana === 5) {
  diaSemanaTexto = 'Sexta';
} else if (diaSemana === 6) {
  diaSemanaTexto = 'Sábado';
} else {
  diaSemanaTexto = '';
} */