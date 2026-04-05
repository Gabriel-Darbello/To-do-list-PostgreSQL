import { createList, updateList, deleteList, getList } from '../services/lists.js';

export async function createListController(req, res) {
    const { nome, descricao } = req.body;
    const lista = await createList(nome, descricao);
    res.json(lista);
}

export async function updateListController(req, res) {
    const { nome, descricao } = req.body;
    const { id } = req.params;
    const lista = await updateList(nome, descricao, id);
    res.json(lista);
}

export async function deleteListController(req, res) {
    const { id } = req.params;
    const lista = await deleteList(id);
    res.json(lista);
}

export async function getListController(req, res) {
    const lista = await getList();
    res.json(lista);
}

