import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDpVEfYxrzvgefbFOwHjgIKic-H97pLkgk",
  authDomain: "rreports-97d5c.firebaseapp.com",
  databaseURL: "https://rreports-97d5c-default-rtdb.firebaseio.com",
  projectId: "rreports-97d5c",
  storageBucket: "rreports-97d5c.appspot.com",
  messagingSenderId: "778955420671",
  appId: "1:778955420671:web:08806754738fb187b2edca",
  measurementId: "G-CXGC68ZCQ1",
};

// Initialize Firebase
export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
