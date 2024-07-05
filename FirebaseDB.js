import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDU4zz__uD6PLhnRaPn5xofdrO6yT5Vah0",
  authDomain: "advwebdev-dbf13.firebaseapp.com",
  projectId: "advwebdev-dbf13",
  storageBucket: "advwebdev-dbf13.appspot.com",
  messagingSenderId: "625348954341",
  appId: "1:625348954341:web:d3c1bbff4d7906d772ec0c",
  measurementId: "G-Q6VPJ2J1TX"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
