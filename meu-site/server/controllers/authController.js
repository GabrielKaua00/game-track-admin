const User = require('../models/User');
const { generateToken } = require('../utils/generateToken');

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        
        if (!user || !user.comparePassword(password)) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        const token = generateToken(user._id);
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Erro no servidor' });
    }
};

exports.register = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();

        const token = generateToken(newUser._id);
        res.status(201).json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Erro no servidor' });
    }
};
