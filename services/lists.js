import { pool } from "./db_connect.js";

export async function createList(nome, descricao){
  const query = ('INSERT INTO lista (nome, descricao) VALUES ($1, $2) RETURNING *');
  const values = [nome, descricao];

  try {
    const res = await pool.query(query, values)
    console.log('Lista inserida:', res.rows[0]);
  }
  catch (err){
    console.error('Erro ao inserir', err.stack);
  }
}
