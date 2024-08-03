// src/firebaseConfig.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX7KXGxl2c-UGMawk6TvEfj8LYoT6dt8c",
  authDomain: "portafolio-38264.firebaseapp.com",
  projectId: "portafolio-38264",
  storageBucket: "portafolio-38264.appspot.com",
  messagingSenderId: "506558478227",
  appId: "1:506558478227:web:0c25d50f551438b0665a66",
  measurementId: "G-8J1DR2F5QF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore and Auth
const db = getFirestore(app);

const auth = getAuth(app);

export { app, db, auth };
