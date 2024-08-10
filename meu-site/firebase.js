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
  databaseURL: "https://game-track-admin-default-rtdb.firebaseio.com",
  projectId: "game-track-admin",
  storageBucket: "game-track-admin.appspot.com",
  messagingSenderId: "582764085409",
  appId: "1:582764085409:web:f17f28c0a21824c4b530e0",
  measurementId: "G-PX366LN306"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);