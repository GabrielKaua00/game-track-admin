const User = require('../models/User');

exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Erro no servidor' });
    }
};

exports.updateUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        user.username = req.body.username || user.username;

        if (req.body.password) {
            user.password = req.body.password;
        }

        await user.save();
        res.json({ message: 'Perfil atualizado com sucesso' });
    } catch (err) {
        res.status(500).json({ message: 'Erro no servidor' });
    }
};
