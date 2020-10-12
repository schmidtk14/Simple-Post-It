import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDdWlSmaJhToznLJB94MMjbX3GR1I_NrgA",
    authDomain: "postit-server.firebaseapp.com",
    databaseURL: "https://postit-server.firebaseio.com",
    projectId: "postit-server",
    storageBucket: "postit-server.appspot.com",
    messagingSenderId: "1081284913317",
    appId: "1:1081284913317:web:5a91f63bb5ed7072fc054c"
};
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
};
const provider = new firebase.auth.GoogleAuthProvider();
firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const firestore = firebase.firestore();