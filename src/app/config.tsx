// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDIqCwxq-j8iTPC1hW9vF1r1D-0qtRIKUw",
    authDomain: "nextjs-ecommerce-project-4c462.firebaseapp.com",
    projectId: "nextjs-ecommerce-project-4c462",
    storageBucket: "nextjs-ecommerce-project-4c462.appspot.com",
    messagingSenderId: "1058253077890",
    appId: "1:1058253077890:web:0ca4e6ede38927574c639b",
    measurementId: "G-NRZYS1PVVL"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {storage}


