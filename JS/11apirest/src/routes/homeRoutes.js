// CADA MÉTODO TEM QUE TER UMA ROTA!!
// Temos que importar o router do Express.
import { Router } from 'express';

// Temos que importar o Controller da Home
// tem que ser minúsculo pq ja estamos exportando ela
// como a classe já instanciada. Se colocássemos maiúscula
// receberíamos a classe e não o objeto.
import homeController from '../controllers/HomeController';

// O express.Router nos ajuda a manipular nossas rotas em aplicativos NodeJS
const router = new Router();

// Fazendo a rota GET Home('/') e chamando o método index do HomeController.
router.get('/', homeController.index);

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
