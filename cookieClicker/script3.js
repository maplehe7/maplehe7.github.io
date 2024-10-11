// For each variable, select the HTML element needed
// import firebase from "firebase/compat/app";
// import "firebase/firestore";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore,addDoc, collection, setDoc, doc, getDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
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


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

var Scoreboard = document.getElementById("container")
async function getScoreboard(){
  Scoreboard.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "scores"));
  var sortedScores = [];
querySnapshot.forEach((item) => {
  // doc.data() is never undefined for query doc snapshots
  sortedScores.push({name: item.id, score: item.data()["score"]})
});
  // console.log(sortedScores);
  sortedScores.sort((a,b) => b.score - a.score);

  for(let i = 0; i < sortedScores.length; i++){
    if(i==sortedScores.length-1){
      Scoreboard.innerHTML += `<div class="row5">
            <div class="name">${sortedScores[i].name.split("@")[0]}</div><div class="score">${sortedScores[i].score}</div>
        </div>`
    }
    else if (i>= 4){
      Scoreboard.innerHTML += `<div class="row4">
            <div class="name">${sortedScores[i].name.split("@")[0]}</div><div class="score">${sortedScores[i].score}</div>
        </div>`
    }
    else{
  Scoreboard.innerHTML += `<div class="row${i+1}">
            <div class="name">${sortedScores[i].name.split("@")[0]}</div><div class="score">${sortedScores[i].score}</div>
        </div>`
  }
}
        // console.log(sortedScores)
 
  

}

await getScoreboard()