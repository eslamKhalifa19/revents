import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "revents-d47ea.firebaseapp.com",
  projectId: "revents-d47ea",
  storageBucket: "revents-d47ea.appspot.com",
  messagingSenderId: "616710303554",
  appId: "1:616710303554:web:4c4a0321c662789aff22db",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
