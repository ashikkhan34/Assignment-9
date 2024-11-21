// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3eoMBLG_kmev8Z7dHR90ibTJD-WMhrHg",
  authDomain: "coupon-c1090.firebaseapp.com",
  projectId: "coupon-c1090",
  storageBucket: "coupon-c1090.firebasestorage.app",
  messagingSenderId: "114547130815",
  appId: "1:114547130815:web:a0db860c52277c8b06a10a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;