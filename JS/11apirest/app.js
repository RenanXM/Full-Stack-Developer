// Fazer Controller -> Fazer rotas -> Usar no app.

// importando o dovent (arquivo com coisas sensíveis)
import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

// importando a database
import './src/database';

// importando o express
import express from 'express';

// importando a rotas
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import alunoRoutes from './src/routes/alunoRoutes';
import fotoRoutes from './src/routes/fotoRoutes';

class App {
  constructor() {
    // App vai ser setado pro express
    this.app = express();
    // middlewares vão ser chamados
    this.middlewares();
    // as rotas vão ser chamadas
    this.routes();
  }

  middlewares() {
    /*
      A opção "extended" diz para o express qual biblioteca
      ele deve utilizar para fazer o parsing do conteúdo das
      requisições que ele recebe.
      Quando extended : true vai utilizar a biblioteca qs
      e quando for false ele vai utilizar a biblioteca querystring.
      A diferença entre elas é que a biblioteca qs permite
      o aninhamento de objetos (nested objects),
      que é praticamente como o JSON trabalha:
    */
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    // O app precisa usar a homeRoute. obs: home= '/'
    this.app.use('/', homeRoutes);
    // O app precisa usar a userRoute.
    this.app.use('/users/', userRoutes);
    // O app precisa usar a tokenRoute.
    this.app.use('/tokens/', tokenRoutes);
    // o app precisa usar a alunoRoute
    this.app.use('/alunos/', alunoRoutes);
    // o app precisa usar a fotoRoute
    this.app.use('/fotos/', fotoRoutes);
  }
}

// Exportando a classe já instanciada(atributo app(express)):
export default new App().app;
