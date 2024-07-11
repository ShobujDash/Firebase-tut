import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyD0Y9pWo8z2pbFhgBW4vQ-hlAQOvqsjIHk",
  authDomain: "bookify-9770d.firebaseapp.com",
  projectId: "bookify-9770d",
  storageBucket: "bookify-9770d.appspot.com",
  messagingSenderId: "229946175227",
  appId: "1:229946175227:web:db92ea7dd7c91bcc360a5e",
};


export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);