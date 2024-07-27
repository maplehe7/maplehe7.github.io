// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEW3s_S7DvnHRYgeFsYaJZDPROElaqoZE",
  authDomain: "login-3ca39.firebaseapp.com",
  projectId: "login-3ca39",
  storageBucket: "login-3ca39.appspot.com",
  messagingSenderId: "1070814002897",
  appId: "1:1070814002897:web:d34cacd433fd4def288ff0",
  measurementId: "G-8X8JBK0VFS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);