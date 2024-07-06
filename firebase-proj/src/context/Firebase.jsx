import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { createContext, useContext } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAvdVZ_hGHEbDcf7Tz3S_lrIdKuvHBw88E",
  authDomain: "app-8ca28.firebaseapp.com",
  databaseURL: "https://app-8ca28-default-rtdb.firebaseio.com",
  projectId: "app-8ca28",
  storageBucket: "app-8ca28.appspot.com",
  messagingSenderId: "798051992215",
  appId: "1:798051992215:web:b212f50722466b51711fd2",
  databaseURL: "https://app-8ca28-default-rtdb.firebaseio.com/",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

// create contexty
const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  const putData = (key, data) => {
    return set(ref(database, key), data);
  };

  return (
    <FirebaseContext.Provider
      value={{ signupUserWithEmailAndPassword, putData }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
