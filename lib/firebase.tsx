import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA1BXWomWYOaxKvV26YeszfNZ8W4GyEGVo",
  authDomain: "betfire-ac9ed.firebaseapp.com",
  projectId: "betfire-ac9ed",
  storageBucket: "betfire-ac9ed.appspot.com",
  messagingSenderId: "674467181975",
  appId: "1:674467181975:web:020f6d59f708d124c940d2",
  measurementId: "G-XQYDTECYXE",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();
