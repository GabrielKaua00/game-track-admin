const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes');
const { connectDB } = require('./utils/db');
require('dotenv').config();

// Conectar ao banco de dados
connectDB();

// Configurações do Express
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Configurar rotas
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
