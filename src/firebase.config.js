import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD_xRoar4Gm-yZr5nmeMNQjY38922yn2l4",
  authDomain: "morethanwood-25804.firebaseapp.com",
  projectId: "morethanwood-25804",
  storageBucket: "morethanwood-25804.appspot.com",
  messagingSenderId: "454417252692",
  appId: "1:454417252692:web:cd373ddbde6fe7f3ec48c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
 
export default app;
