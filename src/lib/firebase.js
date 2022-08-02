import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyDEQxWXQVBhGufm_QKBIFwHr6iIx8hGtN0",
    authDomain: "instagram-clone-3aad6.firebaseapp.com",
    projectId: "instagram-clone-3aad6",
    storageBucket: "instagram-clone-3aad6.appspot.com",
    messagingSenderId: "165672590771",
    appId: "1:165672590771:web:65b03f1d994b2baff33fc6"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);
console.log('firebase', firebase)
export { firebase, FieldValue };