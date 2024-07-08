import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth ,GoogleAuthProvider,signInWithPopup,} from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then(value => alert("Success"));
  };

  const signupWithGoogle = () => {
    signInWithPopup(auth,googleProvider)
  }

  return (
    <div className="signup-page">
      <h1>Signup Page</h1>
      <label>Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        required
        placeholder="Enter your Email here"
      />
      <label>Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        required
        placeholder="Enter your password here"
      />
      <br />
      <button onClick={signupWithGoogle}>Sign In With Google</button>
      <button onClick={createUser}>Signup</button>
    </div>
  );
}

export default Signup;
