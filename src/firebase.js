import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAYu0_CIriIi_O4lYW2YVqxunTgG7vPGjw",
    authDomain: "coders-valley.firebaseapp.com",
    projectId: "coders-valley",
    storageBucket: "coders-valley.appspot.com",
    messagingSenderId: "758516091909",
    appId: "1:758516091909:web:d2c97538beb5289c7ee06c",
    measurementId: "G-SX1P483QPT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { app, auth, db, provider };
