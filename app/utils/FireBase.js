import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDMHeF45Rqp0LKiOclOWQ9l6UqMTBcHWu8",
  authDomain: "tenedores-fb6bb.firebaseapp.com",
  databaseURL: "https://tenedores-fb6bb.firebaseio.com",
  projectId: "tenedores-fb6bb",
  storageBucket: "tenedores-fb6bb.appspot.com",
  messagingSenderId: "599921308670",
  appId: "1:599921308670:web:d1d343d44083c587f106af",
  measurementId: "G-71FS2PJC0H"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
