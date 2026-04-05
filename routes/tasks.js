import { Router } from 'express';
import {createTaskController, updateTaskController, deleteTaskController, getTaskController} from '../controllers/tasks.js'
const router = Router();

router.get('/lista/:lista_id/tarefa', getTaskController);
router.post('/lista/:lista_id/tarefa', createTaskController);
router.put('/lista/:lista_id/tarefa/:id', updateTaskController);
router.delete('/lista/:lista_id/tarefa/:id', deleteTaskController);

export default router
