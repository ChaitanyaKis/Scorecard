import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
// or for Realtime DB: import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD3VbZzQNZ8-TAmxJwTbL9t7AXO4PxUgNw",
  authDomain: "artsdaylivescore-a5fcc.firebaseapp.com",
  projectId: "artsdaylivescore-a5fcc",
  databaseURL: "https://artsdaylivescore-a5fcc-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "artsdaylivescore-a5fcc.firebasestorage.app",
  messagingSenderId: "42128168762",
  appId: "1:42128168762:web:4c5d14878791705ad0e203"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // or getDatabase(app) for Realtime DB

// Example Firestore write
async function writeData() {
  await setDoc(doc(db, "users", "user1"), {
    name: "Kishore",
    age: 20
  });
}

writeData();
