import { Router } from 'express';
import usuarioController from '../controllers/usuarioController'

const router = new Router();

router.post('/', usuarioController.store);
router.get('/', usuarioController.index);
router.put('/:id', usuarioController.update);



export default router;