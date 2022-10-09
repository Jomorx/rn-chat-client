// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAIXtXjZI78TT1X7tN-zBfoCNAVbLVpRIo",
  authDomain: "rm-chat-client.firebaseapp.com",
  projectId: "rm-chat-client",
  storageBucket: "rm-chat-client.appspot.com",
  messagingSenderId: "856675351917",
  appId: "1:856675351917:web:c6cfe32a415366ab8aae64"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}