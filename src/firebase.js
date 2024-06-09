// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzJ3RgXXC2kwS1C_-YgWVvJ0zxAYgqNlc",
  authDomain: "react-chat-app-9618f.firebaseapp.com",
  projectId: "react-chat-app-9618f",
  storageBucket: "react-chat-app-9618f.appspot.com",
  messagingSenderId: "852578092321",
  appId: "1:852578092321:web:70748170c50a1571ae2a60",
  measurementId: "G-E07P98T8BN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
