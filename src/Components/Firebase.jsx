import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { Database } from "firebase/database";




const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "chat-app-554b4.firebaseapp.com",
    databaseUrl: 'https://chat-app-554b4-default-rtdb.firebaseio.com/',
    projectId: "chat-app-554b4",
    storageBucket: "chat-app-554b4.firebasestorage.app",
    messagingSenderId: "523060059771",
    appId: "1:523060059771:web:186402967289793511ccde",
    measurementId: "G-5TLSZNX1VW"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
console.log(firebaseConfig.apiKey)
export {auth}