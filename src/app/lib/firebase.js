// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAB-PDEYwZwepcWXCnRSu6VgrE0AFuGiig",
  authDomain: "blog-app-e6ae8.firebaseapp.com",
  projectId: "blog-app-e6ae8",
  storageBucket: "blog-app-e6ae8.firebasestorage.app",
  messagingSenderId: "534483227245",
  appId: "1:534483227245:web:1e29912406483c0a04a564"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();