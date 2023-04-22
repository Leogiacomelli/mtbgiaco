import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrYtvUyj72jMvQtslkdbo6Kl2bUIYQ8Tg",
  authDomain: "coderhouse-ecommerce-2bf35.firebaseapp.com",
  projectId: "coderhouse-ecommerce-2bf35",
  storageBucket: "coderhouse-ecommerce-2bf35.appspot.com",
  messagingSenderId: "988486373691",
  appId: "1:988486373691:web:7a5da03a3526eabb51a71e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
