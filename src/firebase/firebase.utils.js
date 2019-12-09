import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA1MaPmRUVXwMSAntdqNuil1cnzlxekqMo",
    authDomain: "crwn-db-89bce.firebaseapp.com",
    databaseURL: "https://crwn-db-89bce.firebaseio.com",
    projectId: "crwn-db-89bce",
    storageBucket: "crwn-db-89bce.appspot.com",
    messagingSenderId: "480343242800",
    appId: "1:480343242800:web:71c90df8c009547aa095f5",
    measurementId: "G-JGRY9SY7C6"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore=firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;
  