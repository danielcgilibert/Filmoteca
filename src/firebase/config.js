import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY_FIREBASE,
  authDomain: process.env.REACT_APP_authDomain_FIREBASE ,
  projectId: process.env.REACT_APP_projectId_FIREBASE,
  storageBucket:process.env.REACT_APP_storageBucket_FIREBASE,
  messagingSenderId: process.env.REACT_APP_messagingSenderId_FIREBASE,
  appId: process.env.REACT_APP_appId_FIREBASE,
  measurementId: process.env.REACT_APP_measurementId_FIREBASE
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider };
