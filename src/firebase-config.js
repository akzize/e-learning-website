// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZtibUK7i-56WB4cno2IUby9Aa_qkDCBc",
  authDomain: "react-firebase-8425c.firebaseapp.com",
  projectId: "react-firebase-8425c",
  storageBucket: "react-firebase-8425c.appspot.com",
  messagingSenderId: "276659710117",
  appId: "1:276659710117:web:d7b0167fde1cf251f3454c",
  measurementId: "G-C8PD6V00XE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
const analytics = getAnalytics(app);