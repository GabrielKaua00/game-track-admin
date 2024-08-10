const { MongoClient } = require('mongodb');

// Substitua pela sua string de conexão
const uri = 'mongodb+srv://gabrielkauaresende2021:xA9qoITLv1F4deXm@cluster0.oi6gv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        console.log('Conectado ao MongoDB com sucesso!');
        // Você pode adicionar código aqui para interagir com o banco de dados
    } catch (err) {
        console.error('Erro ao conectar ao MongoDB:', err);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
