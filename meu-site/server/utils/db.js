const mongoose = require('mongoose');

exports.connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,  // Adicionado para garantir que índices são criados corretamente
        });
        console.log('Conectado ao banco de dados MongoDB');
    } catch (err) {
        console.error('Erro ao conectar ao MongoDB', err);
        process.exit(1);  // Encerrar o processo em caso de falha na conexão
    }
};
