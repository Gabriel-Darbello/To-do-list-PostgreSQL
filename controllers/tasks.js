import { createTask, updateTask, deleteTask, getTask } from '../services/tasks.js';

export async function createTaskController(req, res) {
    const { nome, descricao, lista_id } = req.body;
    const lista = await createTask(nome, descricao, lista_id);
    res.json(lista);
}

export async function updateTaskController(req, res) {
    const { nome, descricao, concluida} = req.body;
    const { id } = req.params;
    const lista = await updateTask(nome, descricao, concluida, id);
    res.json(lista);
}

export async function deleteTaskController(req, res) {
    const { id } = req.params;
    const lista = await deleteTask(id);
    res.json(lista);
}

export async function getTaskController(req, res) {
    const { lista_id } = req.params;
    const lista = await getTask(lista_id);
    res.json(lista);
}

