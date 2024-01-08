// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBfmB1JqxIFDP69HNjuUoOW8pTF5wZmPcU",
	authDomain: "e-learning-16a19.firebaseapp.com",
	projectId: "e-learning-16a19",
	storageBucket: "e-learning-16a19.appspot.com",
	messagingSenderId: "132422913628",
	appId: "1:132422913628:web:4a3e41c50ee8420560a099",
	measurementId: "G-FP37D960GS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
const analytics = getAnalytics(app);
