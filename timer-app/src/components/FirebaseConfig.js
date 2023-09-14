import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD4G_x4pgINAUfUjYDHevAUrjEYL2auZbc",
    authDomain: "emailpasswordlogin-aeeb3.firebaseapp.com",
    projectId: "emailpasswordlogin-aeeb3",
    storageBucket: "emailpasswordlogin-aeeb3.appspot.com",
    messagingSenderId: "103736158482",
    appId: "1:103736158482:web:12243692fc74e0d2226bcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export { auth, provider }