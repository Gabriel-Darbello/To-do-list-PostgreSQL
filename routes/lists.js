import { Router } from 'express';
import {createListController, updateListController, deleteListController, getListController} from '../controllers/lists.js'
const router = Router();

router.get('/lista', getListController);
router.post('/lista', createListController);
router.put('/lista/:id', updateListController);
router.delete('/lista/:id', deleteListController);

export default router
