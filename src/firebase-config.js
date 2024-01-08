// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "e-learning-8a47e.firebaseapp.com",
  projectId: "e-learning-8a47e",
  storageBucket: "e-learning-8a47e.appspot.com",
  messagingSenderId: "701851653047",
  appId: "1:701851653047:web:0e4815afaba01649368e32",
  measurementId: "G-L02EJ0T0KK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
const analytics = getAnalytics(app);
