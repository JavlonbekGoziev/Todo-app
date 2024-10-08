
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let todos = [];

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    const newTodo = { id: Date.now(), task: req.body.task };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.delete('/todos/:id', (req, res) => {
    todos = todos.filter(todo => todo.id !== Number(req.params.id));
    res.sendStatus(204);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
