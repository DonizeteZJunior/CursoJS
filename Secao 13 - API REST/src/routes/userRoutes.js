import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router;

// Falhas de segurança
// router.get('/', userController.index);  // Lista usuários
// router.get('/:id', userController.show); // Lista usuário

// router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index -> lista todos os usuários -> get
store/create -> cria um novo usuário -> post
delete -> apaga um usuário -> delete
show -> mostra um usuário -> get
update - atualiza um usuário - patch ou put
*/