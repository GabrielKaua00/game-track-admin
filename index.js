// Importar o módulo do Firebase Admin SDK
const admin = require('firebase-admin');

// Inicializar o Firebase com as credenciais do projeto
// Substitua o caminho pelo local do seu arquivo de chave de serviço
const serviceAccount = require('./path/to/serviceAccountKey.json');

// Configurar a aplicação Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://<YOUR_PROJECT_ID>.firebaseio.com"  // Substitua <YOUR_PROJECT_ID> pelo ID do seu projeto
});

// Acessar o Firestore
const db = admin.firestore();

// Função para adicionar um documento ao Firestore
async function addDocument() {
  try {
    const docRef = db.collection('users').doc('user_id_123');
    await docRef.set({
      firstName: 'John',
      lastName: 'Doe'
    });
    console.log('Documento adicionado com sucesso!');
  } catch (error) {
    console.error('Erro ao adicionar documento: ', error);
  }
}

// Chamar a função
addDocument();
