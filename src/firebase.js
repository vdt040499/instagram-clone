import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyDByH7Ln_0SSnNRHFbCC01-dvOJG1KsrFQ",
    authDomain: "instagram-clone-6399b.firebaseapp.com",
    databaseURL: "https://instagram-clone-6399b.firebaseio.com",
    projectId: "instagram-clone-6399b",
    storageBucket: "instagram-clone-6399b.appspot.com",
    messagingSenderId: "843616228444",
    appId: "1:843616228444:web:8932e2c8d92cec3b038299",
    measurementId: "G-188GVTT250"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
