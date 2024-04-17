// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import loadConfig from "../utils/Config";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: loadConfig("API_KEY"),
  authDomain: loadConfig("AUTH_DOMAIN"),
  projectId: loadConfig("PROJECT_ID"),
  storageBucket: loadConfig("STORAGE_BUCKET"),
  messagingSenderId: loadConfig("MESSAGING_SENDER_ID"),
  appId: loadConfig("APP_ID"),
  measurementId: loadConfig("MEASUREMENT_ID"),
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { firebaseApp, auth, db };
