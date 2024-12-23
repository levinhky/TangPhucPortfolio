// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBubnbyvRR9g6yd2NmFFkzacjDvbZ4FHAI",
  authDomain: "tang-phuc.firebaseapp.com",
  projectId: "tang-phuc",
  storageBucket: "tang-phuc.firebasestorage.app",
  messagingSenderId: "734616904576",
  appId: "1:734616904576:web:fed51987583937a3b25765",
  measurementId: "G-2P5R1TVWT8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;
if (app.name && typeof window !== "undefined") {
  analytics = getAnalytics(app);
}
