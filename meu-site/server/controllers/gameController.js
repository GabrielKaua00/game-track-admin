const Game = require('../models/Game');

exports.getAllGames = async (req, res) => {
    try {
        const games = await Game.find();
        res.json(games);
    } catch (err) {
        res.status(500).send('Erro ao buscar jogos');
    }
};

exports.createGame = async (req, res) => {
    const { name, date } = req.body;

    try {
        const newGame = new Game({ name, date });
        await newGame.save();
        res.status(201).send('Jogo criado com sucesso');
    } catch (err) {
        res.status(500).send('Erro ao criar jogo');
    }
};
