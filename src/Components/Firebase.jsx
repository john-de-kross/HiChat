import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'




const firebaseConfig = {
    apiKey: "AIzaSyCJcXlSrIY1tc2bK5owbKhLCIOPJuVP2fo",
    authDomain: "chat-app-554b4.firebaseapp.com",
    projectId: "chat-app-554b4",
    storageBucket: "chat-app-554b4.firebasestorage.app",
    messagingSenderId: "523060059771",
    appId: "1:523060059771:web:186402967289793511ccde",
    measurementId: "G-5TLSZNX1VW"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth}