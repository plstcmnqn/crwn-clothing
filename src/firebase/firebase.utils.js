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

  export const createUserProfileDocument = async(userAuth,additionalData)=>{
    if(!userAuth)return; 

   const userRef =firestore.doc(`users/${userAuth.uid}`);
   const snapShot = await userRef.get();
 
   if(!snapShot.exists){

     const {displayName,email}= userAuth;
     const createdAt = new Date();
     try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
     } catch(error){
      console.log('error creating user',error.message);
     }
   }
   return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore=firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;
  