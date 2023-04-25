//RESUMO:
//req.params -> estamos falando das partes que vem na rota
//da URL. EX: /profiles/usuario3
//
//req.query -> queryString(URL) 
//EX:/profiles/?chave1=valor&chave2=valor2
//
//req.body -> O que nós recebemos no corpo da requisição

const express = require('express');
const app = express();

app.use(
  express.urlencoded(
    {
      extended: true
    }
  )
);

//http://facebook.com/profiles/12345?campanha=googleads
//'?' inicia uma querryString. chavevalor(URL)
//'&' separa/acaba 

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome do cliente: <input type="text" name="nome">
  <button>Olá mundo back</button>
  </form>
  `);
});

//Receber o parâmetro
//app.get('/testes:/idUsuarios') (pra ser opcional: ?)
//Isso é o que eu vou receber na chave do meu obejto
//params.
app.get('/testes/:idUsuarios?/:parametropc?', (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

app.post('/', (req, res) => {
  //O formulário enviado vem no req.body, precisamos falar
  //pro Express que queremos receber isso, pra ele tratar e
  //me dar um objeto. Pra isso, fazemos lá em cima 'app.use(...)'
  console.log(req.body);
  res.send(`O que você me enviou foi: ${req.body.nome}`);
});

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});
