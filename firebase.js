// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAM-HoszHfKCObbt9Qz2ZiVKmCn1mnl11o",
  authDomain: "rn-communication-14826.firebaseapp.com",
  projectId: "rn-communication-14826",
  storageBucket: "rn-communication-14826.appspot.com",
  messagingSenderId: "808819221650",
  appId: "1:808819221650:web:ec4f34d2e95efd0a89b24b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
export function signIn(email,password){
    return signInWithEmailAndPassword(auth,email,password)
}
export function signUp(email,password){
    return createUserWithEmailAndPassword(app,email,password)
}