import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDvoD6z7Rhgt891UnVj2TDgDbaUhwIVFRA",
  authDomain: "netflix-clone-b870f.firebaseapp.com",
  projectId: "netflix-clone-b870f",
  storageBucket: "netflix-clone-b870f.appspot.com",
  messagingSenderId: "83533593617",
  appId: "1:83533593617:web:478da2feb6073eccea85b0",
  measurementId: "G-CWE12NBNZE",
};

firebase.initializeApp(firebaseConfig)
const storage = firebase.storage();
export default storage;