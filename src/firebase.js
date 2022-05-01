// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, onAuthStateChange, signInWithEmailAndPassword} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv8uLElovZ5Bd3QTz25O400H0-L-0CQxg",
  authDomain: "pocket-doctor-auth.firebaseapp.com",
  projectId: "pocket-doctor-auth",
  storageBucket: "pocket-doctor-auth.appspot.com",
  messagingSenderId: "475308341718",
  appId: "1:475308341718:web:917541a1b68f0985108c77"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function login(email, password)
{
    return signInWithEmailAndPassword(auth, email, password)
}
