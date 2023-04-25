// EXPLICAÇÃO SOBRE TOKENS EM LOGINREQUIRED.JS!!!!!!!!!

// CADA MÉTODO TEM QUE TER UMA ROTA!!
// Temos que importar o router do Express.
import { Router } from 'express';

// Temos que importar o Controller de Token
// tem que ser minúsculo pq ja estamos exportando ela
// como a classe já instanciada. Se colocássemos maiúscula
// receberíamos a classe e não o objeto.
import tokenController from '../controllers/TokenController';

// O express.Router nos ajuda a manipular nossas rotas em aplicativos NodeJS
const router = new Router();

// rota POST pro método store em Controller.
router.post('/', tokenController.store);

// Temos que exportar o router.
export default router;

/*
MÉTODOS COMUNS EM CONTROLLERS!
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH OU PUT
*/
