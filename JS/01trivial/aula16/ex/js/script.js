const numero = Number(prompt('Digite um número:'));
//IMPORTANTE: ESTOU SELECIONANDO UM ELEMENTO DO HTML POR ID
//E SALVANDO NUMA VARIÁVEL.
const numeroTitulo = document.getElementById('numero-titulo');
const texto = getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu número + 2 é ${numero + 2}.</p>`;