// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = { 
    apiKey: "AIzaSyARhBABOeZpkuY4wa3rQRqR-CueOr8RIls",
    authDomain: "clone-6d1a7.firebaseapp.com",
    projectId: "clone-6d1a7",
    storageBucket: "clone-6d1a7.appspot.com",
    messagingSenderId: "899695176749",
    appId: "1:899695176749:web:2d80f4b4c1b46e902f9ca4",
    measurementId: "G-K2S3JGHDNW"
  };
  
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore
  const auth = firebase.auth();

  export { db, auth };
