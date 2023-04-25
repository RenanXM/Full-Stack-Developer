// CADA MÉTODO TEM QUE TER UMA ROTA!!
// Temos que importar o router do Express.
import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

// Temos que importar o Controller da Foto
// tem que ser minúsculo pq ja estamos exportando ela
// como a classe já instanciada. Se colocássemos maiúscula
// receberíamos a classe e não o objeto.
import fotoController from '../controllers/FotoController';

// O express.Router nos ajuda a manipular nossas rotas em aplicativos NodeJS
const router = new Router();

// método store do FotoController.
router.post('/', loginRequired, fotoController.store);

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
