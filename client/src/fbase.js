import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAel6yZg9dUuqVwP1GbGNXaY3nTifufjM0",
    authDomain: "wap-89dab.firebaseapp.com",
    databaseURL: "https://wap-89dab.firebaseio.com",
    projectId: "wap-89dab",
    storageBucket: "wap-89dab.appspot.com",
    messagingSenderId: "536255303202",
    appId: "1:536255303202:web:cf4fcaee20f84657dc847b"
  };

export default firebase.initializeApp(firebaseConfig);
export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const db = firebase.firestore();