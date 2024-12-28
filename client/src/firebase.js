// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-d7cb6.firebaseapp.com",
  projectId: "real-estate-d7cb6",
  storageBucket: "real-estate-d7cb6.firebasestorage.app",
  messagingSenderId: "435403096103",
  appId: "1:435403096103:web:d606b0e04a09f42c04ce02",
  measurementId: "G-ZRWH6G8CT7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);