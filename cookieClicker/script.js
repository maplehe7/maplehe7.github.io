  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
  import {getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
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
const auth = getAuth()
var login_button = document.getElementById("button")
login_button.addEventListener("click", login);

async function login(){
  var email = document.getElementById("user")
  var password = document.getElementById("password")
  signInWithEmailAndPassword(auth, email.value, password.value).then((userCredential)=>{
    const user = userCredential.user;
    sessionStorage.setItem("email",user.email)
    window.location.href= "./lol.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode,errorMessage)
  });
}