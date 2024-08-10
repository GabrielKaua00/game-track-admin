const express = require('express');
const router = express.Router();
const path = require('path');
const userRoutes = require('./routes/userRoutes');

// Definir rotas
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

// Incluir rotas de usuário
router.use('/api/users', userRoutes);

// Outras rotas...

module.exports = router;
