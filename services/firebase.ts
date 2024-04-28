// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8Zo74sRMPAAHqiHJezCRsNARPUJOiLD0",
  authDomain: "cashsnap-be821.firebaseapp.com",
  projectId: "cashsnap-be821",
  storageBucket: "cashsnap-be821.appspot.com",
  messagingSenderId: "823160480800",
  appId: "1:823160480800:web:8bbac92d491116f9c80845",
  measurementId: "G-M09V2X0C5S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);

// ios: 175776642411-7tv0sq7o9095tmfippc29pspbau2kk0p.apps.googleusercontent.com
// android: 175776642411-livp1q7i68dd7qb7glekthlg0vdsj91e.apps.googleusercontent.com