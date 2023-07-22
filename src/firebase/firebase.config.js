// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGbkElvHTp74t7pW3WcdFPFLeped5hn74",
    authDomain: "the-food-house-aaaf9.firebaseapp.com",
    projectId: "the-food-house-aaaf9",
    storageBucket: "the-food-house-aaaf9.appspot.com",
    messagingSenderId: "122867508085",
    appId: "1:122867508085:web:3596d58fbc0a41965e293c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;