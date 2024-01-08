// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBqvkIC6MpzRpoHQZGRptOl_HdogSptF2I",
  authDomain: "react-18bbc.firebaseapp.com",
  projectId: "react-18bbc",
  storageBucket: "react-18bbc.appspot.com",
  messagingSenderId: "920871890907",
  appId: "1:920871890907:web:59402b1593e0472a5781fe",
  measurementId: "G-W2V9LF44ML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
const analytics = getAnalytics(app);
