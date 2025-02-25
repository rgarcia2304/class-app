// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAA3MnpWRyYged04j5q7vzBa5DCWoBFq8",
  authDomain: "perreno.firebaseapp.com",
  projectId: "perreno",
  storageBucket: "perreno.firebasestorage.app",
  messagingSenderId: "967851966720",
  appId: "1:967851966720:web:3c0ece1af8dc40dd0d73e5",
  measurementId: "G-M7P5PNCRKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);