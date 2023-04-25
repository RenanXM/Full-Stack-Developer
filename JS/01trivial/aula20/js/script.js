function meuEscopo() {
  //pegando o formulário pela classe html
  const form = window.document.querySelector('.form');
  const resultado = window.document.querySelector('.resultado');
  const pessoas = [];

  //Espiões de eventos.
  function recebeEventoForm(evento) {
    evento.preventDefault();
    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    });
    
    console.log(pessoas);
    
    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` + 
    `${peso.value} ${altura.value}</p>`;
    
    
  }
  //adicione um escutador de eventos no formulário
  form.addEventListener('submit', recebeEventoForm);
  
  
  /*
  form.onsubmit = function(evento) {
    evento.preventDefault();
    alert(1);
    
  };
  */
}

meuEscopo();