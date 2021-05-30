import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'


export  const firebaseConfig = {
    apiKey: "AIzaSyASMozle_9bHjIZihGqvb_qi43qBr6D_X4",
    authDomain: "iliatura.firebaseapp.com",
    projectId: "iliatura",
    storageBucket: "iliatura.appspot.com",
    messagingSenderId: "794581783495",
    appId: "1:794581783495:web:8e7589001a3ef169757fe2"
};

let app = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore(app);
firebase.firestore()

export default firebase;
