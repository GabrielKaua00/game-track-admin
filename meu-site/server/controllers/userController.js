const User = require('../models/User');

exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (err) {
        res.status(500).send('Erro ao buscar perfil');
    }
};

exports.updateUserProfile = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id, req.body);
        res.send('Perfil atualizado');
    } catch (err) {
        res.status(500).send('Erro ao atualizar perfil');
    }
};
