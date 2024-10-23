import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA0W6a3I7rnqhCyiCERHPgZMMY-oPI7gyI",
  authDomain: "fir-6b42b.firebaseapp.com",
  projectId: "fir-6b42b",
  storageBucket: "fir-6b42b.appspot.com",
  messagingSenderId: "218372604312",
  appId: "1:218372604312:web:afa65881285b0e7e622bed",
  measurementId: "G-KX8ZXJPGL4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
