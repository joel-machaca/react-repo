import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzIFjx-RyOjVzBffjCMf1USN6ELIAw9u8",
  authDomain: "entrega-curso1.firebaseapp.com",
  projectId: "entrega-curso1",
  storageBucket: "entrega-curso1.firebasestorage.app",
  messagingSenderId: "32705424106",
  appId: "1:32705424106:web:6a8224099299ee92658593"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(<App />
)
