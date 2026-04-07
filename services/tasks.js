import { pool } from "./db_connect.js";

export async function createTask(nome, descricao, listaID) {
  const query = ('INSERT INTO tarefas (nome, descricao, lista_id) VALUES ($1, $2, $3) RETURNING *');
  const values = [nome, descricao, listaID];

  try {
    const res = await pool.query(query, values)
    console.log('Lista inserida:', res.rows[0]);
  }
  catch (err) {
    console.error('Erro ao inserir', err.stack);
  }
}

export async function deleteTask(id) {
  const query = ('DELETE FROM tarefas WHERE id = $1');
  const values = [id];

  try {
    const res = await pool.query(query, values)
    console.log('Lista deletada:', res.rows[0]);
  }
  catch (err) {
    console.error('Erro ao deletar', err.stack);
  }
}

export async function updateTask(nome, descricao, concluida , id) {
  const query = ('UPDATE tarefas SET nome = $1, descricao = $2, concluida = $3 WHERE id = $4 RETURNING *');
  const values = [nome, descricao, concluida, id];

  try {
    const res = await pool.query(query, values)
    console.log('Lista atualizada:', res.rows[0]);
  }
  catch (err) {
    console.error('Erro ao atualizar', err.stack);
  }
}

export async function getTask(listaID) {
  const query = ('SELECT t1.nome AS lista, t2.nome AS tarefa,t2.descricao AS descricao_tarefa, t2.concluida FROM lista AS t1 JOIN tarefas AS t2 ON t1.id = t2.lista_id WHERE t1.id = $1;');
  const values = [listaID]
  try {
    const res = await pool.query(query, values)
    console.log('Tarefas do banco: ', res.rows)
  }
  catch(err) {
    console.log('Erro ao pegar tarefas', err.stack)
  }
}
