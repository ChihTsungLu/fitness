import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { redirect, useNavigate  } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyCog1BFZmvc29Op-MPjyK8VYTguNm1KYOU",
  authDomain: "fitness-32521.firebaseapp.com",
  projectId: "fitness-32521",
  storageBucket: "fitness-32521.appspot.com",
  messagingSenderId: "560629369928",
  appId: "1:560629369928:web:e2f5f51e587dc2d65d5c7d",
  measurementId: "G-EL96KKV2WW"
};

// init firebase app

const app = initializeApp(firebaseConfig)

// init services

export const db = getFirestore(app)
export const auth = getAuth(app);



