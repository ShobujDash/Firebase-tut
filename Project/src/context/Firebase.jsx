import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { createContext, useContext } from "react";

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

// Provider component
export const FirebaseProvider = ({ children }) => {
  const signupUserWithEmailAndPassword = (email, passworde) => createUserWithEmailAndPassword(firebaseAuth, email, passworde);
 

  return (
    <FirebaseContext.Provider
      value={{ signupUserWithEmailAndPassword }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
