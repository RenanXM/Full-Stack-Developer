// Temos que importar o router do Express.
import { Router } from 'express';

// Temos que importar o Controller do User
// tem que ser minúsculo pq ja estamos exportando ela
// como a classe já instanciada. Se colocássemos maiúscula
// receberíamos a classe e não o objeto.
import userController from '../controllers/UserController';

// importando middleware loginRequired pra dizer no meio dos router.get, router.put, etc
// que precisa fazer login pra executar isso. !!!!!!!!!!!!!!!!!!!!!!!
import loginRequired from '../middlewares/loginRequired';

// O express.Router nos ajuda a manipular nossas rotas em aplicativos NodeJS
const router = new Router();

// Fazendo uma rota GET e chamando o método index do UserController.
router.get('/', userController.index); // Não deveria existir.!!                (deixei pra mim!)

// Fazendo uma rota SHOW e chamando o método show do UserController.
// A diferença dela é que recebe um parâmetro id pq (precisei) usar isso
// no método show do Controller.
router.get('/:id', userController.show); // Não deveria existir.!!              (deixei pra mim)

// Fazendo uma rota POST e chamando o método create do UserController.
router.post('/', userController.store);

// Fazendo uma rota PUT e chamando o método update do UserController.
router.put('/', loginRequired, userController.update);

// Fazendo uma rota DELETE e chamando o método delete do UserController.
router.delete('/', loginRequired, userController.delete);

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
