"use client";

// Import the functions you need from the SDKs you needssssss
import { useEffect, useState } from "react";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsMCgW4lbCMPzVLk7pvaXm4L0kxHeLn0o",
  authDomain: "goskyfly-ef959.firebaseapp.com",
  projectId: "goskyfly-ef959",
  storageBucket: "goskyfly-ef959.firebasestorage.app",
  messagingSenderId: "1072582428425",
  appId: "1:1072582428425:web:92e56698ab669c4c1df5d8",
  measurementId: "G-HRE00HWNPM",
};

// Initialize Firebase
let app;
let auth;
let fireStore;
let googleAuth;
if (typeof window !== "undefined") {
  // Initialize Firebase only if it hasn't been initialized yet
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApp();
  }

  auth = getAuth(app);
  fireStore = getFirestore(app);
  googleAuth = new GoogleAuthProvider();
}

export { app, auth, fireStore, googleAuth };

// Create a hook to get the current user
export function useAuth() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, []);

  return currentUser;
}
