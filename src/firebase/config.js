
import firebase from 'firebase'
import 'firebase/storage';
import 'firebase/firebase-firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBwTbqP1L2OLeQVOCqT0VSnpiZaOID-EUQ",
    authDomain: "photo-gallery-8aa39.firebaseapp.com",
    projectId: "photo-gallery-8aa39",
    storageBucket: "photo-gallery-8aa39.appspot.com",
    messagingSenderId: "505499070352",
    appId: "1:505499070352:web:e96672a8078ea24769cd15"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };