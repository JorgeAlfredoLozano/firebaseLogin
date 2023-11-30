// ################################

// firebase => firebase.config.
// usuario y contraseña para conectarme a firebase.

// ################################

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDSP-uPfjsK1HyyIZu7bggsRRowAdtaUpg',
    authDomain: "eventwave-ar.firebaseapp.com",
    projectId: "eventwave-ar",
    storageBucket: "eventwave-ar.appspot.com",
    messagingSenderId: "757346690931",
    appId: "1:757346690931:web:caecc58aa042b491b94706",
    measurementId: "G-2QKZHDXHJC"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);