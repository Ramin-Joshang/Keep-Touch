import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyAxbAhRVE3fm5aOX1F7omZ6m-KdhSAKTmY",
  authDomain: "keep-touch-99ef7.firebaseapp.com",
  projectId: "keep-touch-99ef7",
  storageBucket: "keep-touch-99ef7.appspot.com",
  messagingSenderId: "911171478548",
  appId: "1:911171478548:web:2ecad7bec1b9cf1585f301"
}).auth();