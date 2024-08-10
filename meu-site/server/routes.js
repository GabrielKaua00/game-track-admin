const express = require('express');
const router = express.Router();
const authRoutes = require('./routes/authRoutes');
const gameRoutes = require('./routes/gameRoutes');
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');

router.use('/auth', authRoutes);
router.use('/games', gameRoutes);
router.use('/admin', adminRoutes);
router.use('/users', userRoutes);

module.exports = router;
