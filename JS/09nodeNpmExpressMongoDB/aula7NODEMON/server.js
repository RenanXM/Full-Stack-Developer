//node server.js
//com o terminal no canto certo.

//npm install nodemon --save-dev (pra nao precisar
//ficar desligando e ligando o servidor toda vez que
//atualizar algo.)
//ao inves do 'node server.js' Tem npx nodemon server.js
//mudando o arquivo package.json, configurei o script start 
//para ser justamente esse comando do npx aí. Então quando
//eu quiser ligar o server basta dar um "npm start"

const express = require('express');
const app = express();


//         Criar   ler   atualizar apagar
// CRUD -> CREATE, READ, UPDATE,   DELETE
//         POST    GET   PUT       DELETE

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome do cliente: <input type="text" name="nome">
  <button>Olá mundo back</button>
  </form>
  `);
});

app.post('/', (req, res) => {
  res.send('Recebi o formulário');
});

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato com a gente.');
});

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});
