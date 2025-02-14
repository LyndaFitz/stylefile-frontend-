// firebase-config.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AlzaSyBs3hs4Zlm9LixW00a1Qtv-IVOORc1erdk",
  authDomain: "stylefile-14572.firebaseapp.com",
  projectId: "stylefile-14572",
  storageBucket: "stylefile-14572.appspot.com",
  messagingSenderId: "127255649340",
  appId: "1:127255649340:web:251cdbff1238d233d2b8b0",
  measurementId: "G-B7E6NDYXGG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
