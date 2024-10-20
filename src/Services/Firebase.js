import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBocPyEjhpHQ_MTR7D7FOEUItbVaROh_00",
  authDomain: "portfolio-21437.firebaseapp.com",
  projectId: "portfolio-21437",
  storageBucket: "portfolio-21437.appspot.com",
  messagingSenderId: "140104531460",
  appId: "1:140104531460:web:641c7a6c7bc1bfb9903f51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
