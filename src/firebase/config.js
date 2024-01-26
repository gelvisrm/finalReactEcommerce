// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDXi0ZNEbitu7vTNPioxeKXAxNnCUbX7yY",
  authDomain: "tecnoshop-f1d2c.firebaseapp.com",
  projectId: "tecnoshop-f1d2c",
  storageBucket: "tecnoshop-f1d2c.appspot.com",
  messagingSenderId: "837623356628",
  appId: "1:837623356628:web:09d83da63593269c2eaf41",
  measurementId: "G-253SG5RXL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);