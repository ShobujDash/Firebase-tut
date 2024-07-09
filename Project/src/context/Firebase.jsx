import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";

// Create the context
const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyD0Y9pWo8z2pbFhgBW4vQ-hlAQOvqsjIHk",
  authDomain: "bookify-9770d.firebaseapp.com",
  projectId: "bookify-9770d",
  storageBucket: "bookify-9770d.appspot.com",
  messagingSenderId: "229946175227",
  appId: "1:229946175227:web:b931ee66aeec0a11360a5e",
};

// Custom hook to use the Firebase context
export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

// Provider component
export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const signupUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  const signInUserWithEmailAndPass = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password);

  const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

  const isLoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        signInUserWithEmailAndPass,
        signinWithGoogle,
        isLoggedIn,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
