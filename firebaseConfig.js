import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBOoaFo9lXAGtRi_1-CLkCUpY7D20fS-UI",
    authDomain: "testexpo-fc79e.firebaseapp.com",
    projectId: "testexpo-fc79e",
    storageBucket: "testexpo-fc79e.appspot.com",
    messagingSenderId: "417251379200",
    appId: "1:417251379200:web:9dd1be080451c6af5a70e5",
    measurementId: "G-NKDMLLH7KL"
};

const app = initializeApp(firebaseConfig);
// Inicializa Firestore con la instancia de la app Firebase
const db = getFirestore(app);

// Exporta la configuración para usarla en otras partes de tu aplicación
export { db };