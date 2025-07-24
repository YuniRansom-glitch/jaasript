// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // ✅ Import auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdiKALh8u-YXUXXbJRqAK7RvGJ4C5Mc0o",
  authDomain: "authentication-650a7.firebaseapp.com",
  projectId: "authentication-650a7",
  storageBucket: "authentication-650a7.firebasestorage.app",
  messagingSenderId: "746961539580",
  appId: "1:746961539580:web:c811b8ed72d76ef49e2279",
  measurementId: "G-2B7XBC41JV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// ✅ Export Auth instance
export const auth = getAuth(app);
