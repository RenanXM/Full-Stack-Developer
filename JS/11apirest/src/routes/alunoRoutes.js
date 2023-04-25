// CADA MÉTODO TEM QUE TER UMA ROTA!!
// Temos que importar o router do Express.
import { Router } from 'express';

// Temos que importar o Controller de Aluno
// tem que ser minúsculo pq ja estamos exportando ela
// como a classe já instanciada. Se colocássemos maiúscula
// receberíamos a classe e não o objeto.
import alunoController from '../controllers/AlunoController';

// EXISTEM COISAS QUE SÓ PODEM SER EXECUTADAS POR QUEM ESTÁ LOGADO!
import loginRequired from '../middlewares/loginRequired';
// O express.Router nos ajuda a manipular nossas rotas em aplicativos NodeJS
const router = new Router();

router.get('/', alunoController.index);
router.post('/', loginRequired, alunoController.store);
router.put('/:id', loginRequired, alunoController.update);
router.get('/:id', alunoController.show);
router.delete('/:id', loginRequired, alunoController.delete);

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
