const express = require('express');
const logger = require('./middlewares/logger');

const app = express();
const PORT = 3000;

app.use(logger);

app.get('/', (req, res) => {
    res.send('Bem-vindo à API!');
});

app.get('/items', (req, res) => {
    res.send('Lista de itens');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});