import firebase from "firebase/app";
import "firebase/database";

const apis = {
  apiKey: "AIzaSyCE6-PAF2G9pCoapYm5ANPovtbiIjl2Mgo",
  authDomain: "swp-final-exam-49609.firebaseapp.com",
  databaseURL: "https://swp-final-exam-49609.firebaseio.com",
  projectId: "swp-final-exam-49609",
  storageBucket: "swp-final-exam-49609.appspot.com",
  messagingSenderId: "70623787007",
  appId: "1:70623787007:web:72446ab1245061cb"
};

firebase.initializeApp(apis);

export default firebase;
