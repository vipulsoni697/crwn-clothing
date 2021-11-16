import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDP8Dia72y8NRGkWxnubGs97vZkgzllCcE",
    authDomain: "crwn-db-4819c.firebaseapp.com",
    projectId: "crwn-db-4819c",
    storageBucket: "crwn-db-4819c.appspot.com",
    messagingSenderId: "375195858479",
    appId: "1:375195858479:web:d5097ebfefa4a0a5da78da",
    measurementId: "G-54Y19SHBGK"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account '});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

