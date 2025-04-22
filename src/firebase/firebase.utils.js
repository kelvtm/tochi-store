// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC9dcyAFamWERLr31U6OOd4XKtPuJ6spY",
  authDomain: "too-crown.firebaseapp.com",
  projectId: "too-crown",
  storageBucket: "too-crown.firebasestorage.app",
  messagingSenderId: "166171611775",
  appId: "1:166171611775:web:9d2c251413c9fc8f8aa54a",
  measurementId: "G-LZHPLN95MX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const googleAuthProvider = new GoogleAuthProvider();

export { auth, googleAuthProvider, db };
