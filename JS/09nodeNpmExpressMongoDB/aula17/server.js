//OBS's: 
// -> MVC : Controller vai controlar(decidir coisas) determinada ROTA.
//        Model vai controlar dados, coisas relacionadas com a base de dados.
//        View (oq o usuário vai ver.)
//  Os controllers decidem quem vão ser os Models e Views.
//  A rota escolhe o controller.


//PRA USAR O .env onde tem *coisas pessoais*
require('dotenv').config(); 


//iniciar EXPRESS.
const express = require('express');
const app = express();
//

//MOONGOSE: ele é quem vai modelar a nossa base de dados e 
//garantir que os dados salvos são realmente salvos da forma
//que queremos.
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.emit('pronto');
  })
  .catch(e => console.log(e));
//

//SESSÕES servem geralmente pra identificar o navegador de um cliente
//O programa salva cookies com ID's no computador do cliente e toda vez
//que ele conectar no servidor ele vai mandar esse cookie, o nosso servidor
//vai checar esse cookie nessa sessão pra ver se realmente é confiável.
const session = require('express-session');
//

// MONGO-STORE serve pra falar que as sessões vão ser salvas dentro da base
//de dados. Por padrão elas são salvas em memória e se utilizarmos
//um servidor "grande", ficaríamos sem memória rapidamente.
const MongoStore = require('connect-mongo');
//

//FLASHMESSAGES: mensagens auto-destrutivas(após vc ler ela, ela
//vai sumir da base de dados.). Muito boa pra enviar mensagens de erro,
//feedback, etc. Elas são salvas em sessão.
const flash = require('connect-flash');
//

//ROTAS: são as rotas da nossa aplicação, ou seja: "/home", "/contato",
//"/paginaInicial", etc.
const routes = require('./routes');
//

//PATH: Pra poder trabalhar com caminhos.
const path = require('path');
//

//HELMET: é uma recomendação do próprio EXPRESS (segurança);
const helmet = require('helmet');
//

//CSURF: Tokens pros nossos formulários. Isso faz com que nenhum aplicativo
//ou site externo consiga postar algo na nossa aplicação. (segurança);
const csrf = require('csurf');

//São os nossos MIDDLEWARES. Eles são funções que são executadas
//nas nossas ROTAS. Geralmente são cadeias de funções. 'next()'!!
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');
//

//Utilizando o HELMET.
app.use(helmet());
//

//Nos permite postar formulários pra dentro da nossa aplicação
app.use(express.urlencoded({ extended: true }));
//

//Muito utilizado kk
app.use(express.json());
//

//Arquivos estáticos são todos os arquivos que podem ser acessados
//DIRETAMENTE. Por exemplo: imagens, css, javaScript...
app.use(express.static(path.resolve(__dirname, 'public')));
//

//Configurações de Sessão
const sessionOptions = session({
  secret: 'renan2486',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});
//
//Usando o que acabamos de configurar
app.use(sessionOptions);

//Usando as flashmessages
app.use(flash());

//VIEWS são os arquivos que renderizamos na tela. Geralemente
//html, ejs.
app.set('views', path.resolve(__dirname, 'src', 'views'));
//

//VIEW ENGINE é a engine que usamos pra renderizar o html.
app.set('view engine', 'ejs');
//

//Utilizando o csrf token.
app.use(csrf());
//


// Utilizando Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
//

//Chamando as rotas.
app.use(routes);
//

//Mandamos nossa aplicação escutar as coisas.
app.on('pronto', () => {
  app.listen(3001, () => {
    console.log('Acessar http://localhost:3001');
    console.log('Servidor executando na porta 3001');
  });
});
//
