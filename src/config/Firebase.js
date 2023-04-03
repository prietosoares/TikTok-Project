import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyBRxX8lROCGeYo81cM6XfJZcWAn_O1hf1M",
  authDomain: "tiktok---jornada-db5b8.firebaseapp.com",
  projectId: "tiktok---jornada-db5b8",
  storageBucket: "tiktok---jornada-db5b8.appspot.com",
  messagingSenderId: "385065569078",
  appId: "1:385065569078:web:ca226471143bed21698197"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export default db;