import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyALo46rqUMZD0GaX6qXbISocwgRUtgVrMg",
    authDomain: "mern-blogging-website-7ec72.firebaseapp.com",
    projectId: "mern-blogging-website-7ec72",
    storageBucket: "mern-blogging-website-7ec72.firebasestorage.app",
    messagingSenderId: "28227299497",
    appId: "1:28227299497:web:164b397285236c2d8ea1b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//google auth

const provider = new GoogleAuthProvider()

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
        .then((result) => {
            user = result.user
        })
        .catch((err) => {
            console.log(err)
        })

    return user;
}
