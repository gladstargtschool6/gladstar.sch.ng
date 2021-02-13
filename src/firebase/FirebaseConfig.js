import * as firebase from 'firebase';
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC3XpK2EeGDNbc9dpbaz2SmeNcHvp0mH1Y",
  authDomain: "marine-infinity-244511.firebaseapp.com",
  databaseURL: "https://marine-infinity-244511.firebaseio.com",
  projectId: "marine-infinity-244511",
  storageBucket: "marine-infinity-244511.appspot.com",
  messagingSenderId: "61216389060",
  appId: "1:61216389060:web:ce5a28284874fd514b5691",
  measurementId: "G-8Y4J3C5PXW"
};
firebase.initializeApp(config);

//Ensure date don't break
firebase.firestore().settings({timestampsInSnapshots:true});
export default firebase;

const firestore = firebase.firestore();
const storage = firebase.storage();
export {firestore, storage}