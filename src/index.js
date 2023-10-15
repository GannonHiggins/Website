// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9higb05uryEh-OIasfjbyO6ONdZ6qXrA",
  authDomain: "portfolio-f6edf.firebaseapp.com",
  projectId: "portfolio-f6edf",
  storageBucket: "portfolio-f6edf.appspot.com",
  messagingSenderId: "977755067551",
  appId: "1:977755067551:web:01cf88016ca689da8dfeaa",
  measurementId: "G-J1DYMQ3Y1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);