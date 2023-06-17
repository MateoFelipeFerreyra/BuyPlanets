import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
    authDomain: "buy-planets.firebaseapp.com",
    projectId: "buy-planets",
    storageBucket: "buy-planets.appspot.com",
    messagingSenderId: "57630573326",
    appId: "1:57630573326:web:69d5f52bede445e5420d5f"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);