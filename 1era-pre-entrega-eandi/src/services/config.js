
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "tiendacelus-2bed0.firebaseapp.com",
  projectId: "tiendacelus-2bed0",
  storageBucket: "tiendacelus-2bed0.appspot.com",
  messagingSenderId: "172810584463",
  appId: "1:172810584463:web:28e0beb6b792e01d428bfa"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);