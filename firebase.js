 
// import { initializeApp } from "firebase/app";
 
// import firebase from 'firebase/compat/app';
 
// import 'firebase/compat/firestore';

import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBGZhHuI4FBCp8O-ieZ2E5iJ10LD-ihuh0',
  authDomain: 'disney-next-clone.firebaseapp.com',
  projectId: 'disney-next-clone',
  storageBucket: 'disney-next-clone.appspot.com',
  messagingSenderId: '144789222051',
  appId: '1:144789222051:web:383ccad3ce2aa928390516',
}

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const app = !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.app()

// const db = (
//   firebase.app[0] ?? firebase.initializeApp(firebaseConfig)
// ).firestore()

// export { db}
//Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage }
