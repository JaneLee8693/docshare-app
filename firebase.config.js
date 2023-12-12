// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "file-sharing-platform-2023.firebaseapp.com",
  projectId: "file-sharing-platform-2023",
  storageBucket: "file-sharing-platform-2023.appspot.com",
  messagingSenderId: "732412596099",
  appId: "1:732412596099:web:0fc889dc281c7edec930b6",
  measurementId: "G-V4THMPBKR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
