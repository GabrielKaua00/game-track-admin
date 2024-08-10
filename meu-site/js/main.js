document.getElementById('generate-pix-button').addEventListener('click', async () => {
    const pixKey = 'SUA_CHAVE_PIX';  // Substitua pela chave PIX real
    const amount = parseFloat(document.getElementById('amount-input').value);


    
    try {
        const response = await fetch('/generate-pix-qr-code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ pixKey, amount })
        });
        const data = await response.json();
        document.getElementById('pix-qr-code').src = data.qrCodeUrl;
    } catch (error) {
        console.error('Erro ao gerar QR Code PIX:', error);
    }
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeclMUZ0mDPsgeaDfan-KjWDgJBevZh0Q",
  authDomain: "game-track-admin.firebaseapp.com",
  projectId: "game-track-admin",
  storageBucket: "game-track-admin.appspot.com",
  messagingSenderId: "582764085409",
  appId: "1:582764085409:web:f17f28c0a21824c4b530e0",
  measurementId: "G-PX366LN306"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);