import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAWfxNTySfJfSfDvtLfMDmD1KVgzvuedik",
  authDomain: "tiendacursoreact-db.firebaseapp.com",
  projectId: "tiendacursoreact-db",
  storageBucket: "tiendacursoreact-db.firebasestorage.app",
  messagingSenderId: "270846412793",
  appId: "1:270846412793:web:d29f2917f9601d8a965f28"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);