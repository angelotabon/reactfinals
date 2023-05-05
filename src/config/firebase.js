// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvMZdAcd3m4yGUNUo7faHJ2kmKxGQerTk",
  authDomain: "reactfinals-51830.firebaseapp.com",
  projectId: "reactfinals-51830",
  storageBucket: "reactfinals-51830.appspot.com",
  messagingSenderId: "376818220451",
  appId: "1:376818220451:web:8f8f268e089d2eb00fae16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase()
export const auth = getAuth()