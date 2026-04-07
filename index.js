import listsRouter from './routes/lists.js';
import tasksRouter from './routes/tasks.js';
import express from 'express';

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(listsRouter);
app.use(tasksRouter);

app.listen(3000, () => console.log('servidor rodando'))
