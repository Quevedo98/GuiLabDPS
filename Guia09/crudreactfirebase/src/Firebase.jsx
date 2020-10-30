import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAHz3U_dJGqIkp2s9_1Vkn31FWEFUvjizU",
    authDomain: "crudreactfirebase-9f176.firebaseapp.com",
    databaseURL: "https://crudreactfirebase-9f176.firebaseio.com",
    projectId: "crudreactfirebase-9f176",
    storageBucket: "crudreactfirebase-9f176.appspot.com",
    messagingSenderId: "463262133603",
    appId: "1:463262133603:web:174d9456cd092f5bd8b756"
  };

  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();