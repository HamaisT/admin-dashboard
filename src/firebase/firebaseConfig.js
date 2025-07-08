// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAm-hG_Gx1DJOB_4C0_YYuk1T-H1K5a6KE",
  authDomain: "admin-dashboard-a7ec0.firebaseapp.com",
  projectId: "admin-dashboard-a7ec0",
  storageBucket: "admin-dashboard-a7ec0.firebasestorage.app",
  messagingSenderId: "130821949571",
  appId: "1:130821949571:web:bf647088d17efd8e5b33b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);