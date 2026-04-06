CREATE TABLE lista (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  descricao TEXT
);

CREATE TABLE tarefas (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  descricao TEXT,
  concluida BOOLEAN NOT NULL DEFAULT false,
  lista_id INTEGER NOT NULL REFERENCES lista(id) ON DELETE CASCADE
);
