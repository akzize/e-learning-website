// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCDGcdJBxcSq8k1CdE3X-Ms3Mmep3e_E68",
  authDomain: "elearning-2e9bb.firebaseapp.com",
  projectId: "elearning-2e9bb",
  storageBucket: "elearning-2e9bb.appspot.com",
  messagingSenderId: "864640699251",
  appId: "1:864640699251:web:274f47e53517653f2e9306",
  measurementId: "G-ZW51LZ5BDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
const analytics = getAnalytics(app);
