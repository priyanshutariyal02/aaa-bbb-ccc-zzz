import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6ttaIRDKxJU8TWNaXG0MuScKx45eriok",
    authDomain: "blog-demo-5d6d1.firebaseapp.com",
    projectId: "blog-demo-5d6d1",
    storageBucket: "blog-demo-5d6d1.appspot.com",
    messagingSenderId: "577086874908",
    appId: "1:577086874908:web:841ad4d51c2be33ebac6d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();