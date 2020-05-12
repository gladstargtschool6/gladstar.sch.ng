// TODO: Replace the following with your app's Firebase project configuration//
var firebaseConfig = {
    apiKey: "AIzaSyCVgTBrHMK808-huXDbEsx5nDmyPwbxiLI",
    authDomain: "gladstar.sch.ng",
    databaseURL: "https://marine-infinity-244511.firebaseio.com",
    projectId: "marine-infinity-244511",
    storageBucket:"marine-infinity-244511.appspot.com" ,
    messagingSenderId: "web:ZGU5YTEyYTUtYTNmZi00MDA4LWExNTMtYTc0OWY4OTAxYmY1",
    appId: "1:61216389060:web:ce5a28284874fd514b5691",
    measurementId: "G-measurement-id",
    };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase with a "default" Firebase project
var defaultProject = firebase.initializeApp(firebaseConfig);

console.log(defaultProject.name);  // "[DEFAULT]"

// Option 1: Access Firebase services via the defaultProject variable
var defaultStorage = defaultProject.storage();
var defaultFirestore = defaultProject.firestore();

// Option 2: Access Firebase services using shorthand notation
defaultStorage = firebase.storage();
defaultFirestore = firebase.firestore();