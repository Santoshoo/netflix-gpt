// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHwPS3TJ14Owy2SXocXXW4UTN1UJX0rCE",
  authDomain: "netflixgpt-57935.firebaseapp.com",
  projectId: "netflixgpt-57935",
  storageBucket: "netflixgpt-57935.firebasestorage.app",
  messagingSenderId: "808106958567",
  appId: "1:808106958567:web:666537e57b04b5efdfcc42",
  measurementId: "G-VQLHYXMHYD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
